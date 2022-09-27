import * as React from 'react';

import {
  type LiteralUnion,
} from './types/utils';

export type RobotsProps = {
  /**
   * Name of the robot(crawler). Use `robots` if not specified.
   *
   * @see https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
   */
  name?: string,

  /**
   * Use `noindex` directive.
   *
   * @remarks
   *
   * Do not show this page, media, or resource in search results. If you don't specify this directive, the page, media, or resource may be indexed and shown in search results.
   */
  noIndex?: boolean,

  /**
   * Use `nofollow` directive.
   *
   * @remarks
   *
   * Do not follow the links on this page. If you don't specify this directive, Google may use the links on the page to discover those linked pages.
   *
   * @see https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
   */
  noFollow?: boolean,

  /**
   * Use `none` directive.
   *
   * @remarks
   *
   * Equivalent to `noindex, nofollow`.
   */
  none?: boolean,

  /**
   * Use `noarchive` directive.
   *
   * @remarks
   *
   * Do not show a [cached link](https://support.google.com/websearch/answer/1687222) in search results. If you don't specify this directive, Google may generate a cached page and users may access it through the search results.
   */
  noArchive?: boolean,

  /**
   * Use `nositelinkssearchbox` directive.
   *
   * @remarks
   *
   * Do not show a [sitelinks search box](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox) in the search results for this page. If you don't specify this directive, Google may generate a search box specific to your site in search results, along with other direct links to your site.
   */
  noSitelinksSearchBox?: boolean,

  /**
   * Use `nosnippet` directive.
   *
   * @remarks
   *
   * Do not show a text snippet or video preview in the search results for this page. A static image thumbnail (if available) may still be visible, when it results in a better user experience. This applies to all forms of search results (at Google: web search, Google Images, Discover).
   *
   * If you don't specify this directive, Google may generate a text snippet and video preview based on information found on the page.
   */
  noSnippet?: boolean,

  /**
   * Use `indexifembedded` directive.
   *
   * @remarks
   *
   * Allow to index the content of a page if it's embedded in another page through iframes or similar HTML tags, in spite of a `noindex` directive.
   *
   * `indexifembedded` only has an effect if it's accompanied by `noindex`.
   */
  indexIframeEmbedded?: boolean,

  /**
   * Use `max-snippet: [number]` directive.
   *
   * @remarks
   *
   * Use a maximum of number characters as a textual snippet for this search result. (Note that a URL may appear as multiple search results within a search results page.) This does not affect image or video previews. This applies to all forms of search results (such as Google web search, Google Images, Discover, Assistant). However, this limit does not apply in cases where a publisher has separately granted permission for use of content. For instance, if the publisher supplies content in the form of in-page structured data or has a license agreement with Google, this setting does not interrupt those more specific permitted uses. This directive is ignored if no parseable number is specified.
   *
   * If you don't specify this directive, Google will choose the length of the snippet.
   *
   * Special values:
   * - `0`: No snippet is to be shown. Equivalent to nosnippet.
   * - `-1`: Google will choose the snippet length that it believes is most effective to help users discover your content and direct users to your site.
   */
  maxSnippet?: LiteralUnion<0 | -1, number>,

  /**
   * Use `max-image-preview: [setting]` directive.
   *
   * @remarks
   *
   * Set the maximum size of an image preview for this page in a search results.
   *
   * If you don't specify the max-image-preview directive, Google may show an image preview of the default size.
   *
   * Accepted setting values:
   * - `none`: No image preview is to be shown.
   * - `standard`: A default image preview may be shown.
   * - `large`: A larger image preview, up to the width of the viewport, may be shown.
   *
   * This applies to all forms of search results (such as Google web search, Google Images, Discover, Assistant). However, this limit does not apply in cases where a publisher has separately granted permission for use of content. For instance, if the publisher supplies content in the form of in-page structured data (such as AMP and canonical versions of an article) or has a license agreement with Google, this setting will not interrupt those more specific permitted uses.
   *
   * If you don't want Google to use larger thumbnail images when their AMP pages and canonical version of an article are shown in Search or Discover, specify a `max-image-preview` value of `standard` or `none`.
   */
  maxImagePreview?: 'none' | 'standard' | 'large',

  /**
   * Use `max-video-preview: [number]` directive.
   *
   * @remarks
   *
   * Use a maximum of number seconds as a video snippet for videos on this page in search results.
   *
   * If you don't specify the max-video-preview directive, Google may show a video snippet in search results, and you leave it up to Google to decide how long the preview may be.
   *
   * Special values:
   * - `0`: At most, a static image may be used, in accordance to the max-image-preview setting.
   * - `-1`: There is no limit.
   *
   * This applies to all forms of search results (at Google: web search, Google Images, Google Videos, Discover, Assistant). This directive is ignored if no parseable number is specified.
   */
  maxVideoPreview?: LiteralUnion<0 | -1, number>,

  /**
   * Use `notranslate` directive.
   *
   * @remarks
   *
   * Don't offer translation of this page in search results. If you don't specify this directive, Google may provide a [translation of the title link and snippet](https://developers.google.com/search/docs/appearance/translated-results) of a search result for results that aren't in the language of the search query. If the user clicks the translated title link, all further user interaction with the page is through Google Translate, which will automatically translate any links followed.
   */
  noTranslate?: boolean,

  /**
   * Do not index images on this page. If you don't specify this value, images on the page may be indexed and shown in search results.
   */
  noImageIndex?: boolean,

  /**
   * Use `unavailable_after: [date/time]` directive.
   *
   * @remarks
   *
   * Do not show this page in search results after the specified date/time. The date/time must be specified in a widely adopted format including, but not limited to [RFC 822](http://www.ietf.org/rfc/rfc0822.txt), [RFC 850](http://www.ietf.org/rfc/rfc0850.txt), and [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The directive is ignored if no valid date/time is specified. By default there is no expiration date for content.
   *
   * If you don't specify this directive, this page may be shown in search results indefinitely. Googlebot will decrease the crawl rate of the URL considerably after the specified date and time.
   */
  unavailableAfter?: string,
};

