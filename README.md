# gatsby-plugin-head-seo

[![NPM package version](https://img.shields.io/npm/v/gatsby-plugin-head-seo)](https://www.npmjs.com/package/gatsby-plugin-head-seo)
[![NPM package monthly downloads](https://img.shields.io/npm/dm/gatsby-plugin-head-seo)](https://www.npmjs.com/package/gatsby-plugin-head-seo)
[![License - MIT](https://img.shields.io/github/license/cometkim/gatsby-plugin-head-seo)](#LICENSE)

A Gatsby plugin to support SEO, built-on top of the [Gatsby Head API]. No react-helmet required.

## Requirements

It is intended to be used with the [Gatsby Head API].

Support for the [Gatsby Head API] was added in `gatsby@4.19.0`.

## Usage

### Basic Metadata

```ts
// gatsby-config.ts

import { type GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://my-hoempage.com',
    title: 'My Homepage',
    description: 'This is my hoempage',
  },
  plugins: [
    'gatsby-plugin-head-seo',
  ],
};
```

The `<HeadSeo />` use siteMetadata you defines in gatsby-config.

It automatically builds basic meta tags for title, description, and canonical url for the page.

```tsx
// in the page
import { type HeadProps } from 'gatsby';
import { HeadSeo } from 'gasby-plugin-head-seo/src';

export function Head({ location }: HeadProps) {
  return (
    <HeadSeo location={location} />
  );
}
```

You can overrides the passing properties.

```tsx
// in the page
import { type HeadProps } from 'gatsby';
import { HeadSeo } from 'gasby-plugin-head-seo/src';

export function Head({ location }: HeadProps) {
  return (
    <HeadSeo
      location={location}
      title="This is New Title"
    />
  );
}
```

### Social Media

There are utility components for [Open Graph](https://ogp.me/) and [Twitter Card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards).

Twitter Card indirectly reference the Open Graph standard, so I recommend always using them together.

```tsx
// in the page
import { type HeadProps } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard, Facebook } from 'gasby-plugin-head-seo/src';

export function Head({ location }: HeadProps) {
  return (
    <HeadSeo location={location}>
      {({ url, title, description }) => (
        <>
          <OpenGraph
            locale="ko"
            og={{
              type: 'website',
              url,
              title,
              description,
            }}
          />
          <TwitterCard
            card={{
              type: 'summary'
              site: '@handle',
              title,
              description,
            }}
          />
          <Facebook appId="my_facebook_app_id" />
        </>
      )}
    </HeadSeo>
  );
}
```

### Robots Directives

There are utilities for [robots meta tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

```tsx
// in the page
import { type HeadProps } from 'gatsby';
import { HeadSeo, Robots } from 'gasby-plugin-head-seo/src';

export function Head({ location }: HeadProps) {
  return (
    <HeadSeo location={location}>
      <Robots noindex />
      <Robots name="googlebot" noSnippet />
      <Robots name="googlebot-news" maxSnippet={20} />
    </HeadSeo>
  );
}
```

### JSON-LD

There are utilities for JSON-LD markup. It refers to the [schema.org](https://schema.org/) standard, and some extensions for [Google Search's rich content schema](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

```tsx
import {
  // schema.org standard schema
  ArticleJsonLd,
  BlogJsonLd,
  BlogPostJsonLd,
  BookJsonLd,
  BreadcrumbListJsonLd,
  CourseJsonLd,
  FAQPageJsonLd,
  JobPostingJsonLd,
  LocalBusinessJsonLd,
  ProductJsonLd,
  WebSiteJsonLd, // Supports Google's Sitelinks Search Box extension

  // extensions
  SocialProfileJsonLd, // Person or Organization
} from 'gasby-plugin-head-seo/src/jsonld';
```

See [code](src/jsonld) for more detail.

## Acknowledgement

This plugin was inspired by [https://github.com/ifiokjr/gatsby-plugin-next-seo](https://github.com/ifiokjr/gatsby-plugin-next-seo), which was originally forked from [next-seo](https://github.com/garmeeh/next-seo)

## LICENSE

MIT

[Gatsby Head API]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
