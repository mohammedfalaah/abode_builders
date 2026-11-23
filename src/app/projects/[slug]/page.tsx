import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import ProjectDetailView from "./ProjectDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Residence Not Found | Abode Builders",
    };
  }

  return {
    title: `${project.name} | Abode Builders — Luxury Architecture`,
    description: `${project.tagline}. Located in ${project.location}, featuring ${project.area} of bespoke architectural craft. Modern Homes. Earthy Feels.`,
    openGraph: {
      title: `${project.name} | Abode Builders`,
      description: project.tagline,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return <ProjectDetailView project={project} relatedProjects={relatedProjects} />;
}
