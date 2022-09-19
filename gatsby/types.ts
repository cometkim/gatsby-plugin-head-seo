export type Attributes = {
  [propName: string]: string,
};

export type PathConfig = {
  [path: string]: Attributes,
};

export type PluginOptions = {
  htmlAttributes?: PathConfig,
  bodyAttributes?: PathConfig,
};
