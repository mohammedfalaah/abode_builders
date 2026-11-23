export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Residential" | "Villas" | "Contemporary" | "Interior";
  categories: string[];
  location: string;
  city: string;
  year: string;
  area: string;
  status: "Completed" | "Ongoing" | "Featured";
  featured: boolean;
  image: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  designConcept: string;
  materials: {
    name: string;
    description: string;
    icon?: string;
  }[];
  architecturalDetails: {
    title: string;
    detail: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrDesignation?: string;
  projectName: string;
  location: string;
  year: string;
  quote: string;
  fullReview: string;
  rating: number;
  image: string;
  projectImage: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  timeline: string;
  highlight: string;
}
