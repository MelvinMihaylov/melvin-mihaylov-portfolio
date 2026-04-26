import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";
import { aboutFacts, contactDetails, heroOffer, serviceOffers } from "./portfolio";

const person: Person = {
  firstName: "Melvin",
  lastName: "Mihaylov",
  name: "Melvin Mihaylov",
  role: "Web Developer",
  avatar: "/images/mmlogo.png",
  email: contactDetails.email,
  location: "Europe/Sofia",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Contact {person.firstName}</>,
  description: <>Free calls, free demos, and practical help getting a website live.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: contactDetails.github,
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Modern websites that stay practical in price`,
  description: heroOffer.description,
  headline: <>{heroOffer.title}</>,
  featured: {
    display: true,
    title: <>{heroOffer.label}</>,
    href: "/work",
  },
  subline: <>{heroOffer.description}</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Professional, modern websites with a practical and flexible way of working.`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About",
    description: (
      <>
        The goal is simple: build something that looks modern, feels custom, stays understandable
        for the client, and does not become more expensive than it needs to be.
      </>
    ),
  },
  work: {
    display: false,
    title: "How I work",
    experiences: [],
  },
  studies: {
    display: true,
    title: "What clients can expect",
    institutions: aboutFacts.map((fact) => ({
      name: fact.label,
      description: <>{fact.value}</>,
    })),
  },
  technical: {
    display: true,
    title: "Services and support",
    skills: serviceOffers.map((offer) => ({
      title: offer.title,
      description: <>{offer.description}</>,
      tags: offer.tags.map((tag) => ({
        name: tag,
      })),
      images: [],
    })),
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `${person.name} blog`,
  description: `Blog content is currently disabled.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Work – ${person.name}`,
  description: `Modern websites, custom work, and launch help by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Sample website directions, layouts, and visual ideas by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
