import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: 'gatsby-plugin-dedupe-head',
      options: {
        strategy: 'pick_last',
      },
    },
  ],
};

export default config;
