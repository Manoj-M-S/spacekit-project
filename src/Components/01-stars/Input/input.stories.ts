import { html } from 'lit';
import './src/Input';
import { Meta } from '@storybook/web-components';
import { inputTypes } from './src/Input';

export default {
  title: 'Stars/Input',
  component: 'space-input',
  args: {
    disabled: false,
    placeholder: 'Please Enter your email',
    hideLabel: true,
  },
  argTypes: {
    type: {
      defaultValue: 'text',
      control: { type: 'select' },
      options: inputTypes,
    },
  },
} as Meta;

const Template: Story<any> = ({
  disabled,
  type,
  value,
  placeholder,
  hint,
  label,
  errorHint,
  isError,
  iconName,
  hideLabel,
  tooltipIcon,
}: any) => {
  return html`
    <space-input
      hint=${hint}
      type=${type}
      label=${label}
      value=${value}
      ?is-error=${isError}
      icon-name=${iconName}
      ?disabled=${disabled}
      error-hint=${errorHint}
      ?hide-label=${hideLabel}
      placeholder=${placeholder}
      tooltip-icon=${tooltipIcon}
    >
    </space-input>
  `;
};

export const Default = Template.bind({});
export const Icon = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  label: 'Email',
  hint: 'This is a hint text to help user.',
  value: 'olivia@space.com',
  hideLabel: false,
};

Icon.args = {
  ...Default.args,
  iconName: 'mail',
};

Error.args = {
  ...Icon.args,
  errorHint: 'This is an error message.',
  isError: true,
  tooltipIcon: 'info',
};
