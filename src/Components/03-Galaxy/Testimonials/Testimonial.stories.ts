import { html } from 'lit';
import './TestimonyCards/TestimonyCards';
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

export const TestimonialCard = testimonialCard.bind({});

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
