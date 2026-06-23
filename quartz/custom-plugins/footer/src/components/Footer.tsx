import { readFileSync } from "fs";
import { join } from "path";
import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/footer.scss";

function getQuartzVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
    return pkg.version ?? "";
  } catch {
    return "";
  }
}

export interface FooterOptions {
  links: Record<string, string>;
}

export default ((opts?: FooterOptions) => {
  const version = getQuartzVersion();

  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          A permanent knowledge graph project dedicated to documenting Aceh's history.
          Developed by <a href="https://www.trida.id">Trida Advokasi &amp; Riset</a>, led by{" "}
          <a href="https://github.com/kbpro8">Kbpro8</a>, and powered by{" "}
          <a href="https://github.com">GitHub</a> and{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz{version ? ` v${version}` : ""}</a> &copy;{" "}
          {year}.
        </p>
        <p>
          Contribute to the project:{" "}
          <a href="https://github.com/kbpro8/acehwiki">https://github.com/kbpro8/acehwiki</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
