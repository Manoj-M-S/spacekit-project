import { html } from 'lit';
import './src/Sample-03';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/Sample-03',
  component: 'space-sample-03',
} as Meta;

const Template = ({}: any) => {
  return html` <space-sample-03> </space-sample-03> `;
};

export const Default = Template.bind({});

Default.args = {};
