import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../../01-stars/DropdownListBase';
import { DropDownListBaseType } from '../../01-stars/DropdownListBase/src/DropDownListBase';
import './src/Dropdown';

export default {
  title: 'Constellations/DropDown',
  component: 'space-dropdown',
} as Meta;

const Template = ({
  type,
  avatarSrc,
  avatarAlt,
  buttonText,
  dropDownList,
  avatarHeading,
  avatarSubHeading,
}: any) => {
  return html`
    <space-dropdown
      type=${type}
      avatar-alt=${avatarAlt}
      avatar-src=${avatarSrc}
      button-text=${buttonText}
    >
      <space-dropdown-list-base
        avatar-alt=${avatarAlt}
        avatar-src=${avatarSrc}
        avatar-heading=${avatarHeading}
        .dropDownOptions=${dropDownList}
        avatar-subheading=${avatarSubHeading}
      ></space-dropdown-list-base>
    </space-dropdown>
  `;
};

export const Avatar = Template.bind({});
export const Button = Template.bind({});

const dropDownList: DropDownListBaseType[] = [
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

Avatar.args = {
  avatarSrc:
    'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzIyOTQ2OTI&force=true&w=1920',
  type: 'avatar',
  avatarAlt: 'Natasha Romanoff',
  avatarHeading: 'Natasha Romanoff',
  avatarSubHeading: 'natasha@space.com',
  dropDownList,
};

Button.args = {
  buttonText: 'Account',
  ...Avatar.args,
  type: 'button',
};
