import { html } from 'lit';
import './src/About';
import './src/Type2';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/About',
  component: 'space-about-page',
} as Meta;

const type1 = ({}: any) => {
  return html` <space-about-page> </space-about-page> `;
};

const type2 = ({}: any) => {
  return html` <space-about-page-type2> </space-about-page-type2> `;
};

export const Type1 = type1.bind({});
export const Type2 = type2.bind({});
