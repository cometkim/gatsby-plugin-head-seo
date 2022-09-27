import * as React from 'react';
import {
  type Article,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type ArticleJsonLdProps = {
  article: ExtractContextValue<Article>,
};

export default function ArticleJsonLd({
  article,
}: ArticleJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...article,
      }}
    />
  );
}
