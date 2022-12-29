import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/DropDownListBase';
import { DropDownListBaseType } from './src/DropDownListBase';

export default {
  title: 'Stars/DropDownListBase',
  component: 'space-dropdown-list-base',
  args: {
    showHeader: true,
  },
} as Meta;

const Template = ({
  avatarSrc,
  avatarAlt,
  showHeader,
  headingText,
  avatarHeading,
  dropDownOptions,
  avatarSubHeading,
}: any) => {
  return html`
    <space-dropdown-list-base
      avatar-src=${avatarSrc}
      avatar-alt=${avatarAlt}
      ?show-header=${showHeader}
      header-text=${headingText}
      avatar-heading=${avatarHeading}
      .dropDownOptions=${dropDownOptions}
      avatar-subheading=${avatarSubHeading}
    >
    </space-dropdown-list-base>
  `;
};

export const NoHeader = Template.bind({});
export const AvatarGroupHeader = Template.bind({});
export const HeadingHeader = Template.bind({});
export const Icon = Template.bind({});
export const CheckBox = Template.bind({});

const textOptions: DropDownListBaseType[] = [
  {
    name: 'View profile',
  },
  {
    name: 'Settings',
  },
  {
    name: 'Keyboard shortcuts',
    showBorder: true,
  },
  {
    name: 'Company profile',
  },
  {
    name: 'Team',
  },
  {
    name: 'Invite colleagues',
    showBorder: true,
  },
  {
    name: 'Changelog',
  },
  {
    name: 'Slack Community',
  },
  {
    name: 'Support',
  },
  {
    name: 'API',
    showBorder: true,
  },
  {
    name: 'Log out',
  },
];

const iconOptions: DropDownListBaseType[] = [
  {
    name: 'View profile',
    iconName: 'user',
  },
  {
    name: 'Settings',
    iconName: 'settings',
  },
  {
    name: 'Keyboard shortcuts',
    iconName: 'zap',
    showBorder: true,
  },
  {
    name: 'Company profile',
    iconName: 'home',
  },
  {
    name: 'Team',
    iconName: 'users',
  },
  {
    name: 'Invite colleagues',
    iconName: 'userPlus',
    showBorder: true,
  },
  {
    name: 'Changelog',
    iconName: 'twoLayers',
  },
  {
    name: 'Slack Community',
    iconName: 'slack',
  },
  {
    name: 'Support',
    iconName: 'helpCircle',
  },
  {
    name: 'API',
    iconName: 'code',
    showBorder: true,
  },
  {
    name: 'Log out',
    iconName: 'logout',
  },
];

const checkBoxOptions: DropDownListBaseType[] = [
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
    showBorder: true,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
    showBorder: true,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
    showBorder: true,
  },
  {
    name: 'List item',
    checkbox: true,
    checkBoxChecked: false,
  },
];

NoHeader.args = {
  dropDownOptions: textOptions,
};

AvatarGroupHeader.args = {
  avatarSrc:
    'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzIyOTQ2OTI&force=true&w=1920',
  avatarAlt: 'Natasha Romanoff',
  avatarHeading: 'Natasha Romanoff',
  avatarSubHeading: 'natasha@space.com',
  dropDownOptions: textOptions,
};

HeadingHeader.args = {
  dropDownOptions: textOptions,
  headingText: 'Account menu',
};

Icon.args = {
  ...AvatarGroupHeader.args,
  dropDownOptions: iconOptions,
};

CheckBox.args = {
  ...AvatarGroupHeader.args,
  dropDownOptions: checkBoxOptions,
};
