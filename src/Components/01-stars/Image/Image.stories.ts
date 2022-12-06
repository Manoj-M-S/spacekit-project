import { html } from 'lit';
import './src/Image';
import { Meta } from '@storybook/web-components';
import './Image.css';

export default {
  title: 'Stars/Image',
  component: 'space-image',
  args: {
    src: 'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcwMzA5NjYx&force=true&w=640',
    alt: 'John Doe',
  },
} as Meta;

const Template = ({ src, alt }: any) => {
  return html`
    <space-image class="image" src=${src} alt=${alt}> </space-image>
  `;
};

export const Default = Template.bind({});

Default.args = {};
