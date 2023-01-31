import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/SectionWithTextAndMedia';

export default {
  title: 'Galaxy/SectionWithTextAndMedia',
  component: 'space-section-text-media',
  argTypes: {
    imageSide: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const checklistOptions = [
  { features: 'Access to basic features' },
  { features: 'Basic reporting and analytics' },
  { features: 'Up to 10 individual users' },
  { features: '20GB individual data each user' },
  { features: 'Basic chat and email support' },
  { features: 'Attend events' },
];

const Template = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageSide,
  primaryCtaText,
  secondaryCtaText,
  showButtons,
  checklistOptions,
}: any) => {
  return html`
    <space-section-text-media
      title=${title}
      description=${description}
      image-alt=${imageAlt}
      image-src=${imageSrc}
      image-side=${imageSide}
      primary-cta-text=${primaryCtaText}
      secondary-cta-text=${secondaryCtaText}
      ?show-buttons=${showButtons}
      .featuresList=${checklistOptions}
    >
    </space-section-text-media>
  `;
};

export const NoAddOns = Template.bind({});
export const Buttons = Template.bind({});
export const Checklist = Template.bind({});

NoAddOns.args = {
  title:
    'Train your body to crave for healthy body: Health requires healthy food',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in',
  imageSrc:
    'https://www.mensjournal.com/wp-content/uploads/mf/hillsprints-1280.jpg?quality=86&strip=all',
  imageSide: 'left',
  imageAlt: 'image',
};

Buttons.args = {
  ...NoAddOns.args,
  primaryCtaText: 'Button CTA',
  secondaryCtaText: 'Button CTA',
  showButtons: true,
};

Checklist.args = {
  ...NoAddOns.args,
  checklistOptions,
};
