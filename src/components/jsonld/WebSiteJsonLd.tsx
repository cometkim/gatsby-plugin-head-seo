import * as React from 'react';
import {
  type WebSite,
} from 'schema-dts';

import {
  type ExtractContextValue,
} from './_utils';
import JsonLd from './_JsonLd';

type SitelinksSearchBoxOptions = {
  urlTemplate: string,
  searchTerm: string,
};

type WebSiteJsonLdProps = {
  website: ExtractContextValue<WebSite>,
  sitelinksSearchBox?: SitelinksSearchBoxOptions,
};

export default function WebSiteJsonLd({
  website,
  sitelinksSearchBox,
}: WebSiteJsonLdProps) {
  const json: any = {
    ...website,
  };

  if (sitelinksSearchBox) {
    const searchAction = {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        urlTemplate: sitelinksSearchBox.urlTemplate,
      },
      'query-input': `required name=${sitelinksSearchBox.searchTerm}`,
    };
    if (Array.isArray(json.potentialAction)) {
      json.potentialAction = [
        ...json.potentialAction,
        searchAction,
      ];
    } else if (json.potentialAction) {
      json.potentialAction = [
        json.potentialAction,
        searchAction,
      ];
    } else {
      json.potentialAction = searchAction;
    }
  }

  return (
    <JsonLd
      json={{
        '@context': 'https://schema.org',
        ...website,
      }}
    />
  );
}
