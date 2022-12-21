import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../../01-stars/Link';
import './src/IconCard/IconCard';
import './src/MediaCard/MediaCard';
import './src/QuickLinkCard/QuickLinkCard';
import './src/FeaturedCard/FeaturedCard';
import './src/PricingCard/PricingCard';

export default {
  title: 'Constellations/Cards',
} as Meta;

const mediaCard = ({
  src,
  alt,
  size,
  addon,
  container,
  mediaFirst,
  headingText,
  supportText,
  orientation,
  subHeadingText,
}: any) => html`
  <space-media-card
    src=${src}
    alt=${alt}
    size=${size}
    ?container=${container}
    ?media-first=${mediaFirst}
    head-text=${headingText}
    support-text=${supportText}
    sub-heading=${subHeadingText}
    orientation=${orientation}
  >
    ${addon}
  </space-media-card>
`;

const iconCard = ({
  ctaText,
  ctaHref,
  headText,
  iconName,
  container,
  alignment,
  supportText,
}) =>
  html`
    <space-icon-card
      cta-href=${ctaHref}
      cta-text=${ctaText}
      head-text=${headText}
      icon-name=${iconName}
      alignment=${alignment}
      ?container=${container}
      support-text=${supportText}
    >
    </space-icon-card>
  `;

const quickLinkCard = ({
  src,
  alt,
  size,
  color,
  ctaText,
  headingText,
  supportText,
  ctaIconName,
}: any) => html`
  <space-quicklink-card
    src=${src}
    alt=${alt}
    size=${size}
    color=${color}
    cta-text=${ctaText}
    cta-icon-name=${ctaIconName}
    head-text=${headingText}
    support-text=${supportText}
  >
  </space-quicklink-card>
`;

const featuredCard = ({
  src,
  alt,
  size,
  label,
  title,
  iconName,
  buttonText,
  orientation,
}) => html`
  <space-featured-card
    src=${src}
    alt=${alt}
    size=${size}
    label=${label}
    title=${title}
    icon-name=${iconName}
    orientation=${orientation}
    button-text=${buttonText}
  ></space-featured-card>
`;

const pricingCard = ({
  price,
  label,
  colour,
  cardType,
  iconName,
  planName,
  headingOne,
  headingTwo,
  buttonText,
  priceOptions,
  priceDescription,
}) =>
  html`
    <space-pricing-card
      label=${label}
      price=${price}
      colour=${colour}
      plan-name=${planName}
      card-type=${cardType}
      icon-name=${iconName}
      button-text=${buttonText}
      heading-one=${headingOne}
      heading-two=${headingTwo}
      .featuresList=${priceOptions}
      price-description=${priceDescription}
    >
    </space-pricing-card>
  `;

export const MediaCard = mediaCard.bind({});
export const MediaCardAddon = mediaCard.bind({});
export const IconCard = iconCard.bind({});
export const QuickLinkCard = quickLinkCard.bind({});
export const FeaturedCard = featuredCard.bind({});
export const PricingCard = pricingCard.bind({});
export const PricingCardLongList = pricingCard.bind({});

MediaCard.args = {
  mediaFirst: true,
  container: false,
  subHeadingText: 'CASE STUDY',
  headingText:
    'Digital Experience Platforms — Designed for Digital Transformation',
  supportText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ullamcorper laoreet in sagittis, sed aenean felis, a. Varius mauris elerisque lectus tincidunt venenatis placerat velit accumsan.',
  alt: 'media',
  src: 'https://s3-alpha-sig.figma.com/img/f572/33f9/82cd74955b172ef92bc6577403f14087?Expires=1672012800&Signature=Tw6WtmdLEYPbFE~q951ESAOKudlCwnpxuHa0DQkTSnBXYcFEsIVhenyQLNsbpFl0wFWL0NhD76XrRpeKxP-A8~9RMHwZEa39gopXVahRiZMVfy7vb4glAFhgD6dkOpBepXeWCiJGDKBXPHQS8p9JzgsxXFNVnK8DwNqt7457kZC2MvRYELD1udTyD2jMJi9qvtGG1YFNzy12thzYZv4NFqpDG9K3tjSTIFaGqUqksJSeDPcE5aic4rzVmdjXF30ba7BTsnMWrkWWadAho3tr5CJxKMXspbWx7MeG72yQmFEcwGze0ScFSIr3tps9r~azBRk2qlOvCIbJ8tAqK4fkEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
};

