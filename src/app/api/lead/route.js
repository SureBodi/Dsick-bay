import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

// Basic HTML escaper to avoid accidental HTML injection in the email
function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSupportEmail(payload) {
  const {
    source,                 // "pilot" | "plan"
    selectedPlan,           // { key,title,price,per,billing } | null
    name, company, email, phone, message,
    meta = {},
  } = payload;

  return `
    <h2>New ${source === "plan" ? "Plan Signup" : "Pilot Interest"}</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Company:</strong> ${esc(company)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    <p><strong>Phone:</strong> ${esc(phone)}</p>
    ${selectedPlan ? `
      <h3>Selected Plan</h3>
      <p><strong>Title:</strong> ${esc(selectedPlan.title || "")}</p>
      <p><strong>Price:</strong> ${esc(selectedPlan.price || "")}${selectedPlan.per ? `/${esc(selectedPlan.per)}` : ""}</p>
      <p><strong>Billing:</strong> ${esc(selectedPlan.billing || "")}</p>
      <p><strong>Key:</strong> ${esc(selectedPlan.key || "")}</p>
    ` : ""}

    ${message ? `<h3>Message</h3><p>${esc(message)}</p>` : ""}

    <h3>Meta</h3>
    <p><strong>Source:</strong> ${esc(source)}</p>
    ${meta.utm ? `<p><strong>UTM:</strong> ${esc(JSON.stringify(meta.utm))}</p>` : ""}
    ${meta.page ? `<p><strong>Page:</strong> ${esc(meta.page)}</p>` : ""}
    ${meta.userAgent ? `<p><strong>User-Agent:</strong> ${esc(meta.userAgent)}</p>` : ""}
  `;
}

function renderUserEmail(payload) {
  const { name, selectedPlan, source } = payload;
  const heading = source === "plan" ? "Thanks for choosing a plan!" : "Thanks for starting a pilot!";
  const planLine = selectedPlan?.title
    ? `<p><strong>Your selection:</strong> ${esc(selectedPlan.title)}${selectedPlan.price ? ` • ${esc(selectedPlan.price)}${selectedPlan.per ? `/${esc(selectedPlan.per)}` : ""}` : ""}</p>`
    : "";

  return `
    <h2>${heading}</h2>
    <p>Hi ${esc(name || "there")},</p>
    <p>We’ve received your details and will get back to you shortly.</p>
    ${planLine}
    <p>Best regards,<br/>Vaedoc Team</p>
  `;
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Minimal validation
    const {
      source, // "pilot" | "plan" (required)
      selectedPlan = null, // object or null
      name,
      company,
      email,
      phone,
      message = "",
      meta = {}, // optional: utm/page/userAgent etc
      // optional honeypot for spam control
      website, // if present (hidden field), we treat as spam
    } = body || {};

    if (website) {
      // honeypot triggered
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!source || !name || !company || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Send to support
    const supportTo = process.env.SUPPORT_EMAIL || process.env.SMTP_USER || process.env.EMAIL_USER;
    if (!supportTo) {
      return NextResponse.json(
        { ok: false, error: "SUPPORT_EMAIL not configured." },
        { status: 500 }
      );
    }

    const subjectToSupport =
      source === "plan"
        ? `New Plan Signup — ${company} (${name})`
        : `New Pilot Interest — ${company} (${name})`;

    const supportHtml = renderSupportEmail({
      source,
      selectedPlan,
      name,
      company,
      email,
      phone,
      message,
      meta: {
        ...meta,
        userAgent: req.headers.get("user-agent") || "",
      },
    });

    await sendEmail({
      to: supportTo,
      subject: subjectToSupport,
      html: supportHtml,
      text: `Lead from ${name} (${company}) — ${source}`,
    });

    // Send confirmation to the user
    const subjectToUser =
      source === "plan" ? "We received your plan selection" : "We received your pilot request";

    const userHtml = renderUserEmail({
      source,
      selectedPlan,
      name,
    });

    await sendEmail({
      to: email,
      subject: subjectToUser,
      html: userHtml,
      text: "Thanks! We’ll be in touch shortly.",
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (err) {
    console.error("Lead POST error:", err);
    return NextResponse.json({ ok: false, error: "Email send failed." }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json({ ok: true }, { status: 200 });
}
