import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import './src/SectionHeading';

export default {
  title: 'Constellations/SectionHeading',
  component: 'space-section-heading',
  argTypes: {
    alignSide: {
      defaultValue: 'left',
      options: ['left', 'center'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ shortLabel, labelText, paragraph, alignSide }: any) => {
  return html` <space-section-heading alignSide=${alignSide} shortLabel=${shortLabel} labelText=${labelText} paragraph=${paragraph} > </space-section-heading> `;
};

export const Default = Template.bind({});

Default.args = {
    shortLabel: 'Launch faster',
    labelText: 'A Fully integrated digital agency',
    paragraph: 'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services',
    alignSide: 'left',
};
