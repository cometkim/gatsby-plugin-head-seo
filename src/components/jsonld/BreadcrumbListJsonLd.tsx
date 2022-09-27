import * as React from 'react';
import {
  type BreadcrumbList,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type BreadcrumbListJsonLdProps = {
  breadcrumbList: ExtractContextValue<BreadcrumbList>,
};

export default function BreadcrumbListJsonLd({
  breadcrumbList,
}: BreadcrumbListJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...breadcrumbList,
      }}
    />
  );
}
