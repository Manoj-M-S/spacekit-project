import { html } from 'lit';
import './src/NavigationBase';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Stars/NavigationBase',
  component: 'space-navigation-base',
} as Meta;

const Template = ({ size, text, colour, iconName }: any) => {
  return html`
    <space-navigation-base size=${size} colour=${colour} icon-name=${iconName}>
      ${text}
    </space-navigation-base>
  `;
};

export const Default = Template.bind({});

Default.args = {
  iconName: 'arrowUpRight',
  text: 'Overview',
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
