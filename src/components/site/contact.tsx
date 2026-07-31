// src/components/site/contact.tsx
"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { contactInfo, getCatalog } from "@/lib/catalog";
import { Kicker, Reveal } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

const fieldBase = "w-full border-2 border-ink-line bg-ink px-4 py-3.5 font-body text-sm text-bone placeholder:text-bone-dim/30 transition-colors focus:border-tangerine focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, lang } = useLanguage();
  const { subjects } = getCatalog(lang); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.get('nombre'),
          email: formData.get('email'),
          telefono: formData.get('telefono'),
          asunto: formData.get('asunto'),
          mensaje: formData.get('mensaje'),
          lang
        })
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Error");

      setSent(true);
      toast.success(t.contact.toast.success, { description: t.contact.toast.desc });
      formElement.reset();
      window.setTimeout(() => setSent(false), 4000);
    } catch (err) {
      toast.error(lang === "es" ? "Error al enviar" : "Sending error", { 
        description: lang === "es" ? "No se pudo enviar el mensaje, intenta más tarde." : "Could not send message, try later." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-tangerine/10 blur-[130px]"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center border border-ink-line bg-ink-raise px-3 py-2">
                <Kicker>{t.contact.kicker}</Kicker>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-bone">
                {t.contact.title.p1}
                <br />
                <span className="text-tangerine">{t.contact.title.tangerine}</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-bone-dim/55">
                {t.contact.desc}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <form
                className="mt-9 space-y-3"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    name="nombre"
                    placeholder={t.contact.form.name}
                    className={fieldBase}
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder={t.contact.form.email}
                    className={fieldBase}
                  />
                  <input
                    name="telefono"
                    placeholder={t.contact.form.phone}
                    className={fieldBase}
                  />
                  <select
                    name="asunto"
                    defaultValue=""
                    required
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%23FF5A1F' stroke-width='2'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                    }}
                    className={`${fieldBase} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      {t.contact.form.subject}
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-ink">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  placeholder={t.contact.form.msg}
                  className={`${fieldBase} resize-none`}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 border-2 border-tangerine bg-tangerine px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:-translate-y-[1px] hover:bg-amber hover:shadow-[5px_5px_0_0_hsl(var(--bone))] active:translate-y-0 active:shadow-none disabled:opacity-50 sm:w-auto"
                >
                  {loading ? (lang === "es" ? "Enviando..." : "Sending...") : sent ? t.contact.form.btn_sent : t.contact.form.btn}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </Reveal>
          </div>

          {/* details */}
          <Reveal delay={120}>
            <div className="border-2 border-ink-line bg-ink-raise">
              <div className="border-b-2 border-ink-line px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim/45">
                  {t.contact.other}
                </p>
              </div>
              <ul>
                {[
                  { Icon: Mail, label: t.contact.labels.email, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { Icon: Phone, label: t.contact.labels.phone, value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
                  { Icon: MapPin, label: t.contact.labels.office, value: contactInfo.address, href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex gap-4 border-b border-ink-line px-6 py-5 last:border-0"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-tangerine text-tangerine">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/40">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block break-words font-display text-base font-bold text-bone underline-offset-4 transition-colors hover:text-tangerine hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[13px] leading-relaxed text-bone-dim/60">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t-2 border-ink-line bg-ink p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/40">
                  {t.contact.schedule.title}
                </p>
                <p className="mt-2 font-display text-lg font-extrabold uppercase tracking-tight text-bone">
                  {t.contact.schedule.days}
                </p>
                <p className="mt-1 text-[13px] text-bone-dim/50">
                  {t.contact.schedule.tz}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-2 w-2 animate-blip bg-tangerine" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tangerine">
                    {t.contact.schedule.badge}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}