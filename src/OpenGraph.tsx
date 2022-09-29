import * as React from 'react';

import {
  type OgType,
  type OpenGraphBasicMetadata,
} from './types/og';

export type OpenGraphProps = {
  og: OgType & OpenGraphBasicMetadata,
};

export default function OpenGraph({
  og: {
    type: ogType,
    url,
    title,
    siteName,
    description,
    determiner,
    locale,
    alterateLocales,
    images,
    videos,
  },
}: OpenGraphProps) {
  return (
    <>
      <meta property="og:url" content={url.toString()} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
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
