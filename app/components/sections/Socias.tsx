import Image from "next/image";
import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { WhatsAppIcon, InstagramIcon } from "@/app/components/ui/Icons";
import { PARTNERS, WHATSAPP_URL } from "@/app/lib/constants";

export function Socias() {
  return (
    <Section id="socias">
      <div className="text-center">
        <Eyebrow>Quem Somos</Eyebrow>
        <SectionTitle>As advogadas por trás do escritório</SectionTitle>
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-champagne to-champagne-dark" />
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        {PARTNERS.map((partner, i) => (
          <FadeIn key={partner.name} delay={i * 0.15}>
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-8 h-80 w-60 overflow-hidden rounded-2xl shadow-xl shadow-champagne/8 ring-1 ring-champagne/10 transition-shadow duration-700 group-hover:shadow-2xl group-hover:shadow-champagne/15">
                <Image
                  src={partner.photo}
                  alt={`Foto de ${partner.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="240px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-text-dark">
                {partner.name}
              </h3>
              <p className="mt-2 font-sans text-xs font-bold uppercase tracking-[0.25em] text-champagne">
                {partner.oab}
              </p>
              <p className="mt-5 max-w-sm font-sans text-base leading-relaxed text-accent-deep/80">
                {partner.bio}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={WHATSAPP_URL(partner.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/8 text-champagne transition-all duration-300 hover:bg-champagne/20 hover:scale-110"
                  aria-label={`WhatsApp de ${partner.name}`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
                <a
                  href={partner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/8 text-champagne transition-all duration-300 hover:bg-champagne/20 hover:scale-110"
                  aria-label={`Instagram de ${partner.name}`}
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
