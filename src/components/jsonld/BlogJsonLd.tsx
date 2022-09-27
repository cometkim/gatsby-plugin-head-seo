import * as React from 'react';
import {
  type Blog,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type BlogJsonLdProps = {
  blog: ExtractContextValue<Blog>,
};

export default function BlogJsonLd({
  blog,
}: BlogJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...blog,
      }}
    />
  );
}
