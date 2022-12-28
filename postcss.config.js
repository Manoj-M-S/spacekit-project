const productionPlugins =
  process.env.NODE_ENV === 'production' ? [require('cssnano')] : [];

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
    require('postcss-discard-comments'),
    ...productionPlugins,
  ],
};
