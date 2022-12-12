import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Accordion';

export default {
  title: 'Constellations/Accordion',
  component: 'space-accordion',
  argTypes: {
    iconSide: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({ iconSide, content, headingText, divider }: any) => {
  return html`
    <space-accordion
      ?divider=${divider}
      icon-side=${iconSide}
      heading-text=${headingText}
    >
      ${content}
    </space-accordion>
  `;
};

export const Default = Template.bind({});

Default.args = {
  iconSide: 'left',
  divider: false,
  headingText: 'Is there a free trial available?',
  content:
    'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
};
