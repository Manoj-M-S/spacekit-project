import { html } from 'lit';
import './src/LogoGrids';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Constellations/LogoGrid',
  component: 'space-logo-grid',
  argTypes: {
    type: {
      options: ['carousel', 'logo_4', 'logo_5', 'logo_6'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ title, description, options, type }: any) => {
  return html`
    <space-logo-grids
      type=${type}
      title=${title}
      .options=${options}
      description=${description}
    >
    </space-logo-grids>
  `;
};

export const Logo_4 = Template.bind({});
export const Logo_5 = Template.bind({});
export const Logo_6 = Template.bind({});
export const Carousel = Template.bind({});

const logoGridOption = {
  src: ' https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg',
  alt: 'Logo Name',
};

Logo_4.args = {
  type: 'logo_4',
  title: 'A Fully integrated digital agency',
  description:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services',
  options: Array(12).fill({ ...logoGridOption }),
};

Logo_5.args = {
  ...Logo_4.args,
  type: 'logo_5',
  options: Array(10).fill({ ...logoGridOption }),
};

Logo_6.args = {
  ...Logo_4.args,
  type: 'logo_6',
};

Carousel.args = {
  ...Logo_4.args,
  type: 'carousel',
};
