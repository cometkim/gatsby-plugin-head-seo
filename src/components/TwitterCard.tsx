import * as React from 'react';

import {
  type TwitterCardType,
} from '../types/twc';

export type TwitterCardProps = {
  /**
   * @remarks
   *
   * The different Card types each have a beautiful consumption experience built for Twitter’s web and mobile clients:
   * - [Summary Card](https://developer.twitter.com/content/developer-twitter/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image): Title, description, and thumbnail.
   * - [Summary Card with Large Image](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image.html): Similar to the Summary Card, but with a prominently-featured image.
   * - [App Card](https://developer.twitter.com/content/developer-twitter/en/docs/tweets/optimize-with-cards/overview/app-card): A Card with a direct download to a mobile app.
   * - [Player Card](https://developer.twitter.com/content/developer-twitter/en/docs/tweets/optimize-with-cards/overview/player-card): A Card that can display video/audio/media.
   *
   * To learn more about how the Card meta tags and web crawler work, check out the Getting Started Guide.
   */
  card: TwitterCardType,
};

export default function TwitterCard({
  card,
}: TwitterCardProps) {
  const metaTags: React.ReactElement[] = [];

  metaTags.push(
    <meta
      key="twitter:card"
      name="twitter:card"
      content={card.type}
    />
  );

  switch (card.type) {
    case 'summary':
    case 'summary_large_image': {
      card.site && metaTags.push(
        <meta
          key="twitter:site"
          name="twitter:site"
          content={card.site}
        />,
      );
      metaTags.push(
        <meta
          key="twitter:title"
          name="twitter:title"
          content={card.title}
        />,
      );
      card.description && metaTags.push(
        <meta
          key="twitter:description"
          name="twitter:description"
          content={card.description}
        />,
      );
      card.creator && metaTags.push(
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={card.creator}
        />,
      );
      card.image && metaTags.push(
        <meta
          key="twitter:image"
          name="twitter:image"
          content={card.image.url.toString()}
        />,
      );
      card.image?.alt && metaTags.push(
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content={card.image.alt}
        />,
      );
      break;
    }

    case 'app': {
      metaTags.push(
        <meta
          key="twitter:site"
          name="twitter:site"
          content={card.site}
        />,
      );
      card.description && metaTags.push(
        <meta
          key="twitter:description"
          name="twitter:description"
          content={card.description}
        />,
      );
      card.googleplay && metaTags.push(
        <meta
          key="twitter:app:id:googleplay"
          name="twitter:app:id:googleplay"
          content={card.googleplay.id}
        />,
      );
      card.googleplay?.url && metaTags.push(
        <meta
          key="twitter:app:url:googleplay"
          name="twitter:app:url:googleplay"
          content={card.googleplay.url.toString()}
        />,
      );
      card.iphone && metaTags.push(
        <meta
          key="twitter:app:id:iphone"
          name="twitter:app:id:iphone"
          content={card.iphone.id}
        />,
      );
      card.iphone?.url && metaTags.push(
        <meta
          key="twitter:app:url:iphone"
          name="twitter:app:url:iphone"
          content={card.iphone.url.toString()}
        />,
      );
      card.ipad && metaTags.push(
        <meta
          key="twitter:app:id:ipad"
          name="twitter:app:id:ipad"
          content={card.ipad.id}
        />,
      );
      card.ipad?.url && metaTags.push(
        <meta
          key="twitter:app:url:ipad"
          name="twitter:app:url:ipad"
          content={card.ipad.url.toString()}
        />,
      );
      card.country && metaTags.push(
        <meta
          key="twitter:app:country"
          name="twitter:app:country"
          content={card.country}
        />,
      );
      break;
    }

    case 'player': {
      metaTags.push(
        <meta
          key="twitter:site"
          name="twitter:site"
          content={card.site}
        />,
        <meta
          key="twitter:title"
          name="twitter:title"
          content={card.title}
        />,
      );
      card.description && metaTags.push(
        <meta
          key="twitter:description"
          name="twitter:description"
          content={card.description}
        />,
      );
      metaTags.push(
        <meta
          key="twitter:player"
          name="twitter:player"
          content={card.url.toString()}
        />,
        <meta
          key="twitter:player:width"
          name="twitter:player:width"
          content={(card.width | 0).toString()}
        />,
        <meta
          key="twitter:player:height"
          name="twitter:player:height"
          content={(card.height | 0).toString()}
        />,
      );
      metaTags.push(
        <meta
          key="twitter:image"
          name="twitter:image"
          content={card.image.url.toString()}
        />,
      );
      card.image?.alt && metaTags.push(
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content={card.image.alt}
        />,
      );
      break;
    }
  }

  return metaTags;
}
