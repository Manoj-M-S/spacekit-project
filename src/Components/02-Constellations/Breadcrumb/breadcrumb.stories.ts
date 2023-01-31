import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Breadcrumb';

export default {
  title: 'Constellations/Breadcrumb',
  component: 'space-breadcrumb',
  argTypes: {
    breadcrumbStyle: {
      options: ['Collapsed', 'Expanded'],
      control: {
        type: 'radio',
      },
    },
    breadcrumbType: {
      options: ['slash', 'chevron'],
      control: {
        type: 'radio',
      },
    },
    breadcrumbVariant: {
      options: ['noFill', 'primaryFill', 'edgeFill'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({
  homePageText,
  breadcrumbStyle,
  homePageHref,
  options,
  breadcrumbType,
  breadcrumbVariant,
}: any) => {
  return html`
    <space-breadcrumb
      breadcrumb-style=${breadcrumbStyle}
      home-page-text=${homePageText}
      home-page-href=${homePageHref}
      .options=${options}
      breadcrumb-type=${breadcrumbType}
      breadcrumb-variant=${breadcrumbVariant}
    >
    </space-breadcrumb>
  `;
};

export const Default = Template.bind({});
export const NoFill = Template.bind({});
export const PrimaryFill = Template.bind({});
export const EdgeLine = Template.bind({});

Default.args = {
  homePageText: 'Back',
  homePageHref: '#',
  breadcrumbStyle: 'Collapsed',
  breadcrumbType: 'slash',
  breadcrumbVariant: 'noFill',
  options: [
    {
      pageName: 'Parent 1',
      href: '',
    },
    {
      pageName: 'Parent 2',
      href: '',
    },
    {
      pageName: 'Parent 3',
      href: '',
    },
    {
      pageName: 'Parent 4',
      href: '',
    },
    {
      pageName: 'Parent 5',
      href: '',
    },
    {
      pageName: 'Parent 6',
      href: '',
    },
  ],
};

NoFill.args = {
  ...Default.args,
  homePageText: '',
  breadcrumbType: 'slash',
  breadcrumbVariant: 'noFill',
};

PrimaryFill.args = {
  ...Default.args,
  homePageText: '',
  breadcrumbType: 'slash',
  breadcrumbVariant: 'primaryFill',
};

EdgeLine.args = {
  ...Default.args,
  homePageText: '',
  breadcrumbType: 'slash',
  breadcrumbVariant: 'edgeFill',
};
