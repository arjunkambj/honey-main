import {
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

export const site = {
  name: "Honey",
  handle: "@arjunkambj",
  githubUser: "arjunkambj",
  role: "Designer and full-stack developer",
  title: "0xHoney | Designer and full-stack developer",
  description:
    "Designer and full-stack developer. Started coding in 2024. I love designing UI, writing code, and reading fiction. I help small teams build early product, from first idea to working product. Before this: YouTube to 160k, crypto & marketing ops, a D2C brand, then a UGC agency for 160 brands.",
  email: "hey@0xhoney.com",
  twitter: "https://x.com/arjunkambj",
  github: "https://github.com/arjunkambj",
  youtube: "https://www.youtube.com/animelordofficial",
  houseOfUgc: "https://www.instagram.com/houseofugc.in/",
  noLag: "https://www.instagram.com/nolagenergy/",
  location: "India",
};

export const work = [
  {
    title: "Freelance",
    dates: "2025 - now",
    role: "Designer and full-stack developer",
    icon: "solar:code-bold",
    href: site.github,
  },
  {
    title: "House of UGC",
    dates: "2024 - 2025",
    role: "Co-founder | Built content for 160+ brands",
    icon: "solar:videocamera-record-bold",
    href: site.houseOfUgc,
  },
  {
    title: "NoLag Energy",
    dates: "2023 - 2024",
    role: "Co-founder | Marketing, Tech & Branding",
    icon: "solar:bolt-bold",
    href: site.noLag,
  },
  {
    title: "Crypto ops",
    dates: "2020 - 2023",
    role: "NFT & Web3",
    icon: "solar:graph-up-bold",
    href: null,
  },
  {
    title: "YouTube",
    dates: "2019 - 2020",
    role: "Grew channel to 160K subs",
    icon: "solar:play-circle-bold",
    href: site.youtube,
  },
] as const;

export const projects = [
  {
    name: "Calio",
    href: "https://gocalio.com/",
    summary: "A shared business number teams can actually pick up",
  },
  {
    name: "AdMiro",
    href: "https://www.theadmiro.com/",
    summary: "Let Claude and Codex inspect and move Google and Meta spend",
  },
  {
    name: "Setter Saga",
    href: "https://settersaga.vercel.app/",
    summary: "A real-time island-building board game",
  },
] as const;

export const stack = [
  { name: "Next.js", icon: "simple-icons:nextdotjs", color: "#000000" },
  { name: "TanStack Start", icon: "simple-icons:tanstack", color: "#FF5E00" },
  { name: "Convex", icon: "simple-icons:convex", color: "#EE342F" },
  { name: "Postgres", icon: "simple-icons:postgresql", color: "#4169E1" },
  { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
  { name: "Hono", icon: "simple-icons:hono", color: "#E36002" },
  { name: "Drizzle", icon: "simple-icons:drizzle", color: "#C5F74F" },
] as const;

export const links = [
  { label: "Twitter", href: site.twitter, icon: NewTwitterIcon },
  { label: "GitHub", href: site.github, icon: GithubIcon },
  { label: "Email", href: site.email, icon: Mail01Icon, copy: true },
] as const;
