import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Stats';

export default {
  title: 'Constellations/Stats',
  component: 'space-stats',
} as Meta;

const Stats = ({
  container,
  headingText,
  supportText,
  orientation,
  subHeading,
  action,
  isBorder,
  ctaHref,
}: any) => html`
  <space-stats
    cta-href=${ctaHref}
    ?action=${action}
    sub-heading=${subHeading}
    size="default"
    ?container=${container}
    heading-text=${headingText}
    support-text=${supportText}
    orientation=${orientation}
    ?isBorder=${isBorder}
  >
  </space-stats>
`;

export const Default = Stats.bind({});

Default.args = {
  headingText: '400+',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
  subHeading: 'Projects completed',
  ctaHref: 'https://qed42.com',
};

Default.argTypes = {
  orientation: {
    defaultValue: 'default',
    options: ['center', 'default'],
    control: { type: 'radio' },
  },
  isBorder: {
    defaultValue: false,
    control: { type: 'boolean' },
  },
  container: {
    defaultValue: false,
    control: { type: 'boolean' },
  },
  action: {
    defaultValue: false,
    control: { type: 'boolean' },
  },
};
