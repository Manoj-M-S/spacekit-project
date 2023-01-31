import { html } from 'lit';
import './src/TeamSections';
import { Meta } from '@storybook/web-components';
import { teamSectionVariationType } from './src/TeamSections';

export default {
  title: 'Galaxy/TeamSections',
  component: 'space-team-sections',
  args: {
    type: {
      control: { type: 'radio' },
      options: teamSectionVariationType,
    },
  },
} as Meta;

const Template = ({
  type,
  heading,
  options,
  btnTextOne,
  btnTextTwo,
  subHeading,
  description,
}: any) => {
  return html`
    <space-team-sections
      type=${type}
      heading=${heading}
      .options=${options}
      sub-heading=${subHeading}
      description=${description}
      btn-text-one=${btnTextOne}
      btn-text-two=${btnTextTwo}
    >
    </space-team-sections>
  `;
};

export const Simple_01 = Template.bind({});
export const Simple_02 = Template.bind({});
export const Simple_03 = Template.bind({});
export const ImageCard_01 = Template.bind({});
export const ImageCard_02 = Template.bind({});
export const ImageCard_04 = Template.bind({});

const simple01Options = {
  src: 'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dXNlcnxlbnwwfHx8fDE2NzQ0NzY2ODU&force=true&w=1920',
  alt: 'Ranveer Suri',
  role: 'Engineering Manager',
  name: 'Ranveer Suri',
};

Simple_01.args = {
  type: 'simple_01',
  heading: 'Meet our team',
  subHeading: 'We’re hiring!',
  description:
    'Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.',
  options: [
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
    {
      ...simple01Options,
    },
  ],
};

const simple02Options = {
  ...simple01Options,
  description:
    'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
  socialIcons: [
    { href: '#', iconName: 'figma' },
    { href: '#', iconName: 'twitter' },
    { href: '#', iconName: 'linkedin' },
  ],
};

Simple_02.args = {
  ...Simple_01.args,
  type: 'simple_02',
  subHeading: 'Our team',
  heading: 'Some of the people you’ll be working with',
  description: 'We’re a 100% remote team spread all across the world. Join us!',
  options: [
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
  ],
};

Simple_03.args = {
  ...Simple_02.args,
  type: 'simple_03',
  heading: 'Leadership team',
  description:
    'We’re a cross-disciplinary team that loves to create great experiences for our customers.',
  btnTextOne: 'About us',
  btnTextTwo: 'Open positions',
  options: [
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
  ],
};

ImageCard_01.args = {
  ...Simple_01.args,
  type: 'imageCard_01',
  btnTextOne: 'About us',
  btnTextTwo: 'Open positions',
  options: [
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
  ],
};

ImageCard_02.args = {
  ...Simple_02.args,
  type: 'imageCard_02',
  btnTextOne: 'About us',
  btnTextTwo: 'Open positions',
  options: [
    { ...simple01Options },
    { ...simple01Options },
    { ...simple01Options },
    { ...simple01Options },
    { ...simple01Options },
    { ...simple01Options },
    { ...simple01Options },
    { ...simple01Options },
  ],
};

ImageCard_04.args = {
  ...Simple_03.args,
  subHeading: '',
  btnTextOne: 'Read our principles',
  type: 'imageCard_04',
  heading: 'We’re a fast-growing team',
  description:
    'We’re always on the lookout for passionate, dynamic, and talented individuals.',
  options: [
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
    { ...simple02Options },
  ],
};
