import { SERVICES, SERVICE_DETAILS } from "@/lib/services";

// /llms.txt (llmstxt.org): a plain-markdown summary of the business for AI
// assistants and AI search. Services and FAQs come from lib/services.ts; the
// business details match the LocalBusiness JSON-LD in app/layout.tsx — keep
// the two in step. Written to out/llms.txt at build time.
export const dynamic = "force-static";

const SITE_URL = "https://mjpautodetailing.com";
const url = (path: string) => `${SITE_URL}${path}`;

const AREAS = [
  "Northborough",
  "Worcester",
  "Holden",
  "Sterling",
  "Boylston",
  "West Boylston",
  "Shrewsbury",
  "Westborough",
  "Rutland",
  "Paxton",
  "Princeton",
];

export function GET() {
  const lines = [
    "# MJP Auto Detailing",
    "",
    "> Mobile auto detailing based in Northborough, MA, serving Worcester County and Central Massachusetts. Fully insured and IDA certified. Interior and exterior detailing, full details, paint correction and headlight restoration — we come to you with our own water and power.",
    "",
    "## Business details",
    "",
    "- Name: MJP Auto Detailing",
    "- Based in: 5 Weber Ln, Northborough, MA 01532 (mobile service)",
    "- Phone: (774) 287-0447",
    "- Email: info@mjpautodetailing.com",
    "- Hours: Monday–Saturday 8 AM – 6 PM; Sunday by appointment",
    `- Service area: ${AREAS.join(", ")}, MA and the rest of Worcester County`,
    "- Instagram: https://www.instagram.com/mjpdetails/",
    "- Facebook: https://www.facebook.com/mattypautodetail",
    "",
    "## Services",
    "",
    ...SERVICES.map(
      (s) =>
        `- [${s.name}](${url(`/services/${s.slug}`)}): ${s.description} From $${s.startingPrice}, about ${s.duration}.${s.notice ? ` ${s.notice}` : ""}`,
    ),
    "",
    "## Frequently asked questions",
    "",
    ...SERVICES.flatMap((s) =>
      (SERVICE_DETAILS[s.slug]?.faq ?? []).flatMap((f) => [
        `### ${f.question} (${s.name})`,
        "",
        f.answer,
        "",
      ]),
    ),
    "## Pages",
    "",
    `- [Home](${url("/")})`,
    `- [All services](${url("/services")})`,
    `- [About](${url("/about")})`,
    `- [Gallery](${url("/gallery")})`,
    `- [Contact and booking](${url("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
