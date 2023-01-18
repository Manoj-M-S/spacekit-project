import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import './src/AccordionPattern';

export default {
  title: 'Galaxy/AccordionPattern',
  component: 'space-accordion-pattern',
  argTypes: {
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({ options, iconPosition }: any) => {
  return html`
    <space-accordion-pattern .options=${options} icon-side=${iconPosition}>
    </space-accordion-pattern>
  `;
};

export const Default = Template.bind({});

Default.args = {
  iconPosition: 'right',
  options: [
    {
      headingText: 'Is there a free trial available?',
      content:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
      divider: true,
    },
    {
      headingText: 'Is there a free trial available?',
      content:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
      divider: true,
    },
    {
      headingText: 'Is there a free trial available?',
      content:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
      divider: true,
    },
    {
      headingText: 'Is there a free trial available?',
      content:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
      divider: false,
    },
  ],
};
