import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://djwebdev.io", // replace this with your deployed domain
  author: "DJ Carrillo",
  desc: "DJ's minimal, responsive and SEO-friendly tech blog.",
  title: "DJ's Blog",
  ogImage: "astropaper-og.jpg", // From "public" directory
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Djcarrillo6",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/davidcarrillojr/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:djcarrillo06@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "X",
    href: "https://x.com/Djcarrillo6",
    linkTitle: `${SITE.title} on X`,
    active: false,
  },
];
