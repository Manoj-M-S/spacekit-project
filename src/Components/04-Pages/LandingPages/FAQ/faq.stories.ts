import { html } from 'lit';
import './src/Faq';
import './src/FaqType2';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/FAQ',
  component: 'space-faq-page',
} as Meta;

const type1 = ({}: any) => {
  return html` <space-faq-page> </space-faq-page> `;
};

const type2 = ({}: any) => {
  return html` <space-faq-type2> </space-faq-type2> `;
};

export const Type1 = type1.bind({});
export const Type2 = type2.bind({});

Type1.args = {
  imageAllignent: 'left',
};
