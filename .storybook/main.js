module.exports = {
  core: {
    builder: {
      name: 'webpack5',
    },
  },
  features: { storyStoreV7: true },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/web-components',
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('postcss-import'),
                require('tailwindcss')('./tailwind.config.js'),
                require('postcss-nested'),
                require('postcss-custom-properties'),
                require('autoprefixer'),
                require('postcss-discard-comments'),
              ],
            },
            sourceMap: true,
          },
        },
      ],
    });

    return config;
  },
};
