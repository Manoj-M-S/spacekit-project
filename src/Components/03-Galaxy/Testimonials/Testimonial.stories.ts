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
