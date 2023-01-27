import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/SideBar';
import './src/Category/CatelgoryList';

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

const categoryList = ({
  options,
  baseStyle,
  sidebar,
  sidebarHeading,
  background,
}: any) => {
  return html`
    <space-category-list
      .options=${options}
      base-style=${baseStyle}
      ?sidebar=${sidebar}
      sidebar-heading=${sidebarHeading}
      ?background=${background}
    >
    </space-category-list>
  `;
};

export const Default = Template.bind({});
export const Underline = Template.bind({});
export const Filled = Template.bind({});
export const CategoryList = categoryList.bind({});
export const Sidebar = categoryList.bind({});

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

CategoryList.args = {
  baseStyle: 'filled',
  options: [
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: true,
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
    },
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: false,
      options: [],
    },
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: true,
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
    },
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: false,
      options: [],
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

Sidebar.args = {
  ...Default.agrs,
  sidebar: false,
  sidebarHeading: 'About Us',
  background: false,
  options: [
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: true,
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
    },
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: false,
      options: [],
    },
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: true,
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
    },
    {
      label: 'About The Topic',
      listHref: '#',
      showDropdown: false,
      options: [],
    },
  ],
};
