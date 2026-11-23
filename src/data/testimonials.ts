import { Testimonial, ProcessStep } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Dr. Arvind Menon & Lakshmi",
    roleOrDesignation: "Chief Surgeon & Landscape Architect",
    projectName: "The Earth House",
    location: "Kochi, Kerala",
    year: "2024",
    quote:
      "Abode Builders didn't just build our house — they created an oasis where our family actually slows down. The way natural light washes the courtyard throughout the monsoon is pure poetry.",
    fullReview:
      "From the first schematic review to the day we received the keys, the Abode team worked like artists with the rigor of civil engineers. Their attention to rammed earth finishes, concealed joints, and climate-responsive openings made all the difference. Our home stays cool even during peak humid summers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    clientName: "Rahul & Pooja Varma",
    roleOrDesignation: "Tech Entrepreneur & Creative Director",
    projectName: "Urban Haven",
    location: "Indiranagar, Bangalore",
    year: "2024",
    quote:
      "Building a home in a crowded city can be overwhelming. Abode took complete ownership of design, permits, and execution. The acoustics and double-height greenery make us forget we are in the center of Bangalore.",
    fullReview:
      "What impressed us most was their absolute transparency with material specifications and timeline adherence. They didn't cut a single corner. The concrete finishing is world-class, comparable to architectural villas in Tokyo or Zurich.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    clientName: "Mathew & Susan Kurian",
    roleOrDesignation: "Hospitality Founders",
    projectName: "Villa Serenity",
    location: "Wayanad, Kerala",
    year: "2024",
    quote:
      "Working on steep mountain terrain with heavy monsoon rains requires exceptional engineering. Abode built our dream villa on time, with breathtaking stone craftsmanship that feels part of the hill itself.",
    fullReview:
      "The dry-stack granite stonework, the cantilevered decks, and the way the glass captures morning mist are breathtaking. Visitors are always stunned by the seamless transition between the interiors and the surrounding wilderness.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    clientName: "Sanjay & Meera Nair",
    roleOrDesignation: "Senior Advocates",
    projectName: "The Courtyard Residence",
    location: "Kozhikode, Kerala",
    year: "2023",
    quote:
      "They brought back the spirit of our childhood ancestral home while giving us every modern convenience. The central rainwater courtyard is now the heartbeat of our family gatherings.",
    fullReview:
      "Abode strikes the rarest balance: deeply respectful of traditional Kerala architectural heritage, yet completely forward-looking in contemporary aesthetics and structural performance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    projectImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding your lifestyle, requirements, ideas, budget, and vision.",
    description:
      "We begin not with blueprints, but with listening. We study how your family lives, your daily routines, your cherished memories, aesthetic leanings, and financial parameters. Simultaneously, we survey your plot to understand solar orientation, prevailing winds, soil composition, and surrounding tree canopies.",
    keyPoints: [
      "In-depth lifestyle and aesthetic discovery workshop",
      "Comprehensive site topography & orientation study",
      "Budget boundary definition and priority alignment",
      "Architectural inspiration and material mood boards",
    ],
    timeline: "2 - 3 Weeks",
    highlight: "Deep listening & site resonance",
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Creating architectural concepts, plans, and design direction.",
    description:
      "Here, concepts crystallize into tangible form. We craft 3D spatial models, interactive walkthroughs, and tactile material palettes. You will experience how daylight moves across each room, how breezes flow through courtyards, and how every interior millwork element coordinates seamlessly with the structure.",
    keyPoints: [
      "Master layout plans & spatial flow modeling",
      "Photorealistic 3D renders & light study simulations",
      "Structural engineering & MEP integration",
      "Itemized transparent Bill of Quantities (BOQ)",
    ],
    timeline: "4 - 6 Weeks",
    highlight: "Sculpting form, light & tactile materials",
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Bringing your vision to life through quality construction and careful execution.",
    description:
      "Our on-site master craftsmen and civil engineers mobilize. Every milestone—from piling to shuttering, concrete pouring, electrical cabling, stone laying, and custom woodwork—undergoes stringent quality testing with digital progress tracking available right on your phone.",
    keyPoints: [
      "Dedicated full-time on-site project engineer",
      "Rigorous 7-point quality checklist at every milestone",
      "Bi-weekly live video & photographic updates",
      "Direct material procurement from certified quarries and mills",
    ],
    timeline: "12 - 16 Months",
    highlight: "Precision engineering & uncompromised craft",
  },
  {
    step: "04",
    title: "DELIVER",
    subtitle: "Delivering your home with attention to every detail.",
    description:
      "Before we hand over the keys, our team conducts a thorough 150-point snagging inspection. Every door latch, lighting preset, plumbing valve, and joinery reveal is tested. We hand over your home sanitized, styled, and backed by comprehensive warranties and maintenance support.",
    keyPoints: [
      "Comprehensive 150-point zero-snag inspection audit",
      "Complete 'Home Manual' with service schematics & warranties",
      "Formal ceremonial handover & key celebration",
      "12-month complimentary maintenance & post-handover support",
    ],
    timeline: "Final Handover",
    highlight: "Flawless finish & lifelong peace of mind",
  },
];
