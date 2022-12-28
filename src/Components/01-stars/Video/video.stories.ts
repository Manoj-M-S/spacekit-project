import { html } from 'lit';
import './src/Video';
import { Meta } from '@storybook/web-components';
import { videoSize } from './src/Video';

export default {
  title: 'Stars/Video',
  component: 'space-video',
  argTypes: {
    size: {
      options: videoSize,
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template = ({ src, size, control }: any) => {
  return html`
    <space-video src=${src} size=${size} ?control=${control}> </space-video>
  `;
};

export const Default = Template.bind({});

Default.args = {
  src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  size: 'md',
  control: true,
};
