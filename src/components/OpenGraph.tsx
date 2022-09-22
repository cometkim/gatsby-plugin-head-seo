import * as React from 'react';

import {
  type OgType,
  type OpenGraphImage,
  type OpenGraphVideo,
} from '../og';

export type OpenGraphProps = {
  /**
   * The canonical URL of your object that will be used as its permanent ID in the graph.
   */
  url: URL,

  /**
   * The title of your object as it should appear within the graph.
   */
  title: string,

  /**
   * The type of your object.
   */
  ogType: OgType['type'] | OgType,

  /**
   * If your object is part of a larger web site, the name which should be displayed for the overall site.
   */
  siteName?: string,

  /**
   * A one to two sentence description of your object.
   */
  description?: string,

  /**
   * The word that appears before this object's title in a sentence.
   *
   * @remarks
   *
   * An enum of (`"a"`, `"an"`, `"the"`, `""`, `auto`). If auto is chosen, the consumer of your data should chose between `"a"` or `"an"`. Default is `""` (blank).
   */
  determiner?: ('a' | 'an' | 'the' | 'auto' | ''),

  /**
   * The locale these tags are marked up in. Of the format `language_TERRITORY`. Default is `en_US`.
   */
  locale?: string,

  /**
   * An array of other locales this page is available in.
   */
  alterateLocales?: string[],

  /**
   * Image URLs which should represent your object within the graph.
   */
  images?: OpenGraphImage[],

  /**
   * Video URLs to a video file that complements this object.
   */
  videos?: OpenGraphVideo[],
};

export default function OpenGraph({
  url,
  title,
  ogType,
  siteName,
  description,
  determiner,
  locale,
  alterateLocales,
  images,
  videos,
}: OpenGraphProps) {
  const normalzedOgType = (
    typeof ogType === 'string'
      ? { type: ogType }
      : ogType
  );

  return (
    <>
      <meta property="og:url" content={url.toString()} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={normalzedOgType.type} />
      {siteName && (
        <meta property="og:site_name" content={siteName} />
      )}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {determiner && (
        <meta property="og:determiner" content={determiner} />
      )}
      {locale && (
        <meta property="og:locale" content={locale} />
      )}
      {alterateLocales && alterateLocales.map(locale => (
        <meta
          key={locale}
          property="og:locale:alternate"
          content={locale}
        />
      ))}
      {images && images.map(image => (
        <React.Fragment key={image.url.toString()}>
          <meta property="og:image" content={image.url.toString()} />
          {image.type && (
            <meta property="og:image:type" content={image.type} />
          )}
          {image.alt && (
            <meta property="og:image:alt" content={image.alt} />
          )}
          {image.width && (
            <meta property="og:image:width" content={(image.width | 0).toString()} />
          )}
          {image.height && (
            <meta property="og:image:height" content={(image.height | 0).toString()} />
          )}
        </React.Fragment>
      ))}
      {videos && videos.map(video => (
        <React.Fragment key={video.url.toString()}>
          <meta property="og:video" content={video.url.toString()} />
          {video.type && (
            <meta property="og:video:type" content={video.type} />
          )}
          {video.alt && (
            <meta property="og:video:alt" content={video.alt} />
          )}
          {video.width && (
            <meta property="og:video:width" content={(video.width | 0).toString()} />
          )}
          {video.height && (
            <meta property="og:video:height" content={(video.height | 0).toString()} />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
