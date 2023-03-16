import { html } from 'lit';
import './src/Faq';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/FAQ',
  component: 'space-faq-page',
  argTypes: {
    imageAllignent: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
} as Meta;

const Template = ({ imageAllignent }: any) => {
  return html`
    <space-faq-page imageAllignent=${imageAllignent}> </space-faq-page>
  `;
};

export const Default = Template.bind({});

Default.args = {
  imageAllignent: 'left',
};
