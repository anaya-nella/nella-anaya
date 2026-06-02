import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Users, Heart, ArrowUpRight, Quote, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nella Anaya — te acompaña" },
      { name: "description", content: "Mentorías, talleres de desarrollo personal y acompañamiento como doula con Nella Anaya." },
      { property: "og:title", content: "Nella Anaya — te acompaña" },
      { property: "og:description", content: "Mentorías, talleres de desarrollo personal y acompañamiento como doula." },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Sparkles,
    label: "01 — Acompañamiento 1:1",
    title: "Mentorías",
    body: "Sesiones personalizadas para emprendedores y profesionales que buscan claridad para avanzar en sus proyectos y objetivos. Trabajaremos juntos para identificar prioridades, diseñar un plan de acción y convertir ideas en resultados concretos.",
    tint: "var(--blush)",
  },
  {
    icon: Users,
    label: "02 — Grupos & comunidad",
    title: "Talleres de desarrollo personal",
    body: "Espacios grupales diseñados para fortalecer habilidades clave para el crecimiento personal y profesional. A través de dinámicas prácticas y herramientas aplicables, los participantes desarrollan claridad, confianza y capacidad de acción para alcanzar sus metas.",
    tint: "var(--sage-soft)",
  },
  {
    icon: Heart,
    label: "03 — Maternidad consciente",
    title: "Acompañamiento como doula",
    body: "Acompañamiento emocional, informativo y continuo durante el embarazo, parto y posparto. Mi objetivo es que cada mujer y familia se sientan escuchadas, informadas y acompañadas para vivir esta etapa con mayor confianza y tranquilidad.",
    tint: "var(--blush-soft)",
  },
];

const testimonials = [
  {
    quote: "Trabajar con Nella me devolvió la claridad que sentía perdida. Cada sesión deja una huella concreta.",
    title: "Camila R.",
    description: "Fundadora · estudio creativo",
  },
  {
    quote: "Su forma de escuchar transforma. Salí de los talleres con herramientas y con una nueva mirada de mí misma.",
    title: "Valentina M.",
    description: "Coordinadora de proyectos",
  },
  {
    quote: "Como doula nos acompañó con una calidez impecable. Vivimos un parto consciente y profundamente humano.",
    title: "Laura & Diego",
    description: "Familia acompañada",
  },
  {
    quote: "Nella combina estrategia y sensibilidad como pocas personas. Me ayudó a ordenar mi proyecto y mi energía.",
    title: "Andrea P.",
    description: "Diseñadora independiente",
  },
  {
    quote: "Encontré un espacio honesto, sin fórmulas, donde realmente pude avanzar en lo importante.",
    title: "Mariana T.",
    description: "Mentee · programa 1:1",
  },
  {
    quote: "Su mentoría me dio un mapa y, sobre todo, confianza para caminarlo a mi ritmo.",
    title: "Sofía L.",
    description: "Emprendedora",
  },
];

