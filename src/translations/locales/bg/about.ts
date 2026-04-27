import type { SiteContent } from "@/translations/schema";
import { bgAboutFacts, bgServiceOffers } from "./core";

const bgAboutSection = {
  about: {
    path: "/about",
    label: "За мен",
    title: "За мен - Melvin Mihaylov",
    description: "Модерни и професионални сайтове с гъвкав и практичен начин на работа.",
    tableOfContent: {
      display: false,
      subItems: false,
    },
    avatar: {
      display: true,
      image: "/images/me.png",
    },
    calendar: {
      display: false,
      link: "",
    },
    intro: {
      display: true,
      title: "За мен",
      description:
        "Целта е проста: сайтът да изглежда модерно, да се усеща персонално, да е разбираем за клиента и да не струва повече, отколкото е нужно.",
    },
    work: {
      display: false,
      title: "Как работя",
      experiences: [],
    },
    studies: {
      display: true,
      title: "Какво можеш да очакваш",
      institutions: bgAboutFacts.map((fact) => ({
        name: fact.label,
        description: fact.value,
      })),
    },
    technical: {
      display: true,
      title: "Услуги и съдействие",
      skills: bgServiceOffers.map((offer) => ({
        title: offer.title,
        description: offer.description,
        tags: offer.tags.map((tag) => ({
          name: tag,
        })),
        images: [],
      })),
    },
  },
  aboutHighlights: [
    {
      title: "Custom заявките са добре дошли",
      description:
        "Проектът може да стигне толкова далеч, колкото е нужно - от семпъл каталог до по-custom визуален сайт.",
    },
    {
      title: "Модерно и разбираемо",
      description:
        "Целта винаги е професионален и модерен резултат, който остава ясен и удобен за ползване.",
    },
    {
      title: "С мисъл за бюджета, без евтин вид",
      description:
        "Фокусът е върху силно представяне и практичен обхват, така че сайтът да изглежда premium без цените на голяма агенция.",
    },
    {
      title: "Полезно и след изработката",
      description:
        "Ако има нужда, мога да остана ангажиран и за хостинг, домейни, SEO и довършване на проекти, започнати с AI инструменти.",
    },
  ],
  supportOptions: [
    "Каталози",
    "Портфолиа",
    "Галерии",
    "Онлайн магазини",
    "Лендинг страници",
    "Индивидуални заявки",
    "Безплатни дема",
    "Безплатни разговори",
    "Хостинг",
    "Домейни",
    "Google SEO",
    "AI SEO",
    "Помощ за ChatGPT / Claude проекти",
  ],
} satisfies Pick<SiteContent, "about" | "aboutHighlights" | "supportOptions">;

export { bgAboutSection };
