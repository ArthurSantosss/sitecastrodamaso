import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { AccordionItem } from "@/app/components/ui/Accordion";
import { FAQ_ITEMS } from "@/app/lib/constants";

export function Faq() {
  return (
    <Section id="faq" dark>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Dúvidas Frequentes</Eyebrow>
          <SectionTitle dark>
            Perguntas que recebemos com frequência
          </SectionTitle>
          <FadeIn delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-offwhite/70">
              Se a sua dúvida não estiver aqui, entre em contato conosco.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-2xl border border-champagne/10 bg-dark-surface/60 px-3 backdrop-blur-sm sm:px-6">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
