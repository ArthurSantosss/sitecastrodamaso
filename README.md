# Castro & Damaso Advocacia e Consultoria Juridica

Landing page institucional do escritorio Castro & Damaso, em Ponte Nova/MG.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4**
- **Framer Motion** (animacoes sutis)
- **Lucide React** (icones)
- **TypeScript**
- Deploy: **Vercel**

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura

```
app/
  components/
    sections/   # Hero, Sobre, Areas, Socias, Metodo, Depoimentos, Faq, Contato, Footer
    ui/         # Button, Accordion, Section, WhatsAppFloat
  lib/
    constants.ts  # Dados centralizados do escritorio
  layout.tsx      # Layout com fontes e meta tags
  page.tsx        # Pagina principal com todas as secoes
  sitemap.ts      # Sitemap XML automatico
  robots.ts       # Robots.txt automatico
  globals.css     # Tema de cores e tipografia
```

## Placeholders para substituir

### Numeros da OAB
Em `app/lib/constants.ts`, substituir `"OAB/MG XXX.XXX"` pelos numeros reais:
- Dra. Amanda Santos de Castro
- Dra. Manuella Alves Damaso de Oliveira

### Fotos
Substituir os placeholders visuais nos seguintes componentes:
- `Hero.tsx` — Logo do escritorio
- `Sobre.tsx` — Foto do escritorio
- `Socias.tsx` — Fotos das advogadas (retrato vertical)

### Depoimentos
Em `app/lib/constants.ts`, array `TESTIMONIALS` — substituir pelos depoimentos reais dos clientes. Conforme Provimento 205/2021 da OAB, nao citar valores, numeros de processo ou promessas de resultado.

### Google Maps
Em `app/lib/constants.ts`, campo `mapsEmbed` — substituir pela URL real do embed do Google Maps para o endereco do escritorio.

## Personalizacao de cores

Todas as cores estao em `app/globals.css` no bloco `@theme inline`:

| Variavel | Cor | Uso |
|----------|-----|-----|
| `--color-champagne` | `#d1a978` | Cor primaria/dourada |
| `--color-dark` | `#1a1410` | Fundo escuro |
| `--color-offwhite` | `#f7f2eb` | Fundo claro |
| `--color-text-dark` | `#2a2018` | Texto principal |
| `--color-accent-deep` | `#8b6f4e` | Texto secundario |
| `--color-gray-subtle` | `#a89880` | Texto terciario |

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

Ou conecte o repositorio no dashboard da Vercel para deploy automatico.

## Conformidade OAB

Este site segue o Provimento 205/2021 do Conselho Federal da OAB:
- Sem promessas de resultado
- Sem mencao a valores ou prazos de processo
- Sem termos mercantilistas
- CTAs neutros ("Agende uma consulta", "Fale conosco")
- Numeros da OAB visiveis junto aos nomes

---

Site desenvolvido por Vilas Marketing
# sitecastrodamaso
