import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { METHODOLOGY } from "@/app/lib/constants";

export function Metodo() {
  return (
    <Section id="metodo" dark>
      <div className="text-center">
        <Eyebrow>Nosso Método</Eyebrow>
        <SectionTitle dark>Como conduzimos cada caso</SectionTitle>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-offwhite/70">
            Um processo cuidadoso, do primeiro contato ao resultado final.
          </p>
        </FadeIn>
      </div>

      <div className="relative mx-auto mt-20 max-w-3xl">
        <div className="absolute top-0 bottom-0 left-[23px] w-px bg-gradient-to-b from-champagne/40 via-champagne/20 to-transparent sm:left-1/2 sm:-translate-x-px" />

        {METHODOLOGY.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.12}>
            <div
              className={`relative mb-14 flex items-start gap-8 last:mb-0 sm:gap-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-champagne/40 bg-dark-surface shadow-[0_0_20px_rgba(209,169,120,0.1)] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <span className="font-serif text-lg font-bold text-champagne">
                  {item.number}
                </span>
              </div>

              <div
                className={`flex-1 rounded-xl border border-champagne/10 bg-dark-surface/80 p-7 backdrop-blur-sm transition-all duration-500 hover:border-champagne/25 hover:shadow-[0_8px_40px_rgba(209,169,120,0.06)] sm:w-[calc(50%-3rem)] sm:flex-initial ${
                  i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <h3 className="font-serif text-xl font-bold text-offwhite">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-offwhite/70">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
