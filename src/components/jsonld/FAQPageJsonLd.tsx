import * as React from 'react';
import {
  type FAQPage,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type FAQPageJsonLdProps = {
  faq: ExtractContextValue<FAQPage>,
};

export default function FAQPageJsonLd({
  faq,
}: FAQPageJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...faq,
      }}
    />
  );
}
