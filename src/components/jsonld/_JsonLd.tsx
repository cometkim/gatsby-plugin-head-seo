import * as React from 'react';

type JsonLdProps = {
  json: {
    '@context': 'https://schema.org',
    '@type': string,
    [x: string]: any,
  },
}

export default function JsonLd({
  json,
}: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json),
      }}
    />
  );
}
