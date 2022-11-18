import { html } from 'lit';
import { buttonSize } from './src/Button';

export default {
  title: 'Stars/Button',
  component: 'space-button',
  args: {
    label: 'Button CTA',
    disabled: false,
    iconName: 'user',
    iconAfterText: false,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: buttonSize,
    },
    buttonVariant: {
      defaultValue: 'primary',
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
};

const Template = ({
  label,
  size,
  buttonVariant,
  disabled,
  buttonUrl,
  iconName,
  iconAfterText,
}: any) => {
  return html`
    <space-button
      iconname=${iconName}
      ?iconaftertext=${iconAfterText}
      button-variant=${buttonVariant}
      ?is-disabled=${disabled}
      button-size="${size}"
      button-url=${buttonUrl}
      >${label}</space-button
    >
  `;
};

export const Large: any = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Small: any = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Primary: any = Template.bind({});
Primary.args = {
  size: 'sm',
  buttonVariant: 'primary',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  size: 'sm',
  buttonVariant: 'secondary',
};

export const Link: any = Template.bind({});
Link.args = {
  size: 'md',
  buttonUrl: '#',
};

Link.argTypes = {
  buttonVariant: { table: { disable: true } },
};
