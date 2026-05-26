import { OFFICE } from "@/app/lib/constants";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Equipe", href: "#socias" },
  { label: "Método", href: "#metodo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 py-16 sm:px-8">
      <img
        src="/banner.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-dark/75" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/logo.png" 
              alt="Castro & Damaso" 
              className="mb-6 h-28 w-auto object-contain sm:h-36" 
            />
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-gray-subtle/80">
              {OFFICE.address}
              <br />
              {OFFICE.city}/{OFFICE.state} — CEP {OFFICE.cep}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-end">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-gray-subtle/70 transition-colors duration-300 hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-champagne/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-sans text-xs text-gray-subtle/60">
              &copy; {new Date().getFullYear()} {OFFICE.fullName} — Todos os
              direitos reservados
            </p>
            <p className="font-sans text-xs text-gray-subtle/40">
              Em conformidade com o Provimento n&ordm; 205/2021 do Conselho
              Federal da OAB
            </p>
            <p className="font-sans text-[11px] text-gray-subtle/30">
              Site desenvolvido por Vilas Marketing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