export default function Robots({
  name = 'robots',
  noIndex,
  noFollow,
  none,
  noArchive,
  noSitelinksSearchBox,
  noSnippet,
  indexIframeEmbedded,
  maxSnippet,
  maxImagePreview,
  maxVideoPreview,
  noTranslate,
  noImageIndex,
  unavailableAfter,
}: RobotsProps) {
  const directives = new Set<string>();

  let hasNoIndex = false;

  if (noIndex) {
    hasNoIndex = true;

    directives.add('noindex');
  }

  if (noFollow) {
    directives.add('nofollow');
  }

  if (none) {
    hasNoIndex = true;

    // use shorter directive
    directives.delete('noindex');
    directives.delete('nofollow');

    directives.add('none');
  }

  if (noArchive) {
    directives.add('noarchive');
  }

  if (noSitelinksSearchBox) {
    directives.add('nositelinkssearchbox');
  }

  if (noSnippet) {
    directives.add('nosnippet');
  }

  if (indexIframeEmbedded && hasNoIndex) {
    directives.add('indexifembedded');
  }

  if (maxSnippet === 0) {
    directives.add('nosnippet');
  } else if (maxSnippet) {
    directives.add(`max-snippet:${maxSnippet | 0}`);
  }

  if (maxImagePreview) {
    directives.add(`max-image-preview:${maxImagePreview}`);
  }

  if (maxVideoPreview) {
    directives.add(`max-video-preview:${maxVideoPreview | 0}`);
  }

  if (noTranslate) {
    directives.add('notranslate');
  }

  if (noImageIndex) {
    directives.add('noimageindex');
  }

  if (unavailableAfter) {
    if (Boolean(Date.parse(unavailableAfter))) {
      directives.add(`unavailable_after: ${unavailableAfter}`);
    }
  }

  return (
    <meta
      name={name}
      content={[...directives].join(',')}
    />
  )
};
