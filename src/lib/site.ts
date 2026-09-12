import {
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

export const site = {
  name: "Honey",
  handle: "@arjunkambj",
  githubUser: "arjunkambj",
  role: "Design engineer",
  title: "0xHoney | Design Engineer",
  description:
    "Design engineer. I love designing UI, writing code, and reading fiction. I'm good at going from nothing to something — designing, building, shipping. Before this: built an audience of 160k on YouTube, co-founded a D2C brand, and co-founded a UGC agency making content for 160+ brands.",
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
    role: "Design engineer",
    href: site.github,
  },
  {
    title: "House of UGC",
    dates: "2024 - 2025",
    role: "Co-founder | Built content for 160+ brands",
    href: site.houseOfUgc,
  },
  {
    title: "NoLag Energy",
    dates: "2023 - 2024",
    role: "Co-founder | Marketing, Tech & Branding",
    href: site.noLag,
  },
  {
    title: "Crypto ops",
    dates: "2020 - 2023",
    role: "Art, marketing & community for NFT projects",
    href: null,
  },
  {
    title: "YouTube",
    dates: "2019 - 2020",
    role: "Grew channel to 160K subs",
    href: site.youtube,
  },
] as const;

export const projects = [
  {
    name: "MultiFeed",
    href: "https://themultifeed.com/",
    summary: "Post to all your social accounts from one place",
  },
  {
    name: "Honey Icons",
    href: "https://icons.0xhoney.com",
    summary: "A modern icon library for React",
  },
  {
    name: "Calio",
    href: "https://gocalio.com/",
    summary: "A shared business number teams can actually pick up",
  },
  {
    name: "AdMiro",
    href: "https://www.theadmiro.com/",
    summary: "Let Claude and Codex run your ads",
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
