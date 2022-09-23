import { type ObjectType } from './utils';

export type TwitterCardImage = {
  /**
   * A URL to a unique image representing the content of the page.
   *
   * @remarks
   *
   * You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
   */
  url: URL,

  /**
   * A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.
   */
  alt?: string,
}

export type TwitterCardType = (
  | ObjectType<'summary', TwitterSummaryCardObject>
  | ObjectType<'summary_large_image', TwitterSummaryCardObject>
  | ObjectType<'app', TwitterAppCardObject>
  | ObjectType<'player', TwitterPlayerCardObject>
);

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
 */
export type TwitterSummaryCardObject = {
  /**
   * `@username` for the website used in the card footer.
   */
  site?: string,

  /**
   * A concise title for the related content.
   *
   * @remarks
   *
   * Platform specific behaviors:
   *
   * - iOS, Android: Truncated to two lines in timeline and expanded Tweet
   * - Web: Truncated to one line in timeline and expanded Tweet
   */
  title: string,

  /**
   * A description that concisely summarizes the content as appropriate for presentation within a Tweet.
   *
   * @remarks
   *
   * You should not re-use the title as the description or use this field to describe the general services provided by the website.
   *
   * Platform specific behaviors:
   *
   * - iOS, Android: Not displayed
   * - Web: Truncated to three lines in timeline and expanded Tweet
   */
  description?: string,

  /**
   * `@username` for the content creator / author.
   */
  creator?: string,

  /**
   * A URL to a unique image representing the content of the page.
   *
   * @remarks
   *
   * You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages.
   *
   * Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
   */
  image?: TwitterCardImage,
};

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card
 */
export type TwitterAppCardObject = {
  /**
   * `@username` for the website used in the card footer.
   */
  site: string,

  /**
   * A description of the content in a maximum of 200 characters
   */
  description?: string,

  googleplay?: {
    /**
     * String value, and should be the numeric representation of your app ID in Google Play (.i.e. `"com.android.app"`)
     */
    id: string,

    /**
     * Your app’s custom URL scheme
     */
    url?: URL,
  },

  iphone?: {
    /**
     * String value, should be the numeric representation of your app ID in the App Store (.i.e. `"307234931"`)
     */
    id: string,

    /**
     * Your app’s custom URL scheme
     */
    url?: URL,
  },

  ipad?: {
    /**
     * String value, should be the numeric representation of your app ID in the App Store (.i.e. `"307234931"`)
     */
    id: string,

    /**
     * Your app’s custom URL scheme
     */
    url?: URL,
  },
  /**
   * The country code for App Store.
   *
   * @remarks
   *
   * If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application.
   */
  country?: string,
};

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card
 */
export type TwitterPlayerCardObject = {
  /**
   * The Twitter handle (.i.e `"@username"`) for the site.
   */
  site: string,

  /**
   * The title of your content as it should appear in the card
   */
  title: string,

  /**
   * A description of the content in a maximum of 200 characters
   */
  description?: string,

  /**
   * HTTPS URL to iFrame player.
   *
   * @remarks
   *
   * This must be a HTTPS URL which does not generate active mixed content warnings in a web browser. The audio or video player must not require plugins such as Adobe Flash.
   */
  url: URL,

  /**
   * Width of iFrame specified in `twitter:player` in pixels
   */
  width: number,

  /**
   * Height of iFrame specified in `twitter:player` in pixels
   */
  height: number,

  /**
   * Image to be displayed in place of the player on platforms that don’t support iFrames or inline players.
   *
   * @remarks
   *
   * You should make this image the same dimensions as your player. Images with fewer than 68,600 pixels (a 262x262 square image, or a 350x196 16:9 image) will cause the player card not to render. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
   */
  image: TwitterCardImage,
};
