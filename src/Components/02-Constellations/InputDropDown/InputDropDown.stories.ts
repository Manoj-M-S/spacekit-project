import { html } from 'lit';
import './src/InputDropDown';
import { Meta } from '@storybook/web-components';
import { InputDropDownListType } from '../../01-stars/InputDropDownListBase';

export default {
  title: 'Constellations/InputDropDown',
  component: 'space-input-dropdown',
  args: {
    placeholder: 'Select team member',
  },
} as Meta;

const Template = ({
  value,
  label,
  options,
  iconName,
  avatarSrc,
  avatarAlt,
  placeholder,
}: any) => {
  return html`
    <space-input-dropdown
      label=${label}
      value=${value}
      .options=${options}
      icon-name=${iconName}
      avatar-src=${avatarSrc}
      avatar-alt=${avatarAlt}
      placeholder=${placeholder}
    >
    </space-input-dropdown>
  `;
};

export const OnlyText = Template.bind({});
export const IconAndText = Template.bind({});
export const AvatarAndText = Template.bind({});
export const WithLabel = Template.bind({});

const onlyTextOptions: InputDropDownListType[] = [
  {
    id: 1,
    name: 'Clark Kent',
  },
  {
    id: 2,
    name: 'Natasha Romanoff',
  },
  {
    id: 3,
    name: 'Carol Denvers',
  },
  {
    id: 4,
    name: 'Peggy Carter',
  },
  {
    id: 5,
    name: 'Jake Peralta',
  },
  {
    id: 6,
    name: 'Matt Murdock',
  },
  {
    id: 7,
    name: 'Steve Rogers',
  },
];

const options: InputDropDownListType[] = [
  {
    id: 1,
    name: 'Clark Kent',
    iconName: 'user',
  },
  {
    id: 2,
    name: 'Natasha Romanoff',
    iconName: 'user',
  },
  {
    id: 3,
    name: 'Carol Denvers',
    iconName: 'user',
  },
  {
    id: 4,
    name: 'Peggy Carter',
    iconName: 'user',
  },
  {
    id: 5,
    name: 'Jake Peralta',
    iconName: 'user',
  },
  {
    id: 6,
    name: 'Matt Murdock',
    iconName: 'user',
  },
  {
    id: 7,
    name: 'Steve Rogers',
    iconName: 'user',
  },
];

const avatarOptions: InputDropDownListType[] = [
  {
    id: 1,
    name: 'Clark Kent',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Clark Kent',
    isChecked: true,
  },
  {
    id: 2,
    name: 'Natasha Romanoff',
    avatarSrc:
      'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzI2NTc2MjI&force=true&w=1920',
    avatarAlt: 'Natasha Romanoff',
  },
  {
    id: 3,
    name: 'Carol Denvers',
    avatarSrc:
      'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dXNlcnxlbnwwfHx8fDE2NzI2NTc2MjI&force=true&w=1920',
    avatarAlt: 'Carol Denvers',
  },
  {
    id: 4,
    name: 'Peggy Carter',
    avatarSrc:
      'https://unsplash.com/photos/rDEOVtE7vOs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dXNlcnxlbnwwfHx8fDE2NzI2NTc2MjI&force=true&w=1920',
    avatarAlt: 'Peggy Carter',
  },
  {
    id: 5,
    name: 'Jake Peralta',
    avatarSrc:
      'https://unsplash.com/photos/AJIqZDAUD7A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fHVzZXJ8ZW58MHx8fHwxNjcyNjU3ODkz&force=true&w=1920',
    avatarAlt: 'Jake Peralta',
  },
  {
    id: 6,
    name: 'Matt Murdock',
    avatarSrc:
      'https://unsplash.com/photos/DItYlc26zVI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8fHwxNjcyNjU3NjIy&force=true&w=1920',
    avatarAlt: 'Matt Murdock',
  },
  {
    id: 7,
    name: 'Steve Rogers',
    avatarSrc:
      'https://unsplash.com/photos/_H6wpor9mjs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8fHwxNjcyNjU3NjIy&force=true&w=1900',
    avatarAlt: 'Steve Rogers',
  },
];

OnlyText.args = {
  options: onlyTextOptions,
};

IconAndText.args = {
  iconName: 'user',
  options,
};

AvatarAndText.args = {
  avatarSrc:
    'https://st3.depositphotos.com/13159112/17145/v/450/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg',
  avatarAlt: 'Natasha Romanoff',
  options: avatarOptions,
};

WithLabel.args = {
  ...IconAndText.args,
  label: 'Team member',
};
