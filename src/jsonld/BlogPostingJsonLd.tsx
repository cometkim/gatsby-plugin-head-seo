import * as React from 'react';
import {
  type BlogPosting,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type BlogPostingJsonLdProps = {
  blogPosting: ExtractContextValue<BlogPosting>,
};

export default function BlogPostingJsonLd({
  blogPosting,
}: BlogPostingJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...blogPosting,
      }}
    />
  );
}
