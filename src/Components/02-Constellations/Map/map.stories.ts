import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Map';

export default {
  title: 'Constellations/Map',
  component: 'space-map',
} as Meta;

const Template = ({ mapSource }: any) => {
  return html` <space-map map-source=${mapSource}> </space-map> `;
};

export const Default = Template.bind({});

Default.args = {
  mapSource:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5096084154!2d144.49268362290942!3d-37.97015407090076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1672663059428!5m2!1sen!2sin',
};
