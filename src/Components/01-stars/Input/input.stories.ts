import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { inputTypes } from './src/Input';
import './src/TextArea/TextArea';

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

const textArea: Story<any> = ({
  disabled,
  label,
  hideLabel,
  hint,
  placeholder,
  isError,
  errorHint,
  value,
}) => html`
  <space-textarea
    hint=${hint}
    label=${label}
    value=${value}
    ?is-error=${isError}
    ?disabled=${disabled}
    error-hint=${errorHint}
    ?hide-label=${hideLabel}
    placeholder=${placeholder}
  ></space-textarea>
`;

export const Default = Template.bind({});
export const Icon = Template.bind({});
export const Error = Template.bind({});
export const TextArea = textArea.bind({});

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

TextArea.args = {
  ...Default.args,
  ...Error.args,
  label: 'Description',
  placeholder: 'Enter a description...',
  value: 'A little about the company and the team that you’ll be working',
  isError: false,
};

TextArea.argTypes = {
  type: {
    table: { disable: true },
  },
  tooltipIcon: {
    table: { disable: true },
  },
  iconName: {
    table: { disable: true },
  },
};
