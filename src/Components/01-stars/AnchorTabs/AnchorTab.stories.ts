import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/AnchorTab';

const TabOptions = [
  {
    name: 'Item1',
    iconName: 'circle',
  },
  {
    name: 'Item2',
    iconName: 'circle',
  },
  {
    name: 'Item3',
    iconName: 'circle',
  },
  {
    name: 'Item4',
    iconName: 'circle',
  },
  {
    name: 'Item5',
    iconName: 'circle',
  },
];

export default {
  title: 'Stars/AnchorTab',
  component: 'space-',
  args: {
    options: TabOptions,
  },
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ options, orientation }: any) => {
  return html`
    <space-anchortab .options=${options} orientation=${orientation}>
    </space-anchortab>
  `;
};

export const Default = Template.bind({});

Default.args = {};
