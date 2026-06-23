import { QuartzComponent } from '@quartz-community/types';
export { QuartzComponent, QuartzComponentProps, StringResource } from '@quartz-community/types';

interface FooterOptions {
    links: Record<string, string>;
}
declare const _default: (opts?: FooterOptions) => QuartzComponent;

export { _default as Footer, type FooterOptions };
