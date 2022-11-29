import { html } from 'lit';
import './src/Progress';
import { Meta, Story } from '@storybook/web-components';
import { ProgressOption } from './src/Progress';

export default {
  title: 'Constellations/Progress',
  component: 'space-progress',
} as Meta;

const Template = ({ options }: any) => {
  return html` <space-progress .options=${options}> </space-progress> `;
};

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      stage: 'completed',
      text: 'Your details',
      supportText: 'Please provide your name and email',
    },
    {
      stage: 'completed',
      text: 'Your details',
      supportText: 'Please provide your name and email',
    },
    {
      stage: 'current',
      text: 'Your details',
      supportText: 'Please provide your name and email',
    },
    {
      text: 'Your details',
      supportText: 'Please provide your name and email',
    },
  ],
};
