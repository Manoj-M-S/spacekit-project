import { html } from 'lit';
import './src/Sample-01';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/Sample-01',
  component: 'space-sample-01',
} as Meta;

const Template = ({}: any) => {
  return html` <space-sample-01> </space-sample-01> `;
};

export const Default = Template.bind({});

Default.args = {};
