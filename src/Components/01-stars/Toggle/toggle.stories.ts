import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import './src/Toggle';

export default {
  title: 'Stars/Toggle',
  component: 'space-toggle',
} as Meta;

const Template = ({ label, hideLabel, toggleId, checked }: any) => {
  return html`
    <space-toggle
      ?hide-label=${hideLabel}
      toggle-id=${toggleId}
      ?checked=${checked}
      label=${label}
    >
    </space-toggle>
  `;
};

export const Default = Template.bind({});

Default.args = {
  label: 'This is a toggle',
  hideLabel: false,
  toggleId: 'toggle',
  checked: true,
};
