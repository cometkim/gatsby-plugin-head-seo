import { type ObjectType } from './utils';

export type OgType = (
  | ObjectType<'article', OpenGraphArticleObject>
  | ObjectType<'book', OpenGraphBookObject>
  | ObjectType<'profile', OpenGraphProfileObject>
  | ObjectType<'website'>
  | ObjectType<'music.song'>
  | ObjectType<'music.album'>
  | ObjectType<'music.playlist'>
  | ObjectType<'music.radio_station'>
  | ObjectType<'video.movie'>
  | ObjectType<'video.episode'>
  | ObjectType<'video.tv_show'>
  | ObjectType<'video.other'>
);

export type OpenGraphBasicMetadata = {
  /**
   * The canonical URL of your object that will be used as its permanent ID in the graph.
   */
  url: URL,

  /**
   * The title of your object as it should appear within the graph.
   */
  title: string,

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

export type OpenGraphImage = {
  url: URL,

  /**
   * A MIME type for this image.
   */
  type?: string,

  /**
   * The number of pixels wide.
   */
  width?: number,

  /**
   * The number of pixels high.
   */
  height?: number,

  /**
   * A description of what is in the image (not a caption). If the page specifies an `og:image` it should specify `og:image:alt`.
   */
  alt?: string,
};

export type OpenGraphVideo = {
  url: URL,

  /**
   * A MIME type for this image.
   */
  type?: string,

  /**
   * The number of pixels wide.
   */
  width?: number,

  /**
   * The number of pixels high.
   */
  height?: number,

  /**
   * A description of what is in the video (not a caption). If the page specifies an `og:video` it should specify `og:video:alt`.
   */
  alt?: string,
};

// TODO?
export type OpenGraphSongObject = {
  duration: number,
};

// TODO?
export type OpenGraphAlbumObject = {
};

// TODO?
export type OpenGraphPlaylistObject = {
};

// TODO?
export type OpenGraphRadioStationObject = {
};

/**
 * @see https://ogp.me/ns/article#
 */
export type OpenGraphArticleObject = {
  /**
   * When the article was first published.
   */
  publishedTime?: Date,

  /**
   * When the article was last changed.
   */
  modifiedTime?: Date,

  /**
   * When the article is out of date after.
   */
  expirationTime?: Date,

  /**
   * Writers of the article.
   */
  author?: OpenGraphProfileObject[],

  /**
   * A high-level section name. E.g. Technology
   */
  section?: string,

  /**
   * Tag words associated with this article.
   */
  tag?: string[],
};

/**
 * @see https://ogp.me/ns/book#
 */
export type OpenGraphBookObject = {
  /**
   * The [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number)
   */
  isbn: string,

  /**
   * Who wrote this book.
   */
  author?: OpenGraphProfileObject[],

  /**
   * The date the book was released.
   */
  releaseDate?: Date,

  /**
   * Tag words associated with this book.
   */
  tag?: string[],
};

/**
 * @see https://ogp.me/ns/profile#
 */
export type OpenGraphProfileObject = {
  /**
   * A short unique string to identify them.
   */
  username?: string,

  /**
   * A name normally given to an individual by a parent or self-chosen.
   */
  firstName?: string,

  /**
   * A name inherited from a family or marriage and by which the individual is commonly known.
   */
  lastName?: string,

  /**
   * Their gender.
   */
  gender?: 'male' | 'female',
};
