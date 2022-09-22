import * as React from 'react';

export type BasicSeoProps = {
  /**
   * Set the meta title of the page
   */
  title: string,

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
   * Set the page meta description.
   */
  description: string,

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
  canonical: string;
};

const DEFAULT_TITLE_TEMPLATE = '%s';

const BasicSeo: React.FC<BasicSeoProps> = ({
  title,
  titleTemplate = DEFAULT_TITLE_TEMPLATE,
  description,
}) => {
  return (
    <>
      <title>
        {titleTemplate.replace(DEFAULT_TITLE_TEMPLATE, title)}
      </title>
      <meta name='description' content={description} />
    </>
  );
};

export default BasicSeoProps;
