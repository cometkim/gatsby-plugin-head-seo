import * as React from 'react';
import {
  type Person,
  type Organization,
} from 'schema-dts';

import { type ExtractContextType } from './_utils';
import JsonLd from './_JsonLd';

type SocialProfileJsonLdProps = {
  type: ExtractContextType<Person | Organization>,
  name: string,
  url: URL,
  logo?: URL,
  sameAs?: URL[],
};

/**
 * @see https://developers.google.com/search/docs/appearance/structured-data/logo
 */
export default function SocialProfileJsonLd({
  type,
  name,
  url,
  logo,
  sameAs,
}: SocialProfileJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        '@type': type,
        name,
        url,
        logo,
        sameAs,
      }}
    />
  );
}
