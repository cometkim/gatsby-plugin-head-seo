import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export type HeadSeoProps = {
  location: {
    pathname: string,
  },
  title?: string,
  description?: string,
  alternates?: Alternate[],
  children?: (
    | (React.ReactElement | React.ReactElement[])
    | ((props: HeadSeoChildProps) => (React.ReactElement | React.ReactElement[]))
  ),

  /**
   * Don't render root-level meta tags (title, description, etc) when it set to `false`.
   *
   * @default true
   */
  root?: boolean,
  canonicalUrl?: string,
};

export type HeadSeoChildProps = {
  url: URL,
  title: string,
  description: string,
  alternates: Alternate[],
};

export type Alternate = {
  url: URL,
  media?: string,
};

export default function HeadSeo({
  root = true,
  location,
  title,
  description,
  alternates = [],
  children,
  canonicalUrl,
}: HeadSeoProps) {
  const staticData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { siteMetadata } = staticData.site;
  const {
    siteUrl,
    title: defaultTitle,
    description: defaultDescription,
  } = siteMetadata;

  const props: HeadSeoChildProps = {
    url: new URL(location.pathname, siteUrl),
    title: title || defaultTitle,
    description: description || defaultDescription,
    alternates,
  };

  const canonicalHref = canonicalUrl || props.url.toString();

  return (
    <>
      {root && (
        <>
          {props.title && (
            <title>{props.title}</title>
          )}

          {props.description && (
            <meta name="description" content={props.description} />
          )}

          <link rel="canonical" href={canonicalHref} />

          {alternates.map(alternate => (
            <link
              key={alternate.url.toString()}
              rel="alternate"
              href={alternate.url.toString()}
              media={alternate.media || undefined}
            />
          ))}
        </>
      )}

      {(typeof children === 'function'
        ? children(props)
        : children
      )}
    </>
  );
}
