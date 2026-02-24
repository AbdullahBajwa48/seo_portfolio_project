"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = `w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3.5
                      text-white text-sm placeholder-gray-600
                      focus:outline-none focus:border-orange-500/60 focus:bg-[#1e1e1e]
                      transition-colors duration-300`;

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left: graphical info panel (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2 bg-[#141414] border border-gray-800
                       rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Orange top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-400" />

            <div className="p-7 md:p-9 flex flex-col gap-8 flex-1">

              {/* Headline */}
              <div>
                <p className="text-orange-500 text-xs font-bold tracking-widest
                               uppercase mb-3">Send a Message</p>
                <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-snug">
                  Let's Talk About <span className="text-orange-500">Your SEO</span>
                </h2>
              </div>

              {/* Decorative dots grid */}
              <div className="grid grid-cols-6 gap-2 opacity-20">
                {[1,0.3,1,1,0.3,1, 0.3,1,1,0.3,1,0.3, 1,1,0.3,1,0.3,1, 0.3,1,1,0.3,1,1].map((op, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-orange-500"
                    style={{ opacity: op }}
                  />
                ))}
              </div>

              {/* What happens next */}
              <div className="flex flex-col gap-4">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  What happens next
                </p>
                {[
                  { step: "01", text: "I receive your message" },
                  { step: "02", text: "I review your website & goals" },
                  { step: "03", text: "We have a no-pressure conversation" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-orange-500/10 border
                                     border-orange-500/20 text-orange-500 text-xs font-bold
                                     flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <p className="text-gray-400 text-sm pt-0.5">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Response time — merged here */}
              <div className="mt-auto bg-orange-500/10 border border-orange-500/20
                              rounded-xl p-4 flex items-start gap-3">
                <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I respond to all enquiries within{" "}
                  <span className="text-orange-400 font-semibold">24 hours</span>{" "}
                  on business days.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form (3/5) ── */}
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
                /* ── Success state ── */
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
                  <h3 className="text-white font-extrabold text-xl">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out. I'll get back to you within 24 hours on business days.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-orange-500 text-xs font-bold uppercase tracking-wider
                               hover:text-orange-400 transition-colors duration-300"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                        Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text" name="name" required
                        placeholder="Your name"
                        value={form.name} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                        Email <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email" name="email" required
                        placeholder="your@email.com"
                        value={form.email} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                      Phone
                    </label>
                    <input
                      type="tel" name="phone"
                      placeholder="04xx xxx xxx"
                      value={form.phone} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message" required rows={5}
                      placeholder="Tell me about your business and what you're looking to achieve..."
                      value={form.message} onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  {formState === "error" && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50
                               active:scale-95 text-white font-bold py-4 rounded-xl
                               transition-all duration-300 text-sm
                               inline-flex items-center justify-center gap-2 group"
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none"
                          viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </button>

                  <p className="text-gray-700 text-xs text-center">
                    No spam. No sales pressure. Just a straight conversation.
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