import type { SiteContent } from "@/translations/schema";
import { bgAboutFacts, bgServiceOffers } from "./core";

const bgAboutSection = {
  about: {
    path: "/about",
    label: "За мен",
    title: "За мен | Изработка на модерни сайтове за бизнес - Melvin Mihaylov",
    description:
      "Помагам с изработка на сайтове за бизнес, каталози, портфолиа и лендинг страници с ясен процес, разумен бюджет и SEO помощ.",
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
      title: "Как работя по един сайт",
      description:
        "Правя сайтове, които изглеждат модерно, остават разбираеми за хората и носят реална полза за бизнеса без излишно оскъпяване.",
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
      title: "Според нуждите на проекта",
      description:
        "Проектът може да стигне толкова далеч, колкото е нужно - от семпъл бизнес сайт или каталог до по-индивидуален визуален уебсайт.",
    },
    {
      title: "Модерно и разбираемо за клиента",
      description:
        "Целта винаги е професионален и модерен резултат, който остава ясен и удобен за ползване.",
    },
    {
      title: "Разумен бюджет без евтин вид",
      description:
        "Фокусът е върху силно представяне и практичен обхват, така че сайтът да изглежда качествено без цените на голяма агенция.",
    },
    {
      title: "Полезно и след изработката",
      description:
        "Ако има нужда, мога да остана ангажиран и с хостинг, домейни, SEO и довършване на проекти, започнати с помощта на изкуствен интелект.",
    },
  ],
  supportOptions: [
    "Изработка на сайт",
    "Сайтове за бизнес",
    "Каталози",
    "Портфолиа",
    "Лендинг страници",
    "Онлайн магазини",
    "Сайт с разумен бюджет",
    "Първа посока без ангажимент",
    "Google SEO",
    "Хостинг",
    "Домейни",
    "Помощ по започнати проекти",
  ],
} satisfies Pick<SiteContent, "about" | "aboutHighlights" | "supportOptions">;

export { bgAboutSection };
