import * as React from 'react';

/**
 * @see https://developers.facebook.com/docs/sharing/webmasters
 */
export type FacebookProps = {
  appId: string,
};

export default function Facebook({ appId }: FacebookProps) {
  return (
    <meta property="fb:app_id" content={appId} />
  );
}
