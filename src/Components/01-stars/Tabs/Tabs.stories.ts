import { html } from 'lit';
import './src/Tab';
import { Meta } from '@storybook/web-components';
import { tabVariant } from './src/Tab';

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
  title: 'Stars/Tab',
  component: 'space-tab',
  args: {
    options: TabOptions,
  },
  argTypes: {
    variant: {
      defaultValue: 'underline',
      options: tabVariant,
      control: { type: 'radio' },
    },
    size: {
      defaultValue: 'default',
      options: ['default', 'large'],
      control: { type: 'radio' },
    },
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = ({ variant, size, options, orientation, icon }: any) => {
  return html`
    <space-tab
      size=${size}
      ?icon=${icon}
      variant=${variant}
      .options=${options}
      orientation=${orientation}
    >
    </space-tab>
  `;
};

export const Default = Template.bind({});
export const Container1DarkWithIcon = Template.bind({});
export const Container1LightWithIcon = Template.bind({});
export const Container2 = Template.bind({});

Default.args = {};

Container1DarkWithIcon.args = {
  variant: 'container1Dark',
  icon: true,
};

Container1LightWithIcon.args = {
  variant: 'container1Light',
  icon: true,
};

Container2.args = {
  icon: true,
  variant: 'container2',
};

Container2.argTypes = {
  orientation: {
    table: { disable: true },
  },
};
