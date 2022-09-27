export type ExtractContextType<T> = T extends {
  '@type': infer U,
} ? U : never;

export type ExtractContextValue<T> = T extends {
  '@type': string,
} ? Omit<T, '@context'> : never;
