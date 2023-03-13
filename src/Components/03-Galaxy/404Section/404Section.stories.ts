import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/404Section';
import './src/Type3/Type3';

export default {
  title: 'Galaxy/404Section',
  component: 'space-404-section-type1',
} as Meta;

const Template = ({
  title,
  supportText,
  subHeading,
  primaryBtnText,
  secondaryBtnText,
  center,
}: any) => html`
  <space-404-section-type1
    title=${title}
    support-text=${supportText}
    primary-btn-text=${primaryBtnText}
    secondary-btn-text=${secondaryBtnText}
    sub-heading=${subHeading}
    ?center=${center}
  >
  </space-404-section-type1>
`;

const sectionType3 = ({
  title,
  subHeading,
  primaryBtnText,
  secondaryBtnText,
  imageSrc,
  imageAlt,
}: any) => html`
  <space-404-section-type3
    title=${title}
    primary-btn-text=${primaryBtnText}
    secondary-btn-text=${secondaryBtnText}
    sub-heading=${subHeading}
    img-alt=${imageAlt}
    img-src=${imageSrc}
  >
  </space-404-section-type3>
`;

export const SectionType1 = Template.bind({});
export const SectionType2 = Template.bind({});
export const SectionType3 = sectionType3.bind({});
export const SectionType4 = sectionType3.bind({});

SectionType1.args = {
  title: '404 Error',
  subHeading: 'We can’t find that page',
  supportText:
    'Sorry, the page you are looking for does not exist or has been moved.',
  primaryBtnText: 'Take me home',
  secondaryBtnText: 'Go back',
  center: false,
};

SectionType2.args = {
  title: '404 Error',
  subHeading: 'We can’t find that page',
  supportText:
    'Sorry, the page you are looking for does not exist or has been moved.',
  primaryBtnText: 'Take me home',
  secondaryBtnText: 'Go back',
  center: true,
};

SectionType3.args = {
  title: 'Page not found',
  subHeading:
    'Sorry, the page you are looking for doesnt exist or has been moved. Here are some helpful links',
  primaryBtnText: 'Take me home',
  secondaryBtnText: 'Go back',
  imageSrc: 'https://i.ibb.co/7XRdb7f/Image-8.png',
  imageAlt: 'image',
};

SectionType4.args = {
  title: 'Under maintenance',
  subHeading:
    'Sorry, the page you are looking for doesnt exist or has been moved. Try searching our site:',
  primaryBtnText: 'Take me home',
  secondaryBtnText: 'Go back',
  imageSrc: 'https://i.ibb.co/CMbh4Nq/404-illustration.png',
  imageAlt: 'image',
};
