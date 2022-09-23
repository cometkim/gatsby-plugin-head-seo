import * as React from 'react';

export type BasicMetaProps = {
  /**
   * Set the page meta description.
   */
  description?: string,

  /**
   * Set the page canonical and alternate urls.
   *
   * @remarks
   *
   * Add this on a page per page basis when you want to consolidate duplicate
   * URLs.
   */
  urlSettings?: UrlSettings,
};

export default function BasicMeta({
  description,
  urlSettings,
}: BasicMetaProps) {
  return (
    <>
      {description && (
        <meta name="description" content={description} />
      )}

      {urlSettings && (
        <>
          <link rel="canonical" href={urlSettings.canonicalUrl.toString()} />

          {urlSettings.alternates?.map(alternate => (
            <link
              key={alternate.url.toString()}
              rel="alternate"
              href={alternate.url.toString()}
              media={alternate.media || undefined}
            />
          ))}
        </>
      )}
    </>
  );
};

export type UrlSettings = {
  canonicalUrl: URL,
  alternates?: Alternate[],
};

export type Alternate = {
  url: URL,
  media?: string,
};
