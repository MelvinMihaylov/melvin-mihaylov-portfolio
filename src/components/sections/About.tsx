import type { LandingContent } from "@/content";
import { person } from "@/resources/site";
import Image from "next/image";

type AboutProps = {
  content: LandingContent;
};

export function About({ content }: AboutProps) {
  const { about } = content;

  return (
    <div className="container">
      <section id="about" className="about-section">
        <div className="about-name">
          <div className="about-portrait">
            <Image src={person.avatar} alt={about.name} width={132} height={132} sizes="132px" />
          </div>
          <div>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2>{about.name}</h2>
          </div>
        </div>
        <div>
          <p>{about.body}</p>
          <span className="about-note">{about.note}</span>
        </div>
      </section>
    </div>
  );
}
