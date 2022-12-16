import { html } from 'lit';
import './src/MediaCard/MediaCard';
import './src/IconCard/IconCard';
import { Meta } from '@storybook/web-components';
import '../../01-stars/Link';

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

export const MediaCard = mediaCard.bind({});
export const MediaCardAddon = mediaCard.bind({});
export const IconCard = iconCard.bind({});

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
