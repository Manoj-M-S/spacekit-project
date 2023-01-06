import { html } from 'lit';
import './src/InputDropDownListBase';
import { Meta } from '@storybook/web-components';
import { InputDropDownListType } from './src/InputDropDownListBase';

export default {
  title: 'Stars/InputDropDownListBase',
  component: 'space-input-dropdownlist-base',
} as Meta;

const Template = ({ options, scrollBar }: any) => {
  return html`
    <space-input-dropdownlist-base ?scrollbar=${scrollBar} .options=${options}>
    </space-input-dropdownlist-base>
  `;
};

export const WithOutScrollbar = Template.bind({});
export const WithScrollbar = Template.bind({});
export const AvatarText = Template.bind({});

const options: InputDropDownListType[] = [
  {
    name: 'Clark Kent',
    iconName: 'user',
    isChecked: true,
  },
  {
    name: 'Natasha Romanoff',
    iconName: 'user',
    disabled: true,
    isChecked: true,
  },
  {
    name: 'Carol Denvers',
    iconName: 'user',
  },
  {
    name: 'Peggy Carter',
    iconName: 'user',
  },
  {
    name: 'Jake Peralta',
    iconName: 'user',
  },
  {
    name: 'Matt Murdock',
    iconName: 'user',
  },
  {
    name: 'Steve Rogers',
    iconName: 'user',
  },
];
const avatarOptions: InputDropDownListType[] = [
  {
    name: 'Clark Kent',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Clark Kent',
    isChecked: true,
  },
  {
    name: 'Natasha Romanoff',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Natasha Romanoff',
    disabled: true,
    isChecked: true,
  },
  {
    name: 'Carol Denvers',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Carol Denvers',
  },
  {
    name: 'Peggy Carter',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Peggy Carter',
  },
  {
    name: 'Jake Peralta',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Jake Peralta',
  },
  {
    name: 'Matt Murdock',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Matt Murdock',
  },
  {
    name: 'Steve Rogers',
    avatarSrc:
      'https://unsplash.com/photos/ZHvM3XIOHoE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dXNlcnxlbnwwfHx8fDE2NzI2NDMwMTQ&force=true&w=1920',
    avatarAlt: 'Steve Rogers',
  },
];

WithOutScrollbar.args = {
  options,
};

WithScrollbar.args = {
  scrollBar: true,
  options: [...options, ...options],
};

AvatarText.args = {
  options: avatarOptions,
};
