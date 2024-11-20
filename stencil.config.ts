import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sg-table',
  buildEs5: true,  // Added to create a ESM folder in dist
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  bundles: [
    { components: ['sg-table', 'sg-content' ] }
  ]
};
