import { html } from 'lit';
import './src/About';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/About',
  component: 'space-about-page',
} as Meta;

const Template = ({}: any) => {
  return html` <space-about-page> </space-about-page> `;
};

export const Default = Template.bind({});

Default.args = {};
