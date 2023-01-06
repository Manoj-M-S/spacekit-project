import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { color } from './src/Navigation';

export default {
  title: 'Constellations/Navigation',
  component: 'space-navigation',
  argTypes: {
    navigationColor: {
      options: color,
      control: {
        type: 'select',
      },
    },
    navigationSize: {
      options: ['small', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({
  navigationSize,
  navigationColor,
  options,
  heading,
  navIcon,
}: any) => {
  return html`
    <space-navigation
      navigation-size=${navigationSize}
      navigation-color=${navigationColor}
      .options=${options}
      heading=${heading}
      ?nav-icon=${navIcon}
    >
    </space-navigation>
  `;
};

export const Default = Template.bind({});
export const Icon = Template.bind({});

Default.args = {
  heading: 'Products',
  navigationSize: 'small',
  navigationColor: 'whiteBackground',
  options: [
    {
      navigationText: 'Overview',
      navigationHref: '#',
    },
    {
      navigationText: 'Overview',
      navigationHref: '#',
    },
    {
      navigationText: 'Overview',
      navigationHref: '#',
    },
  ],
};

Icon.args = {
  ...Default.args,
  navIcon: true,
};