MediaCard.argTypes = {
  orientation: {
    defaultValue: 'vertical',
    options: ['horizontal', 'vertical'],
    control: { type: 'radio' },
  },
  size: {
    defaultValue: 'md',
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

MediaCardAddon.args = {
  ...MediaCard.args,
  addon: html`
    <space-link class="media_card_addon" iconname="circle" iconaftertext>
      <span>Learn More</span>
    </space-link>
  `,
};

MediaCardAddon.argTypes = {
  ...MediaCard.argTypes,
  addon: {
    table: { disable: true },
  },
};

IconCard.args = {
  iconName: 'zap',
  container: false,
  headText: 'Deliver instant answers',
  ctaHref: '#',
  ctaText: 'Learn More',
  supportText:
    'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
};

IconCard.argTypes = {
  alignment: {
    options: ['left', 'center'],
    defaultValue: 'center',
    control: { type: 'radio' },
  },
};

QuickLinkCard.args = {
  src: 'https://s3-alpha-sig.figma.com/img/2212/efbe/668a2bb364a834fb4e810d31a8ea7d8a?Expires=1672012800&Signature=TsBygF8moiRS7B45AGzr3l1HTd2vzs1S0kkGZRvGyjYxAuN3WxwEjbdzuOp1tFqTMCd8EbDDtYTUKO4dQ7kcjhC4Tz1yfajYr3HSc7Ks4iADgPz9rNbXpOY9psQdWA3uOYaVAgCmSIkgCw5hBSFMd2PlckQG17Ah5Qji8zpshGGCkgqKPUgXFgdOVsBEw7NSxSFKmvuPyfH5vx5mIWpotlsn2xvat3FMVh9g0sz4Dk0815tosb5oOuDj3Ng2TjXeMlAEHCczzYsBpZvmxZXAXAMo~Sl0pwsN8KjnNdeMqQD4go5XxAQYZlDAevSkL1MUX3KeXpZvqXt5NJl7-2~fWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  alt: 'Improve Outreach to Maximise Conversion',
  ctaText: 'Learn More',
  ctaIconName: 'arrowRight',
  headingText: 'Improve Outreach to Maximise Conversion',
  supportText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
};

QuickLinkCard.argTypes = {
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

FeaturedCard.args = {
  size: 'md',
  label: 'Our Mission',
  buttonText: 'Learn More',
  orientation: 'horizontal',
  iconName: 'arrowUpRight',
  alt: 'Improve Outreach to Maximise Conversion',
  title: 'Improve Outreach to Maximise Conversion',
  src: 'https://s3-alpha-sig.figma.com/img/1e32/2632/69a3b29d9c4e33d19b2af6b1d8272aae?Expires=1672617600&Signature=bVOU7hwalAn6lFa0KnF2S0qeP2VmV5y4AeI9AamBawbsk9DAHMaiLTi5LNhARcXjCc~cEzyCemAC8PcTyPm9j9y972sPOj4i7lvNU5ZO-G-uikiS7h1NmmOad2SlebCkZgIZtHnU8QaD-BU3TUvhA-Gq3HEhPl7QqdmEZFyOMFkb2pFKlTUKPVomLD6nz8HzX18P1Gk7u-K1ucf54vRhJZINA-IdGK3CNTbX45-9EqwiJck21HTx4DwMqaT5wyFFpkGuChRu~6pCCF1RhiH-3jWmcAnUErZ2~QFMefEIlCaIivL8SlX0VAeSVYxSCT6vVnQolaM1WbuQRbuyEpatjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
};

FeaturedCard.argTypes = {
  size: {
    control: { type: 'radio' },
    options: ['sm', 'md', 'lg'],
  },
  orientation: {
    control: { type: 'radio' },
    options: ['horizontal', 'vertical'],
  },
};

const priceOptions = [
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

PricingCard.args = {
  price: '$10/mth',
  colour: 'light',
  iconName: 'zap',
  cardType: 'icon',
  planName: 'Basic plan',
  buttonText: 'Get Started',
  priceDescription: 'Our most popular plan.',
  priceOptions,
};

PricingCard.argTypes = {
  cardType: {
    options: ['icon', 'withoutIcon', 'longFeatureList'],
    control: { type: 'radio' },
  },
  colour: {
    options: ['light', 'primary'],
    control: { type: 'radio' },
  },
};
PricingCardLongList.args = {
  price: '$10',
  label: 'Label',
  colour: 'light',
  iconName: 'zap',
  planName: 'Basic plan',
  headingOne: 'FEATURES',
  buttonText: 'Get Started',
  cardType: 'longFeatureList',
  headingTwo: 'Everything in our free plan plus....',
  priceDescription: 'Our most popular plan for small teams.',
  priceOptions,
};

PricingCardLongList.argTypes = {
  ...PricingCard.argTypes,
};
