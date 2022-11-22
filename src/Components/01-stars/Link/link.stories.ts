import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { buttonSize } from '../button';
import './src/Link';

export default {
  title: 'Stars/Link',
  component: 'space-link',
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: buttonSize,
    },
  },
} as Meta;

const Template = ({ size, text, iconName, href, disabled }: any) => {
  return html`
    <space-link
      ?disabled=${disabled}
      link-size=${size}
      iconname=${iconName}
      href=${href}
      >${text}</space-link
    >
  `;
};

export const Default = Template.bind({});

Default.args = {
  size: 'md',
  text: 'Button CTA',
  iconName: 'alertCircle',
  href: '#',
  disabled: false,
};
