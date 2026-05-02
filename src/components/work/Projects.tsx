import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { getSiteContent, type Locale } from "@/resources";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  locale: Locale;
}

export function Projects({ range, exclude, locale }: ProjectsProps) {
  const { serviceDetails, ui } = getSiteContent(locale);
  let allProjects = [...serviceDetails];

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((service) => !exclude.includes(service.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post) => (
        <ProjectCard
          key={post.slug}
          href={`/work/${post.slug}`}
          title={post.title}
          description={post.summary}
          readDetailsLabel={ui.projectCard.readDetails}
        />
      ))}
    </Column>
  );
}
