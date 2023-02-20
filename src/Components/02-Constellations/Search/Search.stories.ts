import { html } from 'lit';
import './src/SearchModal';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Constellations/Search',
  component: 'space-search',
} as Meta;

const Template = ({
  tabOptions,
  cardOptions,
  placeholder,
  suggestionOptions,
}: any) => {
  return html`
    <space-search-modal
      .tabOptions=${tabOptions}
      placeholder=${placeholder}
      .cardOptions=${cardOptions}
      .suggestionOptions=${suggestionOptions}
    >
    </space-search-modal>
  `;
};

export const Default = Template.bind({});

const cardOptions = {
  href: '#',
  size: 'md',
  mediaFirst: true,
  orientation: 'vertical',
  container: false,
  subHeadingText: 'CASE STUDY',
  headingText:
    'Digital Experience Platforms — Designed for Digital Transformation',
  supportText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ullamcorper laoreet in sagittis, sed aenean felis, a. Varius mauris elerisque lectus tincidunt venenatis placerat velit accumsan.',
  alt: 'media',
  src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2Mjk1NTky&force=true&w=2400',
};

Default.args = {
  placeholder: 'Search for anything',
  tabOptions: [
    {
      name: 'All',
      href: '#',
    },
    {
      name: 'Articles',
      href: '#',
    },
    {
      name: 'Event',
      href: '#',
    },
    {
      name: 'Videos',
      href: '#',
    },
  ],
  cardOptions: [
    { ...cardOptions },
    { ...cardOptions },
    { ...cardOptions },
    { ...cardOptions },
    { ...cardOptions },
    { ...cardOptions },
    { ...cardOptions },
    { ...cardOptions },
  ],
  suggestionOptions: [
    { name: 'Products', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Products', href: '#' },
  ],
};
