import * as React from 'react';
import {
  type Course,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type CourseJsonLdProps = {
  course: ExtractContextValue<Course>,
};

export default function CourseJsonLd({
  course,
}: CourseJsonLdProps) {
  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...course,
      }}
    />
  );
}
