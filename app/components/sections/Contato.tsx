import { MapPin, Clock } from "lucide-react";
import { Section, Eyebrow, SectionTitle, FadeIn } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import { WhatsAppIcon, InstagramIcon } from "@/app/components/ui/Icons";
import { OFFICE, PARTNERS, WHATSAPP_URL } from "@/app/lib/constants";

export function Contato() {
  return (
    <Section id="contato">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <SectionTitle>Estamos prontos para conversar</SectionTitle>

          <FadeIn delay={0.15}>
            <div className="mt-3 h-1 w-12 bg-gradient-to-r from-champagne to-champagne-dark rounded-full" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 space-y-4">
              <a
                href={OFFICE.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-xl border border-champagne/10 bg-cream/50 p-5 transition-all duration-300 hover:border-champagne/30 hover:bg-cream hover:shadow-lg hover:shadow-champagne/5 cursor-pointer"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                  <MapPin className="h-5 w-5 text-champagne" />
                </div>
                <p className="font-sans text-base leading-relaxed text-accent-deep pt-2">
                  {OFFICE.fullAddress}
                </p>
              </a>

              <div className="group flex items-start gap-5 rounded-xl border border-champagne/10 bg-cream/50 p-5 transition-all duration-300 hover:border-champagne/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10">
                  <Clock className="h-5 w-5 text-champagne" />
                </div>
                <p className="font-sans text-base text-accent-deep pt-2">
                  {OFFICE.hours}
                </p>
              </div>

              <div className="space-y-3">
                {PARTNERS.map((partner) => (
                  <a
                    key={partner.whatsapp}
                    href={WHATSAPP_URL(partner.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 rounded-xl border border-champagne/10 bg-cream/50 p-5 transition-all duration-300 hover:border-champagne/30 hover:bg-cream hover:shadow-lg hover:shadow-champagne/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                      <WhatsAppIcon className="h-5 w-5 text-champagne" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-dark">
                        {partner.name}
                      </p>
                      <p className="font-sans text-sm text-accent-deep/70">
                        {partner.whatsappFormatted}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={OFFICE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-xl border border-champagne/10 bg-cream/50 p-5 transition-all duration-300 hover:border-champagne/30 hover:bg-cream hover:shadow-lg hover:shadow-champagne/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/10 transition-colors duration-300 group-hover:bg-champagne/20">
                  <InstagramIcon className="h-5 w-5 text-champagne" />
                </div>
                <p className="font-sans text-sm font-medium text-accent-deep">
                  {OFFICE.instagramHandle}
                </p>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Button
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Iniciar conversa pelo WhatsApp
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="h-80 overflow-hidden rounded-2xl shadow-2xl shadow-champagne/8 lg:h-full lg:min-h-[440px]">
            <iframe
              src={OFFICE.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório Castro & Damaso"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
