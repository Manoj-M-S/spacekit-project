import { html } from 'lit';
import './src/Sample-02';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/Sample-02',
  component: 'space-sample-02',
} as Meta;

const Template = ({}: any) => {
  return html` <space-sample-02> </space-sample-02> `;
};

export const Default = Template.bind({});

Default.args = {};
