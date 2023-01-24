import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/SideBar';

export default {
  title: 'Galaxy/Sidebar',
  component: 'space-sidebar',
  argTypes: {
    baseStyle: {
      options: ['simple', 'underline', 'filled'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({
  label,
  baseStyle,
  showDropdown,
  listHref,
  options,
}: any) => {
  return html`
    <space-sidebar
      label=${label}
      base-style=${baseStyle}
      ?show-dropdown=${showDropdown}
      list-href=${listHref}
      .options=${options}
    >
    </space-sidebar>
  `;
};

export const Default = Template.bind({});
export const Underline = Template.bind({});
export const Filled = Template.bind({});

Default.args = {
  label: 'About the topic',
  baseStyle: 'simple',
  showDropdown: false,
  listHref: '#',
  options: [
    {
      listName: 'Link List Item',
      listHref: '#',
    },
    {
      listName: 'Link List Item',
      listHref: '#',
    },
    {
      listName: 'Link List Item',
      listHref: '#',
    },
  ],
};

Underline.args = {
  ...Default.args,
  baseStyle: 'underline',
};

Filled.args = {
  ...Default.args,
  baseStyle: 'filled',
};
