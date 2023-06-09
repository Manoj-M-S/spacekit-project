import { html } from 'lit';
import './TestimonyCards/TestimonyCards';
import './TestimonyCarousel/TestimonyCarousel';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Galaxy/Testimonial',
  component: 'space-testimonial',
} as Meta;

const testimonialCard = ({ type, size, options }: any) => {
  return html`
    <space-testimonial-card type=${type} size=${size} .options=${options}>
    </space-testimonial-card>
  `;
};

const testimonialCarousal = ({ type, options }: any) => {
  return html`
    <space-testimony-carousel type=${type} .options=${options}>
    </space-testimony-carousel>
  `;
};

export const TestimonialCard = testimonialCard.bind({});
export const largeAvatar = testimonialCarousal.bind({});
export const CenterAligned = testimonialCarousal.bind({});
export const Simple = testimonialCarousal.bind({});
export const WithCompanyLogo = testimonialCarousal.bind({});

const testimonialCardOption = {
  name: 'Alicia King',
  destination: 'Sales Manager',
  type: 'testimonyAvatar',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ante est, est nibh eget. Eget massa mauris morbi tellus vel.',
  avatarSrc:
    'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NTYxMzc&force=true&w=2400',
  avatarAlt: 'Alicia King',
};

TestimonialCard.args = {
  size: 'sm',
  type: 'carousal',
  options: [
    { ...testimonialCardOption },
    { ...testimonialCardOption },
    { ...testimonialCardOption },
    { ...testimonialCardOption },
    { ...testimonialCardOption },
    { ...testimonialCardOption },
  ],
};

TestimonialCard.argTypes = {
  size: {
    control: { type: 'radio' },
    options: ['sm', 'md'],
  },
  type: {
    control: { type: 'radio' },
    options: ['simple', 'carousal'],
  },
};

largeAvatar.args = {
  type: 'largeAvatar',
  options: [
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      iconName: 'activity',
      description:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ultricies orci pharetra, vulputate congue blandit ultricies. Feugiat consectetur pretium adipiscing molestie diam, viverra ut pharetra. Cursus nunc porttitor risus vitae, eu habitant. Venenatis id et sed tincidunt mollis. Adipiscing facilisis nisl, ornare in cras ultricies facilisis. Vulputate quisque sit dignissim enim.”',
    },
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      iconName: 'activity',
      name: 'Alexander David',
      description:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ultricies orci pharetra, vulputate congue blandit ultricies. Feugiat consectetur pretium adipiscing molestie diam, viverra ut pharetra. Cursus nunc porttitor risus vitae, eu habitant. Venenatis id et sed tincidunt mollis. Adipiscing facilisis nisl, ornare in cras ultricies facilisis. Vulputate quisque sit dignissim enim.”',
    },
  ],
};

largeAvatar.argtypes = {
  type: {
    control: { type: 'radio' },
    options: ['largeAvatar', 'centerAligned', 'simple', 'withCompanyLogo'],
  },
};

CenterAligned.args = {
  type: 'centerAligned',
  options: [
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      designation: 'Head of Digital Transformation, Grofers',
      description:
        'The best vendors are the ones who work with you as partners. They work towards your success as their success. We found such a partner in QED42. We are very proud to be working alongside a team of experts who understand all aspects of our products and execute with quality results.',
    },
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      designation: 'Head of Digital Transformation, Grofers',
      description:
        'The best vendors are the ones who work with you as partners. They work towards your success as their success. We found such a partner in QED42. We are very proud to be working alongside a team of experts who understand all aspects of our products and execute with quality results.',
    },
  ],
};

CenterAligned.argTypes = { ...largeAvatar.argTypes };

Simple.args = {
  type: 'simple',
  options: [
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      designation: 'Head of Digital Transformation, Grofers',
      description:
        'The best vendors are the ones who work with you as partners. They work towards your success as their success. We found such a partner in QED42. We are very proud to be working alongside a team of experts who understand all aspects of our products and execute with quality results.',
    },
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      designation: 'Head of Digital Transformation, Grofers',
      description:
        'The best vendors are the ones who work with you as partners. They work towards your success as their success. We found such a partner in QED42. We are very proud to be working alongside a team of experts who understand all aspects of our products and execute with quality results.',
    },
  ],
};

WithCompanyLogo.args = {
  type: 'withCompanyLogo',
  options: [
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      designation: 'Head of Digital Transformation, Grofers',
      logoSrc: 'https://i.ibb.co/wMY9d3G/logo.png',
      logoAlt: 'alt',
      description:
        'Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!',
    },
    {
      src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
      alt: 'Alexander David',
      name: 'Alexander David',
      designation: 'Head of Digital Transformation, Grofers',
      logoSrc: 'https://i.ibb.co/wMY9d3G/logo.png',
      logoAlt: 'alt',
      description:
        'Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!',
    },
  ],
};

Simple.argTypes = { ...largeAvatar.argTypes };

WithCompanyLogo.argTypes = { ...largeAvatar.argTypes };
