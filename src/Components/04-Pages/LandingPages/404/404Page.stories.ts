import { html } from 'lit';
import './src/404Page';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/404Page',
  component: 'space-404-page',
} as Meta;

const Template = ({}: any) => {
  return html` <space-404-page> </space-404-page> `;
};

export const Default = Template.bind({});

Default.args = {
  imageAllignent: 'left',
};
