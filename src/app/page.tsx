import { NewTwitterIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { EmailButton } from "@/components/copy-email";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SolarIcon } from "@/components/solar-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { links, projects, site, stack, work } from "@/lib/site";

// Inline text link: faint underline that firms up on hover, no fade.
const inlineLink =
  "underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground";

// Rows bleed 12px past the column so their hover fill lines up with the text.
const rowLink =
  "-mx-3 flex items-start justify-between gap-4 rounded-lg px-3 py-1.5 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const button =
  "inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium transition-transform duration-100 ease-out active:scale-[0.97] motion-reduce:transition-none [-webkit-tap-highlight-color:transparent]";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        <h2 className="text-[13px] text-muted-foreground">{title}</h2>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

function RowText({ title, text }: { title: string; text: string }) {
  return (
    <span className="flex min-w-0 flex-col">
      <span className="font-medium text-foreground">{title}</span>
      <span className="text-muted-foreground">{text}</span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 justify-center px-6 py-10 sm:py-14">
      <main className="flex w-full max-w-[640px] flex-col gap-12 text-sm leading-6">
        <Reveal>
          <header className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/honey.jpg"
                  alt="Honey"
                  width={44}
                  height={44}
                  priority
                  className="size-11 rounded-full object-cover outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
                />
                <div className="flex flex-col">
                  <h1 className="text-base font-medium leading-6 text-foreground">
                    {site.name}
                  </h1>
                  <p className="text-muted-foreground">{site.role}</p>
                </div>
              </div>
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-3">
              <p>
                I'm a design engineer based in {site.location}. I love designing
                UI, writing code, and reading fiction.
              </p>
              <p>
                I currently work at{" "}
                <Link
                  href={site.gooseworks}
                  target="_blank"
                  rel="noreferrer"
                  className={inlineLink}
                >
                  Gooseworks
                </Link>{" "}
                (YC W23). I design, build, and ship. Most days that means
                clauding in{" "}
                <Link
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noreferrer"
                  className={inlineLink}
                >
                  Claude Code
                </Link>
                .
              </p>
              <p>
                Before this, I grew a{" "}
                <Link
                  href={site.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className={inlineLink}
                >
                  YouTube channel
                </Link>{" "}
                to 160k, co-founded{" "}
                <Link
                  href={site.noLag}
                  target="_blank"
                  rel="noreferrer"
                  className={inlineLink}
                >
                  NoLag Energy
                </Link>
                , and co-founded{" "}
                <Link
                  href={site.houseOfUgc}
                  target="_blank"
                  rel="noreferrer"
                  className={inlineLink}
                >
                  House of UGC
                </Link>
                , making content for 160+ brands.
              </p>
              <p>
                I like building with{" "}
                {stack.map((item, i) => (
                  <span key={item.name}>
                    <span className="inline-flex items-baseline gap-1 whitespace-nowrap">
                      <SolarIcon
                        icon={item.icon}
                        className="size-3.5 self-center"
                        style={
                          item.color === "#000000"
                            ? undefined
                            : { color: item.color }
                        }
                      />
                      {item.name}
                    </span>
                    {i < stack.length - 2
                      ? ", "
                      : i === stack.length - 2
                        ? " and "
                        : "."}
                  </span>
                ))}
              </p>
              <p>
                You can find me on{" "}
                {links
                  .filter((l) => !("copy" in l))
                  .map((link, i) => (
                    <span key={link.label}>
                      {i > 0 && " and "}
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={inlineLink}
                      >
                        {link.label}
                      </Link>
                    </span>
                  ))}
                .
              </p>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.05}>
          <Section title="Work">
            <ul className="flex flex-col">
              {work.map((item) => {
                const inner = (
                  <>
                    <RowText title={item.title} text={item.role} />
                    <span className="shrink-0 text-muted-foreground tabular-nums">
                      {item.dates}
                    </span>
                  </>
                );
                return (
                  <li key={item.title}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={rowLink}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div className={rowLink.replace("hover:bg-muted", "")}>
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Section>
        </Reveal>

        <Reveal delay={0.1}>
          <Section title="Projects">
            <ul className="flex flex-col">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={rowLink}
                  >
                    <RowText title={project.name} text={project.summary} />
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        <Reveal delay={0.15}>
          <Section title="Get in touch">
            <div className="flex flex-col gap-3 pt-1.5">
              <p className="text-muted-foreground">
                Building something new? I'm open to joining early-stage teams as
                a design engineer.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={site.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={`${button} bg-foreground text-background`}
                >
                  <Icon icon={NewTwitterIcon} className="size-4" />
                  Twitter DM
                </Link>
                <EmailButton className={`${button} bg-muted text-foreground`}>
                  Copy email
                </EmailButton>
              </div>
            </div>
          </Section>
        </Reveal>

        <footer className="flex items-center justify-between text-[13px] text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.location}</p>
        </footer>
      </main>
    </div>
  );
}
