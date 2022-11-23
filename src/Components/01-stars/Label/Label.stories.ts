import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { labelSize } from './src/Label';

export default {
  title: 'Stars/Label',
  component: 'space-label',
  argTypes: {
    size: {
      defaultValue: 'lg',
      options: labelSize,
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ label, size, iconName }: any) => {
  return html`
    <space-label
      size=${size}
      label=${label}
      icon-name=${iconName}
    ></space-label>
  `;
};

export const Default = Template.bind({});
export const OnlyIcon = Template.bind({});

Default.args = {
  label: 'Label',
  iconName: 'x',
};

OnlyIcon.args = {
  iconName: 'x',
};
