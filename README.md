# gatsby-plugin-head-seo

A Gatsby Plugin to support SEO, built-on top of the [Gatsby Head API]. No react-helmet required.

## Requirements

It is intended to be used with the [Gatsby Head API].

Support for the [Gatsby Head API] was added in `gatsby@4.19.0`.

## Usage

### Basic Metadata

```tsx
import { BasicMeta, OpenGraph } from 'gatsby-plugin-head-seo/src';

export function Head() {
  const title = 'My Homepage';
  const description = 'This is my homepage';
  const pageUrl = new URL('https://my-homepage.com');

  return (
    <>
      <title>{title}</title>
      <BasicMeta
        description={description}
        urlSettings={{
          canonical: pageUrl,
        }}
      />
      <OpenGraph
        ogType="website"
        title={title}
        description={description}
        url={pageUrl}
      />
    </>
  );
}
```

### JSON-LD

```tsx
import {
  // schema.org standard
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
  WebSiteJsonLd,

  // extensions
  SocialProfileJsonLd, // Person or Organization
} from 'gasby-plugin-head-seo/src/jsonld';
```

See [code](src/jsonld) for more detail.

## Acknowledgement

This plugin was inspired by [gatsby-plugin-next-seo](https://github.com/ifiokjr/gatsby-plugin-next-seo), which was originally forked from [next-seo](https://github.com/garmeeh/next-seo)

## LICENSE

MIT

[Gatsby Head API]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
