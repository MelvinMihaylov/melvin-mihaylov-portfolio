import type { SiteContent } from "@/translations/schema";

const bgPricingSection = {
  pricing: {
    path: "/pricing",
    label: "Цени",
    title: "Цени - Melvin Mihaylov",
    description: "Ясни цени за уебсайт, текуща намалена ставка и реалистични примерни бюджети.",
  },
  pricingSummary: {
    label: "Текуща оферта: 50% отстъпка",
    title: "Ясни цени, реалистични бюджети и без неясни оферти.",
    description:
      "Стандартната ставка е 100 EUR на час, но в момента новите проекти се работят на 50 EUR на час. Идеята е изпълнението да остане модерно и професионално, без стартовият бюджет да става излишно тежък.",
    tags: ["50 EUR / час текуща цена", "100 EUR / час стандартна цена", "Безплатна демо посока"],
  },
  pricingEstimates: [
    {
      label: "Подходящо за по-изчистени сайтове",
      title: "Семпло портфолио или каталог",
      hours: "6-7 часа",
      discountedPrice: "300-350 EUR",
      standardPrice: "600-700 EUR",
      description:
        "Подходящо за по-малък сайт, който представя бизнеса ясно, изглежда модерно и покрива основната информация без твърде много custom секции.",
    },
    {
      label: "Най-честият бизнес обхват",
      title: "Бизнес сайт до 10 страници",
      hours: "8-10 часа",
      discountedPrice: "400-500 EUR",
      standardPrice: "800-1000 EUR",
      description:
        "Подходящо за бизнеси, които имат нужда от повече service pages, по-силна структура, по-ясно представяне и по-завършен сайт от начало до край.",
    },
    {
      label: "Бърз вариант за launch",
      title: "Лендинг страница или campaign page",
      hours: "4-6 часа",
      discountedPrice: "200-300 EUR",
      standardPrice: "400-600 EUR",
      description:
        "Полезно за Google кампании, оферти, launch-и или една фокусирана страница, която има нужда от по-силно послание и по-добър conversion flow.",
    },
    {
      label: "Индивидуална оферта",
      title: "Marketplace или по-custom платформа",
      hours: "Според обхвата",
      discountedPrice: "Индивидуална оферта",
      standardPrice: "Зависи от нуждите",
      description:
        "Marketplace проектите зависят от функции като listings, filters, accounts, admin панел, плащания и custom flows, затова се оценяват след кратък разговор.",
    },
  ],
  pricingNotes: [
    {
      title: "Какво влияе на крайната оферта",
      description:
        "Времето зависи от броя страници, готовността на текста и изображенията, броя желани корекции и това дали има custom функционалност.",
    },
    {
      title: "SEO, хостинг и launch могат да са в един и същ проект",
      description:
        "SEO setup, подготовка за индексиране в Google, помощ с хостинг, домейни и launch подкрепа могат да влязат в същия проект, вместо да се търсят отделно.",
    },
    {
      title: "Примери правят офертата по-бърза и по-точна",
      description:
        "Ако вече знаеш какъв стил искаш или имаш примери, оценката става по-лесна, по-ясна и обикновено по-бърза.",
    },
  ],
} satisfies Pick<SiteContent, "pricing" | "pricingSummary" | "pricingEstimates" | "pricingNotes">;

export { bgPricingSection };
