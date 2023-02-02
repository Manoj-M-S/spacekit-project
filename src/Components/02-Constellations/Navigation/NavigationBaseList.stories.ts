import { html } from 'lit';
import './src/NavigationList';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Constellations/NavigationBaseList',
  component: 'space-navigation',
} as Meta;

const Template = ({ size, colour, options }: any) => {
  return html`
    <space-navigation-list colour=${colour} size=${size} .options=${options}>
    </space-navigation-list>
  `;
};

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      iconName: 'arrowUpRight',
      text: 'Overview',
      href: '#',
    },
    {
      iconName: 'arrowUpRight',
      text: 'Overview',
      href: '#',
    },
    {
      iconName: 'arrowUpRight',
      text: 'Overview',
      href: '#',
    },
    {
      iconName: 'arrowUpRight',
      text: 'Overview',
      href: '#',
    },
    {
      iconName: 'arrowUpRight',
      text: 'Overview',
      href: '#',
    },
    {
      iconName: 'arrowUpRight',
      text: 'Overview',
      href: '#',
    },
  ],
};

Default.argTypes = {
  colour: {
    defaultValue: 'lightGrey',
    options: ['lightGrey', 'darkGrey', 'primaryDark'],
    control: { type: 'radio' },
  },
  size: {
    defaultValue: 'sm',
    options: ['sm', 'lg'],
    control: { type: 'radio' },
  },
};
