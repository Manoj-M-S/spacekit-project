import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Checkbox';

export default {
  title: 'Stars/CheckBox',
  args: {
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ size, text, checked, disabled }: any) => {
  return html`
    <space-checkbox
      size=${size}
      text=${text}
      ?checked=${checked}
      ?disabled=${disabled}
    >
    </space-checkbox>
  `;
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  size: 'md',
  checked: false,
  text: 'Remember me',
};
