import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../../01-stars/Link';
import './src/IconCard/IconCard';
import './src/MediaCard/MediaCard';
import './src/QuickLinkCard/QuickLinkCard';

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

export const MediaCard = mediaCard.bind({});
export const MediaCardAddon = mediaCard.bind({});
export const IconCard = iconCard.bind({});
export const QuickLinkCard = quickLinkCard.bind({});

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
