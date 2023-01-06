import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/NotificationBanner';

export default {
  title: 'Constellations/NotificationBanner',
  component: 'space-notification',
  argTypes: {
    background: {
      options: ['primaryDark', 'neutralMedium', 'neutralExtraDark'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['small', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({
  background,
  linkText,
  linkHref,
  title,
  showIcon,
  iconName,
  size,
}: any) => {
  return html`
    <space-notification
      background=${background}
      link-href=${linkHref}
      link-text=${linkText}
      title=${title}
      ?show-icon=${showIcon}
      icon-name=${iconName}
      size=${size}
    >
    </space-notification>
  `;
};

export const Default = Template.bind({});
export const Icon = Template.bind({});

Default.args = {
  background: 'primaryDark',
  linkHref: '#',
  title: 'This page is now available in 12 languages',
  linkText: 'Choose a different language',
  size: 'small',
};

Icon.args = {
  ...Default.args,
  showIcon: true,
  iconName: 'globe',
};
