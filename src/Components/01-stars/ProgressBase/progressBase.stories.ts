import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/ProgressBase';

export default {
  title: 'Stars/ProgressBase',
  component: 'space-progress-base',
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    stage: {
      options: ['current', 'completed'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ stage, orientation, supportText, text }: any) => {
  return html`
    <space-progress-base
      text=${text}
      stage=${stage}
      orientation=${orientation}
      support-text=${supportText}
    >
    </space-progress-base>
  `;
};

export const Default = Template.bind({});

Default.args = {
  text: 'Your details',
  supportText: 'Please provide your name and email',
};
