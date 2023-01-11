import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Banner';

export default {
  title: 'Galaxy/Banner',
  component: 'space-banner',
  argTypes: {
    ctaType: {
      options: ['button', 'email'],
      control: {
        type: 'radio',
      },
    },
    bannerWidth: {
      options: ['full', 'tillMargin'],
      control: {
        type: 'radio',
      },
    },
    ctaImageType: {
      options: ['noImage', 'normal'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({
  heading,
  subHeading,
  ctaType,
  center,
  bannerWidth,
  bannerImageAlt,
  bannerImageSrc,
  showSubHeading,
  primaryBtnText,
  secondaryBtnText,
  ctaImageType,
  showInputIcon,
  inputHintText,
  showHint,
}: any) => {
  return html`
    <space-banner
      heading=${heading}
      sub-heading=${subHeading}
      cta-type=${ctaType}
      ?center=${center}
      banner-width=${bannerWidth}
      banner-image-alt=${bannerImageAlt}
      banner-image-src=${bannerImageSrc}
      ?show-sub-heading=${showSubHeading}
      primary-btn-text=${primaryBtnText}
      secondary-btn-text=${secondaryBtnText}
      cta-image-type=${ctaImageType}
      ?show-input-icon=${showInputIcon}
      ?show-hint=${showHint}
      input-hint-text=${inputHintText}
    >
    </space-banner>
  `;
};

export const Button = Template.bind({});
export const Email = Template.bind({});
export const Image = Template.bind({});

Button.args = {
  heading: 'Join our newsletter',
  subHeading: 'Sign up for the very best tutorials and the latest news.',
  ctaType: 'button',
  center: false,
  bannerWidth: 'full',
  showSubHeading: true,
  primaryBtnText: 'Get started',
  secondaryBtnText: 'Learn more',
  ctaImageType: 'noImage',
  showInputIcon: false,
  shwoHint: false,
  inputHintText: 'We care about your data in our privacy policy',
};

Email.args = {
  ...Button.args,
  ctaType: 'email',
};

Image.args = {
  ...Button.args,
  ctaImageType: 'normal',
  ctaType: 'email',
  bannerImageAlt: 'image',
  bannerImageSrc:
    'https://www.lotame.com/wp-content/uploads/2021/08/About-Team.png',
};
