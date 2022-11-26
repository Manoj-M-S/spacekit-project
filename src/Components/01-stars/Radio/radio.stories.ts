import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Radio';

export default {
  title: 'Stars/Radio',
  component: 'space-radio',
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

const Template = ({ size, text, checked, disabled, name }: any) => {
  return html`
    <space-radio
      size=${size}
      text=${text}
      ?checked=${checked}
      ?disabled=${disabled}
      name=${name}
    >
    </space-radio>
  `;
};

export const Default = Template.bind({});

Default.args = {
  name: 'radio',
  size: 'md',
  checked: false,
  text: 'Remember me',
};
