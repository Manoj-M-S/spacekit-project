import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { avatarSize } from './src/Avatar';
import { avatarGroupSize } from './src/Group/AvatarGroup';
import { avatarLabelSize } from './src/WithLabel/AvatarWithLabel';

const meta: Meta = {
  title: 'Stars/Avatar',
  argTypes: {
    size: {
      defaultValue: 'md',
      options: avatarSize,
      control: { type: 'select' },
    },
  },
};

export default meta;

const Avatar: Story<any> = ({ size, src, alt, href, iconName, initials }) => {
  return html`
    <space-avatar
      icon-name=${iconName}
      initials=${initials}
      size=${size}
      alt=${alt}
      href=${href}
      src=${src}
    >
    </space-avatar>
  `;
};

const avatarGroup: Story<any> = ({ size, options }) => {
  return html`
    <space-avatar-group .options=${options} size=${size}> </space-avatar-group>
  `;
};

const avatarwithLabel: Story<any> = ({
  size,
  heading,
  subHeading,
  src,
  alt,
}) => {
  return html`
    <space-avatar-label
      size=${size}
      heading=${heading}
      sub-heading=${subHeading}
      src=${src}
      alt=${alt}
    >
    </space-avatar-label>
  `;
};

export const Default = Avatar.bind({});
export const Icon = Avatar.bind({});
export const Initial = Avatar.bind({});
export const AvatarGroup = avatarGroup.bind({});
export const AvatarWithLabel = avatarwithLabel.bind({});

const imageProps = {
  src: 'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY4NTE1MDg0&force=true&w=1920',
  alt: 'user',
};

Default.args = {
  href: '#',
  ...imageProps,
};

Icon.args = {
  iconName: 'user',
};

Initial.args = {
  initials: 'user',
};

AvatarGroup.args = {
  options: Array(14).fill(imageProps),
};

AvatarGroup.argTypes = {
  size: {
    options: avatarGroupSize,
    table: { control: 'select' },
  },
};

AvatarWithLabel.args = {
  size: 'md',
  heading: 'Diana Prince',
  subHeading: 'diana@space.com',
  ...imageProps,
};

AvatarWithLabel.argTypes = {
  size: {
    options: avatarLabelSize,
    table: { control: 'select' },
  },
};
