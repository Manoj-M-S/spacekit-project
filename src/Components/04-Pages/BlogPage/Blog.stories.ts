import { html } from 'lit';
import './src/BlogPage';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Pages/Blog',
  component: 'space-blogpage',
} as Meta;

const Template = ({}: any) => {
  return html` <space-blogpage> </space-blogpage> `;
};

export const Default = Template.bind({});

Default.args = {};
