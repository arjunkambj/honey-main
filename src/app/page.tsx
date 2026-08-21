import { ArrowUpRight01Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { EmailButton } from "@/components/copy-email";
import { FooterEmailButton } from "@/components/footer-email";
import { Icon } from "@/components/icon";
import { SolarIcon } from "@/components/solar-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { links, projects, site, stack, work } from "@/lib/site";

function Pill({
  href,
  icon,
  children,
  solid = false,
}: {
  href: string;
  icon: React.ComponentProps<typeof Icon>["icon"];
  children: string;
  solid?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        solid
          ? "inline-flex h-9 items-center gap-2 rounded-xl bg-foreground px-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          : "inline-flex h-9 items-center gap-2 rounded-xl bg-muted px-3.5 text-sm font-medium transition-colors hover:bg-muted/80"
      }
    >
      <Icon icon={icon} className="size-4" />
      {children}
    </Link>
  );
}

const pillMuted =
  "inline-flex h-9 items-center gap-2 rounded-xl bg-muted px-3.5 text-sm font-medium transition-colors hover:bg-muted/80";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center px-6 pt-8 pb-8 sm:px-8 sm:pt-10 sm:pb-10">
      <main className="flex w-full max-w-2xl flex-col gap-16">
        <header className="flex flex-col gap-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Hey, it's me</p>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/honey.jpg"
              alt="Honey"
              width={64}
              height={64}
              priority
              className="size-16 rounded-2xl object-cover"
            />
            <div className="flex min-w-0 flex-col gap-1">
              <h1 className="font-display text-[2.6rem] leading-none tracking-[0.08em] uppercase sm:text-5xl">
                {site.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {site.role} / {site.handle}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-base leading-7">
            <p>
              Yup. I'm a <span className="font-medium">design engineer</span>. I
              love designing UI, writing code, and reading books (fiction).
            </p>
            <p className="text-muted-foreground">
              I'm good at going from nothing to something — designing, building,
              shipping.
            </p>
            <p className="text-muted-foreground">
              Before this: built an audience of 160k on YouTube, co-founded a
              D2C brand, and co-founded a UGC agency making content for 160+
              brands.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Pill href={site.twitter} icon={NewTwitterIcon} solid>
              Twitter DM
            </Pill>
            <span className="text-xs tracking-[0.18em] text-muted-foreground">
              OR
            </span>
            <EmailButton className={pillMuted}>Email me</EmailButton>
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">Tech stack I like</h2>
          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item.name}
                className="inline-flex h-9 items-center gap-2 rounded-xl bg-muted px-3 text-sm font-medium"
              >
                <SolarIcon
                  icon={item.icon}
                  className="size-4"
                  style={{ color: item.color }}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">Work</h2>
          <ul className="flex flex-col border-t border-border">
            {work.map((item) => {
              const row = (
                <div className="flex items-start justify-between gap-4 py-3.5">
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <h3 className="text-[14px] font-medium leading-none text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-5 text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                  <p className="shrink-0 pt-0.5 text-[13px] tabular-nums text-muted-foreground">
                    {item.dates}
                  </p>
                </div>
              );

              return (
                <li key={item.title} className="border-b border-border">
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition-colors hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {row}
                    </Link>
                  ) : (
                    row
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">Projects</h2>
          <ul className="flex flex-col border-t border-border">
            {projects.map((project) => (
              <li key={project.name} className="border-b border-border">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <h3 className="text-[14px] font-medium leading-none text-foreground">
                      {project.name}
                    </h3>
                    <p className="truncate text-[13px] leading-5 text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                  <Icon
                    icon={ArrowUpRight01Icon}
                    strokeWidth={1.75}
                    className="size-3.5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-40 flex flex-col gap-5 border-t border-border pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-sm font-semibold tracking-[0.14em] uppercase text-foreground">
                On the internet
              </h2>
              <p className="max-w-[280px] text-sm leading-6 text-muted-foreground">
                Building something new? I'm open to joining early-stage teams as
                a design engineer.
              </p>
            </div>
            <div className="flex items-center gap-1 sm:pt-1">
              {links.map((link) =>
                "copy" in link && link.copy ? (
                  <FooterEmailButton key={link.label} />
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon icon={link.icon} className="size-4" />
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Honey</p>
            <p>{site.location}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
