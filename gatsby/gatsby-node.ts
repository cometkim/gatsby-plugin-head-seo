import type { GatsbyNode } from 'gatsby';

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  const attrs = Joi.object()
    .pattern(Joi.string(), Joi.string());

  const pathConfig = Joi.object()
    .pattern(/^\//, attrs);

  return Joi.object({
    htmlAttributes: pathConfig.default({}),
    bodyAttributes: pathConfig.default({}),
  });
};
