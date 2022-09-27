import * as React from 'react';
import {
  type LocalBusiness,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type LocalBusinessJsonLdProps = {
  localBusiness: ExtractContextValue<LocalBusiness>,
};

export default function LocalBusinessJsonLd({
  localBusiness,
}: LocalBusinessJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...localBusiness,
      }}
    />
  );
}
