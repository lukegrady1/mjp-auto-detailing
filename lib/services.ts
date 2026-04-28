import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    slug: "exterior-detail",
    name: "Exterior Detail",
    description: "Hand wash, clay bar, tire dressing, windows, and exterior shine.",
    startingPrice: 99,
    duration: "1.5–2 hrs",
    icon: "Car",
  },
  {
    slug: "interior-detail",
    name: "Interior Detail",
    description: "Full vacuum, steam clean, leather conditioning, odor treatment.",
    startingPrice: 120,
    duration: "2–3 hrs",
    icon: "Armchair",
    notice: "Pet hair & stains are an additional charge (starting at +$50 depending on severity).",
  },
  {
    slug: "full-detail",
    name: "Full Detail",
    description: "Complete interior + exterior treatment. Our most popular package.",
    startingPrice: 199,
    duration: "3–4 hrs",
    icon: "Star",
    notice: "Pet hair & stains are an additional charge (starting at +$50 depending on severity).",
  },
  // {
  //   slug: "ceramic-coating",
  //   name: "Ceramic Coating",
  //   description: "Long-lasting paint protection. Hydrophobic, scratch-resistant finish.",
  //   startingPrice: 499,
  //   duration: "Full day",
  //   icon: "Shield",
  // },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    description: "Remove swirl marks, scratches, and oxidation for showroom results.",
    startingPrice: 349,
    duration: "4–6 hrs",
    icon: "Sparkles",
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    description: "Restore clarity and brightness to yellowed or foggy headlights.",
    startingPrice: 69,
    duration: "45 min",
    icon: "Lightbulb",
  },
];

