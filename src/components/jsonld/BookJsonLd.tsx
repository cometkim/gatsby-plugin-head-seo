import * as React from 'react';
import {
  type Book,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type BookJsonLdProps = {
  book: ExtractContextValue<Book>,
};

export default function BookJsonLd({
  book,
}: BookJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...book,
      }}
    />
  );
}
