import { html } from 'lit';
import './src/Icon';
export default {
  title: 'Stars/Icon',
  component: 'space-icon',
};

const Template = ({ iconName }: any) => {
  return html` <space-icon icon-name=${iconName}></space-icon> `;
};

export const Default = Template.bind({});

Default.args = {
  iconName: 'arrowUp',
};
