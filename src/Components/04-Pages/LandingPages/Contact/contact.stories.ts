import { html } from 'lit';
import './src/Contact';
import { Meta } from '@storybook/web-components';

export default {
  title: 'LandingPages/Contact',
  component: 'space-contact-page',
  argTypes: {
    imageAllignent: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
} as Meta;

const Template = ({ imageAllignent }: any) => {
  return html`
    <space-contact-page imageAllignent=${imageAllignent}> </space-contact-page>
  `;
};

export const Default = Template.bind({});

Default.args = {
  imageAllignent: 'left',
};
