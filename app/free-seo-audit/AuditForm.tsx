"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

export default function AuditForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", website: "", challenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "audit" }),
      });
      setFormState(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", website: "", challenge: "" });
    } catch {
      setFormState("error");
    }
  };

  const inputClass = `w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3.5
                      text-white text-sm placeholder-gray-600
                      focus:outline-none focus:border-orange-500/60 focus:bg-[#1e1e1e]
                      transition-colors duration-300`;

  const labelClass = "text-gray-500 text-xs font-semibold uppercase tracking-widest";

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left info panel (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2 bg-[#141414] border border-gray-800
                       rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-400" />

            <div className="p-7 md:p-9 flex flex-col gap-7 flex-1">

              <div>
                <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">
                  Request Your Free Audit
                </p>
                <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-snug">
                  Let's See How Your{" "}
                  <span className="text-orange-500">Site Stacks Up</span>
                </h2>
              </div>

              {/* Dot grid */}
              <div className="grid grid-cols-6 gap-2 opacity-20">
                {[1,0.3,1,1,0.3,1, 0.3,1,1,0.3,1,0.3, 1,1,0.3,1,0.3,1, 0.3,1,1,0.3,1,1].map((op, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500"
                    style={{ opacity: op }} />
                ))}
              </div>

              {/* What you'll get */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  What you'll get
                </p>
                {[
                  "Full website SEO analysis",
                  "Prioritised action plan",
                  "Quick wins identified",
                  "Competitor snapshot",
                  "No sales pressure",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-orange-500/10 border
                                     border-orange-500/30 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </span>
                    <p className="text-gray-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {/* Turnaround */}
              <div className="mt-auto bg-orange-500/10 border border-orange-500/20
                              rounded-xl p-4 flex items-start gap-3">
                <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Audit delivered within{" "}
                  <span className="text-orange-400 font-semibold">2–3 business days</span>{" "}
                  of receiving your request.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right form (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 bg-[#141414] border border-gray-800
                       rounded-2xl overflow-hidden"
          >
            <div className="h-1 w-full bg-gradient-to-r from-gray-800 to-orange-500/40" />

            <div className="p-7 md:p-9">

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center
                             text-center py-16 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 border
                                  border-orange-500/30 flex items-center justify-center">
                    <svg className="w-7 h-7 text-orange-500" fill="none"
                      stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-extrabold text-xl">Audit Requested!</h3>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    Thanks! I'll review your website and send your audit within
                    2–3 business days.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-orange-500 text-xs font-bold uppercase tracking-wider
                               hover:text-orange-400 transition-colors duration-300"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>
                        Name <span className="text-orange-500">*</span>
                      </label>
                      <input type="text" name="name" required
                        placeholder="Your name"
                        value={form.name} onChange={handleChange}
                        className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>
                        Email <span className="text-orange-500">*</span>
                      </label>
                      <input type="email" name="email" required
                        placeholder="your@email.com"
                        value={form.email} onChange={handleChange}
                        className={inputClass} />
                    </div>
                  </div>

                  {/* Phone + Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Phone</label>
                      <input type="tel" name="phone"
                        placeholder="04xx xxx xxx"
                        value={form.phone} onChange={handleChange}
                        className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>
                        Website URL <span className="text-orange-500">*</span>
                      </label>
                      <input type="url" name="website" required
                        placeholder="https://yourwebsite.com.au"
                        value={form.website} onChange={handleChange}
                        className={inputClass} />
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      What's your biggest challenge with getting found online?{" "}
                      <span className="text-gray-600 normal-case tracking-normal font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea name="challenge" rows={4}
                      placeholder="e.g. I'm not showing up in Google Maps, my competitors rank higher than me..."
                      value={form.challenge} onChange={handleChange}
                      className={`${inputClass} resize-none`} />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-orange-500 hover:bg-orange-600
                               disabled:bg-orange-500/50 active:scale-95
                               text-white font-bold py-4 rounded-xl
                               transition-all duration-300 text-sm
                               inline-flex items-center justify-center gap-2 group"
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Request My Free Audit
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </button>

                  <p className="text-gray-700 text-xs text-center">
                    Free. No obligation. No sales pressure.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}