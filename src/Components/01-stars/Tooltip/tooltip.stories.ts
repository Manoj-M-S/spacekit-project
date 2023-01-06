import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import './src/Tooltip';

export default {
  title: 'Stars/Tooltip',
  component: 'space-tooltip',
} as Meta;

const Template = ({ tooltipText, supportiveText }: any) => {
  return html`
    <space-tooltip
      tooltip-text=${tooltipText}
      supportive-text=${supportiveText}
    >
    </space-tooltip>
  `;
};

export const Default = Template.bind({});

Default.args = {
  tooltipText: 'This is a tooltip',
  supportiveText:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
};
