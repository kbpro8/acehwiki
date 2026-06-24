import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import { pathToRoot } from "../util/path";
import { i18n } from "../i18n";

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const locale = cfg?.locale ?? "en-US";
  const title = cfg?.pageTitle ?? i18n(locale).propertyDefaults.title;
  const baseDir = pathToRoot(fileData.slug as string);
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={`${baseDir}/static/logo.svg`} alt={title} class="page-title-logo page-title-logo-square" />
        <img src={`${baseDir}/static/logo-horizontal.svg`} alt={title} class="page-title-logo page-title-logo-horizontal" />
      </a>
    </h2>
  );
};

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-logo {
  width: auto;
}
.page-title-logo-square {
  display: block;
  height: 11rem;
}
.page-title-logo-horizontal {
  display: none;
  height: 3.5rem;
}
@media all and (max-width: 800px) {
  .page-title-logo-square {
    display: none;
  }
  .page-title-logo-horizontal {
    display: block;
  }
}
`;

export default (() => PageTitle) satisfies QuartzComponentConstructor;
