import * as React from 'react';
import {
  type Product,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type ProductJsonLdProps = {
  product: ExtractContextValue<Product>,
};

export default function ProductJsonLd({
  product,
}: ProductJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...product,
      }}
    />
  );
}
