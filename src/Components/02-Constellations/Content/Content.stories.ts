import { html } from 'lit';
import './src/Content';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Constellations/Content',
  component: 'space-content',
} as Meta;

const Template = ({ options, heading, description }: any) => {
  return html`
    <space-content
      .options=${options}
      heading=${heading}
      description=${description}
    >
    </space-content>
  `;
};

export const Default = Template.bind({});

Default.args = {
  heading: 'Share team inboxes',
  description:
    'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  options: [
    'Leverage automation to move fast',
    'Always give customers a human to chat to',
    'Automate customer support and close leads faster',
  ],
};
