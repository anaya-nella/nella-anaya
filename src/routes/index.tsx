import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Users, Heart } from "lucide-react";

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
    title: "Mentorías",
    body: "Sesiones personalizadas para emprendedores y profesionales que buscan claridad para avanzar en sus proyectos y objetivos. Trabajaremos juntos para identificar prioridades, diseñar un plan de acción y convertir ideas en resultados concretos.",
  },
  {
    icon: Users,
    title: "Talleres de desarrollo personal",
    body: "Espacios grupales diseñados para fortalecer habilidades clave para el crecimiento personal y profesional. A través de dinámicas prácticas y herramientas aplicables, los participantes desarrollan claridad, confianza y capacidad de acción para alcanzar sus metas.",
  },
  {
    icon: Heart,
    title: "Acompañamiento como doula",
    body: "Acompañamiento emocional, informativo y continuo durante el embarazo, parto y posparto. Mi objetivo es que cada mujer y familia se sientan escuchadas, informadas y acompañadas para vivir esta etapa con mayor confianza y tranquilidad.",
  },
];

const testimonials = Array.from({ length: 6 }).map(() => ({
  quote: "Quote",
  title: "Title",
  description: "Description",
}));

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Organic background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle at center, var(--blush) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[40%] -left-40 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle at center, var(--sage) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle at center, var(--blush) 0%, transparent 70%)" }}
        />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="font-serif text-2xl tracking-tight text-foreground">
            Nella<span className="text-[color:var(--sage-strong)]">.</span>
          </a>
          <nav className="flex items-center gap-5 sm:gap-7 text-sm text-muted-foreground">
            <a href="#sobre-mi" className="hidden sm:inline transition-colors hover:text-foreground">Sobre mí</a>
            <a href="#servicios" className="hidden sm:inline transition-colors hover:text-foreground">Servicios</a>
            <a href="#testimonios" className="hidden sm:inline transition-colors hover:text-foreground">Testimonios</a>
            <a
              href="#contacto"
              className="rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-wider text-background transition-opacity hover:opacity-90"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--sage-strong)]" />
            Mentoría · Talleres · Doula
          </span>
          <h1 className="mt-8 font-serif text-5xl leading-[1.05] sm:text-7xl sm:leading-[1.02]">
            Nella Anaya
          </h1>
          <p className="mt-5 font-serif text-xl italic text-muted-foreground sm:text-2xl">
            te acompaña
          </p>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Espacios cálidos para encontrar claridad, confianza y dirección en los momentos
            de cambio de tu vida y tus proyectos.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Quiero agendar
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Conocer servicios
            </a>
          </div>
        </section>

        {/* Hero image */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-border/60 shadow-sm sm:aspect-[16/8]"
            style={{
              background:
                "linear-gradient(135deg, var(--blush) 0%, var(--cream) 50%, var(--sage) 100%)",
            }}
            aria-hidden="true"
          />
        </section>

        {/* About */}
        <section id="sobre-mi" className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
                style={{ background: "var(--blush)" }}
                aria-hidden="true"
              />
              <div
                className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 shadow-sm"
                style={{
                  background:
                    "linear-gradient(160deg, var(--sage) 0%, var(--cream) 60%, var(--blush) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--sage-strong)]">
                Sobre mí
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Acompañar a las personas en los momentos de cambio.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Me apasiona acompañar a las personas en momentos de cambio. Ya sea que estén
                construyendo un emprendimiento, redefiniendo sus objetivos, desarrollando un
                proyecto creativo o atravesando una nueva etapa de vida, disfruto creando espacios
                donde puedan encontrar claridad, confianza y dirección.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A lo largo de mi camino he combinado mi experiencia en comunicación, innovación y
                mentoría con mi interés por el desarrollo humano, la creatividad y el aprendizaje
                continuo. Hoy, mi trabajo reúne todas esas facetas con un mismo propósito: ayudar
                a que más personas construyan una vida y proyectos que se parezcan a lo que
                realmente quieren para sí mismas.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--sage-strong)]">
              Servicios
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Espacios pensados para acompañarte.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
            {services.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-border hover:shadow-lg"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "var(--blush)" }}
                >
                  <Icon className="h-5 w-5 text-[color:var(--ink)]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-xl leading-snug">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--sage-strong)]">
              Testimonios
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Historias de quienes han caminado conmigo.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <p className="font-serif text-lg italic leading-snug text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full border border-border/60"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--blush) 0%, var(--sage) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="text-sm">
                    <p className="font-medium leading-tight text-foreground">{t.title}</p>
                    <p className="leading-tight text-muted-foreground">{t.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contacto" className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-12">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-border/60 px-8 py-16 text-center sm:px-12 sm:py-20"
            style={{
              background:
                "linear-gradient(135deg, var(--cream) 0%, var(--blush) 60%, var(--sage) 130%)",
            }}
          >
            <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
              ¿Comenzamos a caminar juntas?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[color:var(--ink)]/75">
              Agenda una primera conversación sin compromiso para conocernos y descubrir cómo
              puedo acompañarte.
            </p>
            <a
              href="mailto:hola@nellaanaya.com"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Quiero agendar
            </a>
          </div>
        </section>

        <footer className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
            <p className="font-serif text-base text-foreground">Nella Anaya</p>
            <p>© {new Date().getFullYear()} · Hecho con cuidado.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
