import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/IconCard/IconCardPattern';
import './src/PriceCard/PriceCardPattern';
import './src/QuickLink/QuickLinkCardPattern';
import './src/FeatureCard/FeatureCardPattern';
import './src/MediaCard/MediaCardPattern';

export default {
  title: 'Galaxy/Cards Pattern',
  component: 'space-patterncards',
  argTypes: {
    type: {
      options: ['simple', 'carousel'],
      control: { type: 'radio' },
      defaultValue: 'carousel',
    },
  },
} as Meta;

const iconCard = ({ alignment, type, options }: any) => html`
  <space-iconcard-pattern
    type=${type}
    alignment=${alignment}
    .options=${options}
  >
  </space-iconcard-pattern>
`;

const pricingcardPattern = ({ type, colour, cardType, options }) => html`
  <space-pricecard-pattern
    type=${type}
    colour=${colour}
    .options=${options}
    card-type=${cardType}
  ></space-pricecard-pattern>
`;

const quickLinkCard = ({ size, color, options, type }) => html`
  <space-quicklink-pattern
    type=${type}
    size=${size}
    color=${color}
    .options=${options}
  ></space-quicklink-pattern>
`;

const featuredCard = ({ size, type, options, orientation }) => html`
  <space-featuredcard-pattern
    size=${size}
    type=${type}
    .options=${options}
    orientation=${orientation}
  >
  </space-featuredcard-pattern>
`;

const mediaCard = ({ size, type, options, orientation }) => html`
  <space-mediacard-pattern
    size=${size}
    type=${type}
    .options=${options}
    orientation=${orientation}
  >
  </space-mediacard-pattern>
`;

export const IconCardPattern = iconCard.bind({});
export const PricingcardPattern = pricingcardPattern.bind({});
export const QuickLinkCardPattern = quickLinkCard.bind({});
export const FeaturedCardPattern = featuredCard.bind({});
export const MediaCardPattern = mediaCard.bind({});

const iconCardOption = {
  iconName: 'zap',
  container: false,
  headText: 'Deliver instant answers',
  ctaHref: '#',
  ctaText: 'Learn More',
  supportText:
    'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
};

IconCardPattern.args = {
  type: 'carousel',
  alignment: 'center',
  options: [
    { ...iconCardOption },
    { ...iconCardOption },
    { ...iconCardOption },
    { ...iconCardOption },
    { ...iconCardOption },
    { ...iconCardOption },
    { ...iconCardOption },
  ],
};

const featuresList = [
  { features: 'Access to basic features' },
  { features: 'Basic reporting and analytics' },
  { features: 'Up to 10 individual users' },
  { features: '20GB individual data each user' },
  { features: 'Basic chat and email support' },
  { features: 'Attend events' },
  { features: 'Automatic updates' },
  { features: 'Backup your account' },
  { features: 'Audit log and notes' },
  { features: 'Feature requests' },
];

const pricingCardOptions = {
  price: '$10/mth',
  iconName: 'zap',
  planName: 'Basic plan',
  buttonText: 'Get Started',
  priceDescription: 'Our most popular plan.',
  featuresList,
};

PricingcardPattern.args = {
  type: 'carousel',
  colour: 'light',
  cardType: 'icon',
  options: [
    {
      ...pricingCardOptions,
    },
    {
      ...pricingCardOptions,
    },
    {
      ...pricingCardOptions,
    },
    {
      ...pricingCardOptions,
    },
    {
      ...pricingCardOptions,
    },
  ],
};

PricingcardPattern.argTypes = {
  cardType: {
    options: ['icon', 'withoutIcon', 'longFeatureList'],
    control: { type: 'radio' },
  },
};

const quickLinkOptions = {
  src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
  alt: 'Improve Outreach to Maximise Conversion',
  ctaText: 'Learn More',
  ctaIconName: 'arrowRight',
  headingText: 'Improve Outreach to Maximise Conversion',
  supportText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
};

QuickLinkCardPattern.args = {
  options: [
    {
      ...quickLinkOptions,
    },
    {
      ...quickLinkOptions,
    },
    {
      ...quickLinkOptions,
    },
    {
      ...quickLinkOptions,
    },
    {
      ...quickLinkOptions,
    },
    {
      ...quickLinkOptions,
    },
  ],
};

QuickLinkCardPattern.argTypes = {
  size: {
    control: { type: 'radio' },
    options: ['sm', 'md', 'lg'],
    defaultValue: 'md',
  },
  color: {
    control: { type: 'radio' },
    options: ['light', 'dark'],
    defaultValue: 'light',
  },
};

const featuredCardOptions = {
  buttonText: 'Learn More',
  iconName: 'arrowUpRight',
  alt: 'Improve Outreach to Maximise Conversion',
  title: 'Improve Outreach to Maximise Conversion',
  src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
};

FeaturedCardPattern.args = {
  orientation: 'horizontal',
  options: [
    { ...featuredCardOptions },
    { ...featuredCardOptions },
    { ...featuredCardOptions },
    { ...featuredCardOptions },
    { ...FeaturedCardPattern },
    { ...featuredCardOptions },
  ],
};

FeaturedCardPattern.argTypes = {
  size: {
    control: { type: 'radio' },
    options: ['sm', 'md', 'lg'],
    defaultValue: 'md',
  },
  orientation: {
    control: { type: 'radio' },
    options: ['horizontal', 'vertical'],
  },
};

const mediaCardOption = {
  mediaFirst: true,
  container: false,
  subHeadingText: 'CASE STUDY',
  headingText:
    'Digital Experience Platforms — Designed for Digital Transformation',
  supportText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ullamcorper laoreet in sagittis, sed aenean felis, a. Varius mauris elerisque lectus tincidunt venenatis placerat velit accumsan.',
  alt: 'media',
  src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
};

MediaCardPattern.args = {
  options: [
    { ...mediaCardOption },
    { ...mediaCardOption },
    { ...mediaCardOption },
    { ...mediaCardOption },
    { ...mediaCardOption },
    { ...mediaCardOption },
  ],
  orientation: 'vertical',
};

MediaCardPattern.argTypes = {
  ...FeaturedCardPattern.argTypes,
};
