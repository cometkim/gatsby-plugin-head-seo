import type { GatsbySSR } from 'gatsby';
import { createRouter } from 'radix3';
import type { HTMLAttributes } from 'react';
import type { PluginOptions, PathConfig } from './types';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  pathname,
  setHtmlAttributes,
  setBodyAttributes,
}, options) => {
  const pluginOptions = options as unknown as Required<PluginOptions>;

  const htmlRouter = createRouter<PathConfig>(pluginOptions.htmlAttributes);
  const htmlMatch = htmlRouter.lookup(pathname);
  if (htmlMatch) {
    setHtmlAttributes(htmlMatch as HTMLAttributes<HTMLHtmlElement>);
  }

  const bodyRouter = createRouter<PathConfig>(pluginOptions.bodyAttributes);
  const bodyMatch = bodyRouter.lookup(pathname);
  if (bodyMatch) {
    setBodyAttributes(bodyMatch as HTMLAttributes<HTMLBodyElement>);
  }
};