const principles = [
  "Escucha activa",
  "Claridad",
  "Confianza",
  "Presencia",
  "Propósito",
  "Acompañamiento",
  "Creatividad",
  "Cuidado",
];

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Organic background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="float-slow absolute -top-48 -right-40 h-[560px] w-[560px] rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle at center, var(--blush) 0%, transparent 70%)" }}
        />
        <div
          className="float-slower absolute top-[38%] -left-44 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle at center, var(--sage-soft) 0%, transparent 70%)" }}
        />
        <div
          className="float-slow absolute bottom-10 right-0 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle at center, var(--blush) 0%, transparent 70%)" }}
        />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#" className="font-serif text-2xl tracking-tight text-foreground transition-opacity hover:opacity-80">
            Nella<span className="text-[color:var(--sage-strong)]">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground sm:gap-8">
            <a href="#sobre-mi" className="link-underline hidden sm:inline transition-colors hover:text-foreground">Sobre mí</a>
            <a href="#servicios" className="link-underline hidden sm:inline transition-colors hover:text-foreground">Servicios</a>
            <a href="#testimonios" className="link-underline hidden sm:inline transition-colors hover:text-foreground">Testimonios</a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-background transition-all duration-300 hover:gap-2 hover:bg-[color:var(--ink-soft)]"
            >
              Contacto
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-4xl px-5 pb-20 pt-24 text-center sm:px-8 sm:pb-28 sm:pt-32">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground shadow-[0_1px_0_oklch(1_0_0_/_0.6)_inset]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--sage-strong)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--sage-strong)]" />
            </span>
            Mentoría · Talleres · Doula
          </span>
          <h1 className="reveal reveal-delay-1 mt-8 font-serif text-[3.25rem] leading-[1.02] sm:text-[6rem] sm:leading-[0.98]">
            Nella Anaya
          </h1>
          <p className="reveal reveal-delay-2 mt-4 font-serif text-xl italic text-[color:var(--ink-soft)] sm:text-2xl">
            te acompaña
          </p>
          <p className="reveal reveal-delay-3 mx-auto mt-7 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Espacios cálidos para encontrar claridad, confianza y dirección en los momentos de
            cambio de tu vida y tus proyectos.
          </p>
          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              Quiero agendar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card"
            >
              Conocer servicios
            </a>
          </div>
        </section>

        {/* Hero visual */}
        <section className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="reveal group relative">
            <div
              className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-[2.75rem] opacity-60 blur-2xl"
              style={{
                background:
                  "linear-gradient(120deg, var(--blush) 0%, transparent 40%, var(--sage-soft) 100%)",
              }}
              aria-hidden="true"
            />
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-border/70 shadow-[var(--shadow-lift)] transition-transform duration-700 ease-out group-hover:scale-[1.005] sm:aspect-[16/7] sm:rounded-[2.5rem]"
              style={{
                background:
                  "linear-gradient(135deg, var(--blush) 0%, #ffffff 45%, var(--sage-soft) 100%)",
              }}
              aria-hidden="true"
            >
              {/* Soft organic blob */}
              <svg
                className="absolute inset-0 h-full w-full opacity-70"
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="g1" cx="0.3" cy="0.4" r="0.6">
                    <stop offset="0%" stopColor="oklch(0.82 0.06 18)" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="oklch(0.82 0.06 18)" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="g2" cx="0.75" cy="0.6" r="0.5">
                    <stop offset="0%" stopColor="oklch(0.55 0.065 150)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="oklch(0.55 0.065 150)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="220" cy="180" rx="260" ry="180" fill="url(#g1)" />
                <ellipse cx="600" cy="240" rx="260" ry="160" fill="url(#g2)" />
              </svg>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)] backdrop-blur-md sm:bottom-8 sm:left-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--sage-strong)]" />
                Sesión activa · 2026
              </div>
            </div>
          </div>
        </section>

        {/* Principles marquee */}
        <section className="relative mt-20 overflow-hidden border-y border-border/50 bg-[color:var(--cream)]/60 py-5 sm:mt-28">
          <div className="flex w-max [animation:marquee_36s_linear_infinite] gap-12 whitespace-nowrap font-serif text-2xl italic text-[color:var(--ink-soft)]/70 sm:text-3xl">
            {[...principles, ...principles].map((p, i) => (
              <span key={i} className="flex items-center gap-12">
                {p}
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--blush-strong)]/60" />
              </span>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
          <div className="grid items-center gap-12 md:grid-cols-[5fr_6fr] md:gap-20">
            <div className="reveal relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 40% 40%, var(--blush) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div
                className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/70 shadow-[var(--shadow-lift)] sm:rounded-[2.25rem]"
                style={{
                  background:
                    "linear-gradient(160deg, var(--sage-soft) 0%, #ffffff 55%, var(--blush) 100%)",
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 400 500" className="h-full w-full opacity-80" aria-hidden="true">
                  <defs>
                    <radialGradient id="ab1" cx="0.5" cy="0.4" r="0.6">
                      <stop offset="0%" stopColor="oklch(0.55 0.065 150)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="oklch(0.55 0.065 150)" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="220" r="160" fill="url(#ab1)" />
                </svg>
              </div>
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border bg-card/95 px-4 py-3 text-sm shadow-[var(--shadow-soft)] backdrop-blur sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[color:var(--blush-strong)] text-[color:var(--blush-strong)]"
                      />
                    ))}
                  </div>
                  <span className="font-medium">+120 personas acompañadas</span>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--sage-strong)]">
                — Sobre mí
              </p>
              <h2 className="mt-5 font-serif text-[2rem] leading-[1.1] sm:text-[2.75rem]">
                Acompañar a las personas en los momentos de{" "}
                <span className="italic text-[color:var(--sage-strong)]">cambio.</span>
              </h2>
              <div className="mt-7 h-px w-12 bg-[color:var(--blush-strong)]/50" />
              <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--ink-soft)] sm:text-base">
                Me apasiona acompañar a las personas en momentos de cambio. Ya sea que estén
                construyendo un emprendimiento, redefiniendo sus objetivos, desarrollando un
                proyecto creativo o atravesando una nueva etapa de vida, disfruto creando espacios
                donde puedan encontrar claridad, confianza y dirección.
              </p>
              <p className="mt-5 text-[15px] leading-[1.75] text-[color:var(--ink-soft)] sm:text-base">
                A lo largo de mi camino he combinado mi experiencia en comunicación, innovación y
                mentoría con mi interés por el desarrollo humano, la creatividad y el aprendizaje
                continuo. Hoy, mi trabajo reúne todas esas facetas con un mismo propósito: ayudar
                a que más personas construyan una vida y proyectos que se parezcan a lo que
                realmente quieren para sí mismas.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/70 pt-8">
                {[
                  { k: "+10", v: "años de práctica" },
                  { k: "+120", v: "personas acompañadas" },
                  { k: "3", v: "áreas de trabajo" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="font-serif text-3xl text-foreground">{s.k}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--sage-strong)]">
                — Servicios
              </p>
              <h2 className="mt-5 font-serif text-[2rem] leading-[1.1] sm:text-[2.75rem]">
                Espacios pensados para{" "}
                <span className="italic text-[color:var(--sage-strong)]">acompañarte.</span>
              </h2>
            </div>
            <p className="reveal reveal-delay-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tres caminos complementarios para distintos momentos de tu vida. Elige el que
              mejor resuena contigo hoy.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7">
            {services.map(({ icon: Icon, label, title, body, tint }, i) => (
              <article
                key={title}
                className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--sage-strong)]/30 hover:shadow-[var(--shadow-lift)] sm:p-8`}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: tint }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
                    style={{ background: tint }}
                  >
                    <Icon className="h-5 w-5 text-[color:var(--ink)]" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-7 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </p>
                <h3 className="mt-2 font-serif text-[1.4rem] leading-snug sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.7] text-[color:var(--ink-soft)]">
                  {body}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground">
                  <span className="link-underline">Saber más</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--sage-strong)]">
                — Testimonios
              </p>
              <h2 className="mt-5 font-serif text-[2rem] leading-[1.1] sm:text-[2.75rem]">
                Historias de quienes han caminado{" "}
                <span className="italic text-[color:var(--sage-strong)]">conmigo.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative flex flex-col rounded-[1.5rem] border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--blush-strong)]/40 hover:shadow-[var(--shadow-lift)] sm:p-7`}
              >
                <Quote
                  className="h-7 w-7 text-[color:var(--blush-strong)]/60 transition-transform duration-500 group-hover:-rotate-6"
                  aria-hidden="true"
                />
                <p className="mt-5 font-serif text-[1.05rem] leading-[1.55] text-foreground sm:text-[1.1rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 pt-7">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 font-serif text-sm text-[color:var(--ink)]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--blush) 0%, var(--sage-soft) 100%)",
                    }}
                    aria-hidden="true"
                  >
                    {t.title.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium leading-tight text-foreground">{t.title}</p>
                    <p className="mt-0.5 leading-tight text-muted-foreground">{t.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="mx-auto max-w-5xl px-5 pb-20 pt-12 sm:px-8 sm:pb-28">
          <div
            className="reveal relative overflow-hidden rounded-[2.5rem] border border-border/60 px-7 py-16 text-center shadow-[var(--shadow-lift)] sm:rounded-[3rem] sm:px-12 sm:py-24"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, var(--blush) 55%, var(--sage-soft) 120%)",
            }}
          >
            <div
              className="float-slower pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
              style={{ background: "var(--sage-soft)" }}
              aria-hidden="true"
            />
            <div
              className="float-slow pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-60 blur-3xl"
              style={{ background: "var(--blush)" }}
              aria-hidden="true"
            />
            <p className="relative text-[11px] uppercase tracking-[0.28em] text-[color:var(--sage-strong)]">
              — Contacto
            </p>
            <h2 className="relative mt-5 font-serif text-[2rem] leading-[1.05] sm:text-[3.5rem]">
              ¿Comenzamos a caminar{" "}
              <span className="italic">juntas?</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--ink-soft)] sm:text-base">
              Agenda una primera conversación sin compromiso para conocernos y descubrir cómo
              puedo acompañarte.
            </p>
            <a
              href="mailto:hola@nellaanaya.com"
              className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              Quiero agendar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>

        <footer className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
            <p className="font-serif text-lg text-foreground">
              Nella<span className="text-[color:var(--sage-strong)]">.</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#sobre-mi" className="link-underline transition-colors hover:text-foreground">Sobre mí</a>
              <a href="#servicios" className="link-underline transition-colors hover:text-foreground">Servicios</a>
              <a href="#testimonios" className="link-underline transition-colors hover:text-foreground">Testimonios</a>
              <a href="#contacto" className="link-underline transition-colors hover:text-foreground">Contacto</a>
            </div>
            <p className="text-xs uppercase tracking-[0.18em]">© {new Date().getFullYear()} · Hecho con cuidado</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
