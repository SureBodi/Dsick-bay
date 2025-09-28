"use client";
import React, { useState, useEffect } from "react";

export default function PlanSignupModal({ open, onClose, plan, onSubmit }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // Reset form each time modal opens
  useEffect(() => {
    if (open) {
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      setErrors({ name: "", company: "", email: "", phone: "", message: "" });
    }
  }, [open]);

  if (!open) return null;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    const v = String(value || "").trim();
    switch (name) {
      case "name":
        return v.length < 2 ? "Please enter your full name." : "";
      case "company":
        return v.length < 2 ? "Company/Business name is required." : "";
      case "email":
        return !emailRegex.test(v) ? "Enter a valid email address." : "";
      case "phone": {
        const digits = v.replace(/\D/g, "");
        return digits.length < 7 ? "Enter a valid phone number." : "";
      }
      case "message":
        return v.length > 1000 ? "Message is too long (max 1000 chars)." : "";
      default:
        return "";
    }
  };

  const validateAll = (data) => {
    const nextErrors = Object.keys(data).reduce((acc, key) => {
      acc[key] = validateField(key, data[key]);
      return acc;
    }, {});
    setErrors(nextErrors);
    // any error string present?
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // live-validate field
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handlePlanSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);

      // Trim before validating/sending
      const payloadForm = {
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };

      // Validate all fields
      const ok = validateAll(payloadForm);
      if (!ok) {
        setSubmitting(false);
        return;
      }

      const payload = {
        source: "plan",
        selectedPlan: plan || null, // this comes from props
        ...payloadForm,
        meta: {
          page: typeof window !== "undefined" ? window.location.pathname : "",
          utm:
            typeof window !== "undefined"
              ? Object.fromEntries(new URLSearchParams(window.location.search))
              : {},
        },
        website: "", // honeypot field (leave empty)
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to submit.");
        setSubmitting(false);
        return;
      }
      // success UX (toast/modal)
      console.log("Plan signup submitted:", data);
      setSubmitting(false);
      onClose?.();
    } catch (err) {
      setSubmitting(false);
      console.error("Plan signup error:", err);
    }
  };

  // helper to apply red border when invalid
  const errorClass = (key) =>
    errors[key] ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div>
            <h3 className="m-0 text-lg font-semibold">Get Started</h3>
            {/* Show selected plan (remove this block if you prefer “under the hood” only) */}
            {plan?.title && (
              <p className="m-0 text-sm text-gray-600">
                Selected plan: <span className="font-medium">{plan.title}</span>
                {plan?.price
                  ? ` • ${plan.price}${plan?.per ? `/${plan.per}` : ""}`
                  : ""}
              </p>
            )}
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900">
            ×
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 ${errorClass(
                "name"
              )}`}
              placeholder="Your full name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name ? (
              <p id="err-name" className="mt-1 text-xs text-red-600">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm mb-1">Company / Business</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 ${errorClass(
                "company"
              )}`}
              placeholder="Company name"
              required
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "err-company" : undefined}
            />
            {errors.company ? (
              <p id="err-company" className="mt-1 text-xs text-red-600">
                {errors.company}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 ${errorClass(
                  "email"
                )}`}
                placeholder="name@company.com"
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email ? (
                <p id="err-email" className="mt-1 text-xs text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 ${errorClass(
                  "phone"
                )}`}
                placeholder="+234 ..."
                required
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "err-phone" : undefined}
              />
              {errors.phone ? (
                <p id="err-phone" className="mt-1 text-xs text-red-600">
                  {errors.phone}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 min-h-[100px] ${errorClass(
                "message"
              )}`}
              placeholder="Tell us a bit more…"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message ? (
              <p id="err-message" className="mt-1 text-xs text-red-600">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 border rounded-md"
              onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-white"
              style={{ background: "#9176e2", fontWeight: 700 }}
              onClick={handlePlanSubmit}
              disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
