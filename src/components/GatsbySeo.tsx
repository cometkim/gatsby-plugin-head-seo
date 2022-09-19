import * as React from 'react';

export type GatsbySeoProps = {
  /**
   * Set the meta title of the page
   */
  title?: string,

  /**
   * Allows you to set default title template that will be added to your title.
   *
   * @remarks
   *
   * Replaces `%s` with your title string
   *
   * ```js
   * title = 'This is my title';
   * titleTemplate = 'Gatsby SEO | %s';
   * // outputs: Gatsby SEO | This is my title
   * ```
   *
   * ```js
   * title = 'This is my title';
   * titleTemplate = '%s | Gatsby SEO';
   * // outputs: This is my title | Gatsby SEO
   * ```
   */
  titleTemplate?: string;

  /**
   * Sets robots meta tag of this page
   *
   * @see https://developers.google.com/search/docs/advanced/robots/robots_meta_tag
   *
   * @remarks
   *
   * If you have a single page that you want no indexed you can achieve this by:
   *
   * ```tsx
   * import * as React from 'react';
   * import { GatsbySeo } from 'gatsby-plugin-head-seo';
   *
   * export const Head = () => (
   *   <GatsbySeo robots="noindex,nofollow" />
   * );
   * ```
   */
  robots?: string;
  
  /**
   * Set the page meta description.
   */
  description?: string,

  /**
   * Set the page canonical url.
   *
   * @remarks
   *
   * Add this on a page per page basis when you want to consolidate duplicate
   * URLs.
   *
   * ```js
   * canonical = 'https://www.canonical.ie/';
   * ```
   */
  canonical?: string;

  /**
   * Used for Facebook Insights, you must add a facebook app ID to your page to
   * for it.
   *
   * @remarks
   *
   * ```tsx
   * facebook={{
   *   appId: 1234567890,
   * }}
   * ```
   *
   */
  facebook?: { appId: string };
};

const TITLE_PLACEHOLDER = '%s';

const GatsbySeo: React.FC<GatsbySeoProps> = ({
  title,
  titleTemplate = TITLE_PLACEHOLDER,
  robots,
  description,
  facebook,
}) => {
  return (
    <>
      {title && (
        <title>
          {titleTemplate.replace(TITLE_PLACEHOLDER, title)}
        </title>
      )}

      {description && (
        <meta name='description' content={description} />
      )}

      {robots && (
        <meta name="robots" content={robots} />
      )}

      {facebook && (
        <meta property="fb:app_id" content={facebook.appId} />
      )}
    </>
  );
};

export default GatsbySeo;

type MobileAlternate = {
  /**
   * Set what screen size the mobile website should be served from.
   */
  media: string,

  /**
   * Set the mobile page alternate url.
   */
  href: string,
};

type LiteralUnion<
	LiteralType,
	BaseType extends Primitive,
> = LiteralType | (BaseType & Record<never, never>);

export type Primitive = (
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint
);
