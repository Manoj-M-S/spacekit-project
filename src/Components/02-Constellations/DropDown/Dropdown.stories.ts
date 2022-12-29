import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './src/Dropdown';
import { ButtonVariant } from '../../01-stars/button';
import '../../01-stars/Link/src/Link';

const triggerVariants: ButtonVariant[] = ['primary', 'secondary'];

const paddedMenuWrapper = [
  (Story: any): TemplateResult => html`
    <div class="relative m-12">${Story()}</div>
  `,
];

const configuration = {
  title: 'Stars/Dropdown',
  component: 'space-dropdown',
  argTypes: {
    isDisabled: {
      name: 'is-disabled',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      description:
        'Set whether the dropdown is disabled. When disabled, the dropdown will not open.',
      control: {
        type: 'boolean',
      },
    },
    text: {
      name: 'trigger-text',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description: 'Text of the actual button of the trigger element.',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'trigger-variant',
      table: { category: 'Properties', defaultValue: { summary: 'primary' } },
      description: 'The button style variant to use.',
      options: triggerVariants,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    isDisabled: false,
    text: 'Dropdown Button',
  },
};

const DropdownTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html` <space-dropdown
    ?is-disabled=${args.isDisabled}
    trigger-text="${ifDefined(args.text)}"
  >
  </space-dropdown>`;
};

export const DropdownButtonWithLink = (customArguments = {}) =>
  DropdownTemplate(customArguments);
DropdownButtonWithLink.args = {};
DropdownButtonWithLink.decorators = paddedMenuWrapper;
export default configuration;