export interface ServiceDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  whatsIncluded: string[];
  process: { step: string; description: string }[];
  pricing: string;
  duration: string;
  bestFor: string;
  faq: { question: string; answer: string }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "exterior-detail": {
    slug: "exterior-detail",
    name: "Exterior Detail",
    metaTitle: "Exterior Auto Detailing | MJP Auto Detailing | Northborough, MA",
    metaDescription:
      "Professional exterior auto detailing in Northborough and Worcester, MA. Hand wash, clay bar treatment, tire dressing, and paint sealant. Mobile service — we come to you.",
    headline: "Exterior Auto Detailing in Northborough & Worcester, MA",
    intro:
      "Our exterior detail goes well beyond a standard car wash. Every panel is hand-washed, decontaminated with a clay bar, and sealed to protect the finish. Tires, wheels, trim, and glass all get individual attention. The result is a clean, protected exterior that looks the way it did when you first bought the car. Mobile service across Northborough, Worcester, and Central Massachusetts — we come to you.",
    whatsIncluded: [
      "Pre-rinse and foam cannon wash",
      "Hand wash with pH-neutral shampoo",
      "Clay bar decontamination",
      "Wheel and tire cleaning",
      "Tire dressing",
      "Exterior trim restoration",
      "Window cleaning (exterior)",
      "Paint sealant application",
    ],
    process: [
      {
        step: "Pre-wash",
        description:
          "We start with a thorough rinse to remove loose dirt, then apply a foam cannon to loosen embedded contaminants without scratching the paint.",
      },
      {
        step: "Hand wash",
        description:
          "Using a two-bucket method and pH-neutral shampoo, every panel is hand-washed with microfiber mitts. No brushes or automated equipment.",
      },
      {
        step: "Decontamination",
        description:
          "A clay bar pass removes bonded contaminants like rail dust, tree sap, and industrial fallout that washing alone can't remove.",
      },
      {
        step: "Wheels and tires",
        description:
          "Wheels are cleaned with a dedicated wheel cleaner and brush set. Tires are dressed with a UV-protective coating.",
      },
      {
        step: "Sealant and final wipe",
        description:
          "A paint sealant is applied by hand to protect the finish, followed by a final inspection under work lights.",
      },
    ],
    pricing: "Starting at $99. Final price depends on vehicle size and condition.",
    duration: "1.5–2 hours",
    bestFor:
      "Vehicles that are generally well-maintained but need a thorough exterior cleaning and protection. Good as a regular maintenance service every 4–6 weeks.",
    faq: [
      {
        question: "How is this different from a regular car wash?",
        answer:
          "A car wash uses brushes and recycled water. We hand-wash with clean water, decontaminate the paint with a clay bar, and apply a sealant. The finish lasts weeks, not days.",
      },
      {
        question: "Do I need to provide water or electricity?",
        answer:
          "No. We carry our own water supply, power, and equipment. Just a parking spot is all we need.",
      },
      {
        question: "Will this remove scratches?",
        answer:
          "The exterior detail is focused on cleaning and protection, not scratch removal. For scratches and swirl marks, see our Paint Correction service.",
      },
    ],
  },
  "interior-detail": {
    slug: "interior-detail",
    name: "Interior Detail",
    metaTitle: "Interior Auto Detailing | MJP Auto Detailing | Northborough, MA",
    metaDescription:
      "Professional interior auto detailing in Northborough and Worcester, MA. Steam cleaning, leather conditioning, odor treatment, and deep extraction. Mobile service.",
    headline: "Interior Auto Detailing in Northborough & Worcester, MA",
    intro:
      "The interior detail is a thorough cleaning of every surface inside your vehicle. We vacuum, steam clean, condition leather, extract carpet stains, and treat odors. Every vent, crevice, and pocket gets attention. You'll get back a cabin that looks, smells, and feels significantly better. Mobile service across Northborough, Worcester, and Central Massachusetts.",
    whatsIncluded: [
      "Full vacuum (seats, carpet, trunk)",
      "Steam cleaning of all hard surfaces",
      "Leather cleaning and conditioning",
      "Fabric extraction (carpet and cloth seats)",
      "Door jamb cleaning",
      "Dashboard, console, and vent detailing",
      "Interior glass cleaning",
      "Odor treatment",
    ],
    process: [
      {
        step: "Trash and belongings",
        description:
          "We start by removing all loose items and trash so every surface is accessible.",
      },
      {
        step: "Vacuum",
        description:
          "A full vacuum of seats, carpet, floor mats, trunk, and crevices using commercial-grade equipment with detail attachments.",
      },
      {
        step: "Steam cleaning",
        description:
          "All hard surfaces — dashboard, center console, door panels, vents, cup holders — are steam cleaned to remove grime and kill bacteria.",
      },
      {
        step: "Upholstery and leather",
        description:
          "Cloth seats and carpets get a hot water extraction. Leather seats are cleaned with a pH-balanced cleaner and conditioned to prevent cracking.",
      },
      {
        step: "Final details",
        description:
          "Interior glass is cleaned streak-free. An odor neutralizer is applied if needed. Door jambs are wiped down.",
      },
    ],
    pricing: "Starting at $120. Final price depends on vehicle size and condition level.",
    duration: "2–3 hours",
    bestFor:
      "Vehicles with stained carpets, dirty seats, pet hair, food debris, or general interior neglect. Also good as a seasonal deep clean.",
    faq: [
      {
        question: "Can you remove pet hair?",
        answer:
          "Yes. We use compressed air and specialized brushes to remove embedded pet hair from fabric and carpet before vacuuming.",
      },
      {
        question: "Will this remove cigarette smell?",
        answer:
          "Steam cleaning and odor treatment will significantly reduce smoke odor. Severe cases may need multiple treatments. We'll assess and let you know.",
      },
      {
        question: "Do you clean the trunk?",
        answer:
          "Yes, the trunk is included. We vacuum and wipe down all trunk surfaces.",
      },
    ],
  },
  "full-detail": {
    slug: "full-detail",
    name: "Full Detail",
    metaTitle: "Full Auto Detail | MJP Auto Detailing | Northborough, MA",
    metaDescription:
      "Complete interior and exterior auto detailing in Northborough and Worcester, MA. Our most popular package — every surface, inside and out. Mobile service.",
    headline: "Full Auto Detailing in Northborough & Worcester, MA",
    intro:
      "The full detail combines our complete interior and exterior services into one appointment. This is our most popular package and the best value for a vehicle that needs attention everywhere. Inside gets steam cleaned, extracted, and conditioned. Outside gets hand-washed, clay barred, and sealed. Mobile service across Worcester County and Central Massachusetts — we come to you.",
    whatsIncluded: [
      "Everything in the Exterior Detail",
      "Everything in the Interior Detail",
      "Engine bay rinse (upon request)",
      "Door jamb and hinge cleaning",
      "Final inspection under work lights",
    ],
    process: [
      {
        step: "Exterior first",
        description:
          "We start with the full exterior process — pre-wash, hand wash, clay bar, wheels, and sealant.",
      },
      {
        step: "Interior deep clean",
        description:
          "While the sealant cures, we move inside for the full interior process — vacuum, steam, extraction, and conditioning.",
      },
      {
        step: "Final details",
        description:
          "Door jambs, hinges, and any remaining touch points are cleaned. A final walk-around inspection is done under portable work lights.",
      },
    ],
    pricing:
      "Starting at $199. Final price depends on vehicle size and condition.",
    duration: "3–4 hours",
    bestFor:
      "The best option when the whole vehicle needs work. Popular before selling a car, after a long winter, or as a twice-a-year deep clean.",
    faq: [
      {
        question: "How long does the full detail take?",
        answer:
          "Typically 3–4 hours for a sedan. Larger vehicles or heavily soiled interiors may take longer. We'll give you a time estimate when we see the vehicle.",
      },
      {
        question: "Is there a discount vs. booking interior and exterior separately?",
        answer:
          "Yes. The full detail is priced lower than booking both services individually because we can work more efficiently in a single visit.",
      },
      // {
      //   question: "Can I add ceramic coating to a full detail?",
      //   answer:
      //     "Absolutely. A full detail is actually the recommended prep before applying a ceramic coating. We can bundle the two.",
      // },
    ],
  },
  // "ceramic-coating": {
  //   slug: "ceramic-coating",
  //   name: "Ceramic Coating",
  //   metaTitle: "Ceramic Coating | MJP Auto Detailing | Northborough, MA",
  //   metaDescription:
  //     "Professional ceramic coating application in Northborough and Worcester, MA. Long-lasting hydrophobic paint protection. Includes paint correction prep. Mobile service.",
  //   headline: "Ceramic Coating",
  //   intro:
  //     "A ceramic coating is a liquid polymer that bonds to your vehicle's paint and creates a durable, hydrophobic layer of protection. Water beads and rolls off. Dirt and contaminants don't stick as easily. UV rays are blocked. The coating lasts 2–5 years depending on the product and maintenance, far outlasting any wax or sealant.",
  //   whatsIncluded: [
  //     "Full exterior wash and decontamination",
  //     "Single-stage paint correction (included)",
  //     "Paint surface prep with IPA wipe",
  //     "Ceramic coating application (all painted surfaces)",
  //     "Trim and wheel coating (optional add-on)",
  //     "24-hour curing period guidance",
  //   ],
  //   process: [
  //     {
  //       step: "Wash and decontamination",
  //       description:
  //         "A thorough wash followed by clay bar and iron remover to strip all contaminants from the paint surface.",
  //     },
  //     {
  //       step: "Paint correction",
  //       description:
  //         "A single-stage machine polish to remove light swirl marks and scratches. The coating locks in whatever condition the paint is in, so the surface needs to be clean first.",
  //     },
  //     {
  //       step: "Surface prep",
  //       description:
  //         "An IPA (isopropyl alcohol) wipe-down removes any polishing oils so the coating bonds directly to the clear coat.",
  //     },
  //     {
  //       step: "Coating application",
  //       description:
  //         "The ceramic coating is applied panel by panel with an applicator pad, then leveled with a microfiber towel. Each panel is inspected under LED lighting.",
  //     },
  //     {
  //       step: "Curing",
  //       description:
  //         "The coating needs 24 hours to fully cure. We'll provide care instructions for the curing period and ongoing maintenance tips.",
  //     },
  //   ],
  //   pricing:
  //     "Starting at $499 for sedans. SUVs and trucks start at $599. Multi-layer coatings and add-ons (wheels, trim, glass) quoted individually.",
  //   duration: "Full day (6–8 hours including prep)",
  //   bestFor:
  //     "New vehicles, recently painted vehicles, or any car where the owner wants long-term paint protection without frequent waxing. Especially valuable for dark-colored vehicles that show swirl marks easily.",
  //   faq: [
  //     {
  //       question: "How long does ceramic coating last?",
  //       answer:
  //         "The coatings we use last 2–5 years depending on the product tier, driving conditions, and how well you maintain the vehicle. We'll discuss options and recommend the right one for your situation.",
  //     },
  //     {
  //       question: "Can you coat a vehicle that has scratches?",
  //       answer:
  //         "We include a single-stage paint correction with every ceramic coating to address light swirls and scratches. For heavier damage, we recommend our full Paint Correction service first.",
  //     },
  //     {
  //       question: "Do I still need to wash the car after coating?",
  //       answer:
  //         "Yes, but it's much easier. Dirt doesn't bond to the surface the same way, so a simple rinse often does the job. No waxing needed.",
  //     },
  //   ],
  // },
  "paint-correction": {
    slug: "paint-correction",
    name: "Paint Correction",
    metaTitle: "Paint Correction | MJP Auto Detailing | Northborough, MA",
    metaDescription:
      "Professional paint correction in Northborough and Worcester, MA. Machine polishing to remove swirl marks, scratches, and oxidation. Restore your paint to showroom condition.",
    headline: "Paint Correction in Northborough & Worcester, MA",
    intro:
      "Paint correction is the process of machine polishing your vehicle's clear coat to remove imperfections — swirl marks, scratches, water spots, oxidation, and haze. This is not a cover-up with wax or glaze. It's the physical removal of defects from the paint surface. The result is a smooth, clear finish that reflects light properly. Mobile paint correction service across Worcester County and Central Massachusetts.",
    whatsIncluded: [
      "Full wash and decontamination",
      "Clay bar treatment",
      "Paint depth readings with a thickness gauge",
      "Multi-stage machine polishing",
      "Panel-by-panel inspection under LED lights",
      "Paint sealant application",
    ],
    process: [
      {
        step: "Wash and decontamination",
        description:
          "A full wash and clay bar to remove all surface contaminants before any machine work.",
      },
      {
        step: "Paint measurement",
        description:
          "We take paint depth readings across every panel with a thickness gauge. This tells us how much clear coat is available to work with safely.",
      },
      {
        step: "Test spot",
        description:
          "We do a test section on a representative panel to determine the right combination of pad and compound for your specific paint.",
      },
      {
        step: "Correction",
        description:
          "Working panel by panel, we machine polish the paint to remove defects. Each section is checked under LED inspection lights before moving on.",
      },
      {
        step: "Protection",
        description:
          "After correction, the paint is sealed with a high-quality sealant to lock in the results and protect the finish.",
      },
    ],
    pricing:
      "Starting at $349 for a single-stage correction on a sedan. Multi-stage correction for severe defects starts at $549. Pricing depends on vehicle size and paint condition.",
    duration: "4–6 hours for single-stage. 8–12 hours for multi-stage.",
    bestFor:
      "Vehicles with visible swirl marks, scratches from automatic car washes, water spots, oxidation, or generally dull paint.",
    faq: [
      {
        question: "What's the difference between single-stage and multi-stage correction?",
        answer:
          "Single-stage uses one polishing step and removes about 60–80% of defects. Multi-stage uses progressively finer polishes to remove 90%+ of defects. We'll assess your paint and recommend the right approach.",
      },
      {
        question: "Can you remove deep scratches?",
        answer:
          "If a scratch catches your fingernail, it's through the clear coat and into the base paint. Those can't be polished out. Lighter scratches and swirl marks that are within the clear coat layer can be corrected.",
      },
      {
        question: "Is this safe for my paint?",
        answer:
          "Yes. We measure paint thickness before and during the process to ensure we're working within safe limits. We remove only the minimum amount of clear coat needed to eliminate defects.",
      },
    ],
  },
  "headlight-restoration": {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    metaTitle: "Headlight Restoration | MJP Auto Detailing | Northborough, MA",
    metaDescription:
      "Professional headlight restoration in Northborough and Worcester, MA. Restore yellowed, foggy, or hazy headlights to clear condition. Improves visibility and appearance.",
    headline: "Headlight Restoration in Northborough & Worcester, MA",
    intro:
      "Over time, headlight lenses develop a yellow, hazy, or cloudy appearance caused by UV exposure and oxidation of the polycarbonate plastic. This reduces light output and makes the vehicle look older than it is. Our headlight restoration process removes the damaged layer and applies a UV-resistant sealant to keep them clear. Mobile service across Worcester County and Central Massachusetts.",
    whatsIncluded: [
      "Headlight lens cleaning",
      "Wet sanding (progressive grits)",
      "Machine polishing",
      "UV sealant application",
      "Both headlights included",
    ],
    process: [
      {
        step: "Masking",
        description:
          "The area around each headlight is masked off to protect surrounding paint.",
      },
      {
        step: "Wet sanding",
        description:
          "The oxidized outer layer is removed using progressively finer sandpaper grades (800, 1500, 2500, 3000 grit).",
      },
      {
        step: "Polish",
        description:
          "After sanding, the lens is machine polished to restore full clarity.",
      },
      {
        step: "UV sealant",
        description:
          "A UV-resistant sealant is applied to protect the lens from re-oxidation. This extends the clarity for 1–2 years depending on sun exposure.",
      },
    ],
    pricing:
      "Starting at $69 for both headlights. Severely degraded lenses may require additional sanding stages at $89.",
    duration: "30–45 minutes",
    bestFor:
      "Any vehicle with yellowed, hazy, or cloudy headlights. Common on vehicles 5+ years old. Also a common requirement for passing state inspections in Massachusetts.",
    faq: [
      {
        question: "How long does the restoration last?",
        answer:
          "Typically 1–2 years before any noticeable re-hazing. The UV sealant slows the oxidation process significantly compared to the original factory coating.",
      },
      {
        question: "Will this pass MA state inspection?",
        answer:
          "In most cases, yes. If your headlights are being flagged for reduced output due to hazing, restoration usually resolves the issue.",
      },
      {
        question: "Can you restore any headlight?",
        answer:
          "We can restore polycarbonate plastic lenses, which covers most vehicles. If the lens has internal moisture or a cracked housing, it needs replacement, not restoration.",
      },
    ],
  },
};
