import * as React from 'react';
import {
  type JobPosting,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type JobPostingJsonLdProps = {
  jobPosting: ExtractContextValue<JobPosting>,
};

export default function JobPostingJsonLd({
  jobPosting,
}: JobPostingJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...jobPosting,
      }}
    />
  );
}
