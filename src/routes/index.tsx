import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";

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
    title: "Mentorías",
    body: "Sesiones personalizadas para emprendedores y profesionales que buscan claridad para avanzar en sus proyectos y objetivos. Trabajaremos juntos para identificar prioridades, diseñar un plan de acción y convertir ideas en resultados concretos.",
  },
  {
    title: "Talleres de desarrollo personal",
    body: "Espacios grupales diseñados para fortalecer habilidades clave para el crecimiento personal y profesional. A través de dinámicas prácticas y herramientas aplicables, los participantes desarrollan claridad, confianza y capacidad de acción para alcanzar sus metas.",
  },
  {
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
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-lg font-semibold tracking-tight">NA</a>
          <nav className="flex items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="#sobre-mi" className="hidden sm:inline hover:text-foreground transition-colors">Sobre mí</a>
            <a href="#servicios" className="hidden sm:inline hover:text-foreground transition-colors">Servicios</a>
            <a href="#testimonios" className="hidden sm:inline hover:text-foreground transition-colors">Testimonios</a>
            <a
              href="#contacto"
              className="rounded-md border border-border bg-secondary px-4 py-1.5 text-foreground hover:bg-accent transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">Nella Anaya</h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">te acompaña</p>
          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-5 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              Quiero agendar
            </a>
          </div>
        </section>

        {/* Hero image */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="aspect-[16/7] w-full rounded-lg bg-muted" aria-hidden="true" />
        </section>

        {/* About */}
        <section id="sobre-mi" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-start">
            <div className="aspect-square w-full rounded-lg bg-muted" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-semibold">Sobre mi</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Me apasiona acompañar a las personas en momentos de cambio. Ya sea que estén
                construyendo un emprendimiento, redefiniendo sus objetivos, desarrollando un
                proyecto creativo o atravesando una nueva etapa de vida, disfruto creando espacios
                donde puedan encontrar claridad, confianza y dirección. A lo largo de mi camino he
                combinado mi experiencia en comunicación, innovación y mentoría con mi interés por
                el desarrollo humano, la creatividad y el aprendizaje continuo. Hoy, mi trabajo
                reúne todas esas facetas con un mismo propósito: ayudar a que más personas
                construyan una vida y proyectos que se parezcan a lo que realmente quieren para sí
                mismas.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-xl font-semibold">Servicios</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {services.map((s) => (
              <article key={s.title}>
                <Info className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-xl font-semibold">Testimonios</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-card-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted" aria-hidden="true" />
                  <div className="text-sm">
                    <p className="font-medium leading-tight">{t.title}</p>
                    <p className="text-muted-foreground leading-tight">{t.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer id="contacto" className="border-t border-border mt-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nella Anaya
          </div>
        </footer>
      </main>
    </div>
  );
}
