import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/SectionHeading';

export default {
  title: 'Constellations/SectionHeading',
  component: 'space-section-heading',
} as Meta;

const SectionHeading = ({
  container,
  headingText,
  supportText,
  orientation,
  subHeadingText,
}: any) => html`
  <space-section-heading
    size="default"
    ?container=${container}
    head-text=${headingText}
    support-text=${supportText}
    sub-heading=${subHeadingText}
    orientation=${orientation}
  >
  </space-section-heading>
`;

export const Default = SectionHeading.bind({});

Default.args = {
  subHeadingText: 'Launch faster',
  headingText: 'A Fully integrated digital agency',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
};

Default.argTypes = {
  orientation: {
    defaultValue: 'default',
    options: ['center', 'split', 'default'],
    control: { type: 'radio' },
  },
};
