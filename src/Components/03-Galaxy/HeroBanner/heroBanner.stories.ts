import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Style1/Style1';
import './src/Style2/Style2';
import './src/Style3/Style3';
import './src/Style4/Style4';
import './src/Style5/Style5';
import './src/Style6/Style6';
import './src/Style7/Style7';
import './src/Style8/Style8';
import './src/Style9/Style9';

export default {
  title: 'Galaxy/HeroBanner',
  component: 'space-herobanner-style1',
} as Meta;

const style2 = ({
  title,
  supportiveText,
  btnText,
  statsOption,
  inputPlaceholder,
}: any) => {
  return html`
    <space-herobanner-style2
      title=${title}
      supportive-text=${supportiveText}
      btn-text=${btnText}
      .statsOption=${statsOption}
      input-placeholder=${inputPlaceholder}
    >
    </space-herobanner-style2>
  `;
};

const Template = ({
  title,
  supportiveText,
  btnText,
  inputPlaceholder,
  statsOption,
}: any) => {
  return html`
    <space-herobanner-style1
      title=${title}
      supportive-text=${supportiveText}
      btn-text=${btnText}
      input-placeholder=${inputPlaceholder}
      .statsOption=${statsOption}
    >
    </space-herobanner-style1>
  `;
};

const style3 = ({
  title,
  supportiveText,
  description,
  imageSrc,
  imageAlt,
}: any) => {
  return html`
    <space-herobanner-style3
      title=${title}
      supportive-text=${supportiveText}
      image-alt=${imageAlt}
      description=${description}
      image-src=${imageSrc}
    >
    </space-herobanner-style3>
  `;
};

const style4 = ({
  title,
  supportiveText,
  badgeGroup,
  imageSrc,
  imageAlt,
  primaryBtnText,
  secondaryBtnText,
  label,
  badgeLinkText,
  badgeLinkHref,
}: any) => {
  return html`
    <space-herobanner-style4
      title=${title}
      supportive-text=${supportiveText}
      image-alt=${imageAlt}
      primary-btn-text=${primaryBtnText}
      secondary-btn-text=${secondaryBtnText}
      image-src=${imageSrc}
      ?badge-group=${badgeGroup}
      label=${label}
      badge-link-text=${badgeLinkText}
      badge-link-href=${badgeLinkHref}
    >
    </space-herobanner-style4>
  `;
};

const style5 = ({
  title,
  supportiveText,
  rightPadding,
  imageSrc,
  imageAlt,
  primaryBtnText,
  secondaryBtnText,
}: any) => {
  return html`
    <space-herobanner-style5
      title=${title}
      supportive-text=${supportiveText}
      image-alt=${imageAlt}
      primary-btn-text=${primaryBtnText}
      secondary-btn-text=${secondaryBtnText}
      image-src=${imageSrc}
      ?right-padding=${rightPadding}
    >
    </space-herobanner-style5>
  `;
};

const style6 = ({ title, supportiveText, imageSrc, imageAlt }: any) => {
  return html`
    <space-herobanner-style6
      title=${title}
      supportive-text=${supportiveText}
      image-alt=${imageAlt}
      image-src=${imageSrc}
    >
    </space-herobanner-style6>
  `;
};

const style7 = ({ title, supportiveText, description, btnText }: any) => {
  return html`
    <space-herobanner-style7
      title=${title}
      supportive-text=${supportiveText}
      description=${description}
      button-text=${btnText}
    >
    </space-herobanner-style7>
  `;
};

const style8 = ({
  title,
  supportiveText,
  rightPadding,
  primaryImageSrc,
  primaryImageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
  primaryBtnText,
  secondaryBtnText,
}: any) => {
  return html`
    <space-herobanner-style8
      title=${title}
      supportive-text=${supportiveText}
      primary-image-alt=${primaryImageAlt}
      primary-image-src=${primaryImageSrc}
      secondary-image-src=${secondaryImageSrc}
      secondary-image-alt=${secondaryImageAlt}
      primary-btn-text=${primaryBtnText}
      secondary-btn-text=${secondaryBtnText}
      ?right-padding=${rightPadding}
    >
    </space-herobanner-style8>
  `;
};

const style9 = ({
  title,
  supportiveText,
  imageSrc,
  imageAlt,
  primaryBtnText,
  secondaryBtnText,
}: any) => {
  return html`
    <space-herobanner-style9
      title=${title}
      supportive-text=${supportiveText}
      image-alt=${imageAlt}
      primary-btn-text=${primaryBtnText}
      secondary-btn-text=${secondaryBtnText}
      image-src=${imageSrc}
    >
    </space-herobanner-style9>
  `;
};

export const Style1 = Template.bind({});
export const Style2 = style2.bind({});
export const Style3 = style3.bind({});
export const Style4 = style4.bind({});
export const Style5 = style5.bind({});
export const Style6 = style6.bind({});
export const Style7 = style7.bind({});
export const Style8 = style8.bind({});
export const Style9 = style9.bind({});

const statsOption = [
  {
    heading: '400+',
    subHeading: 'Projects Completed',
    linkText: 'Learn more',
    linkHref: '#',
  },
  {
    heading: '400+',
    subHeading: 'Projects Completed',
    linkText: 'Learn more',
    linkHref: '#',
  },
  {
    heading: '400+',
    subHeading: 'Projects Completed',
    linkText: 'Learn more',
    linkHref: '#',
  },
];

Style1.args = {
  title: 'SPACE is the Complete Team Collaboration Solution',
  supportiveText:
    'From automation of people processes to creating an engaged and driven culture.',
  btnText: 'Get started',
  inputPlaceholder: 'charles@space.com',
  statsOption,
};

Style2.args = {
  title: 'SPACE is the Complete Team Collaboration Solution',
  supportiveText:
    'From automation of people processes to creating an engaged and driven culture.',
  btnText: 'Get started',
  statsOption,
  inputPlaceholder: 'charles@space.com',
};

Style3.args = {
  title: 'Product Engineering',
  supportiveText:
    'Scale your business with robust, and high-performing applications.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie eu tortor et. Condimentum sit felis sed sed varius tincidunt enim. Orci tincidunt ultrices justo, egestas lacus, praesent lectus molestie. Convallis interdum tortor leo eu purus. Vivamus tortor massa quam consectetur nisl proin. Molestie consequat faucibus ut diam. Enim massa nisi, pellentesque volutpat et elementum ultrices nunc. ortor et. Condimentum sit felis sed sed varius tincidunt enim. Orci tincidunt ultrices justo, egestas lacus, praesent lectus molestie. Convallis interdum tortor leo eu purus. Vivamus tortor massa quam consectetur nisl proin. Mole',
  imageSrc: 'https://i.ibb.co/cNHG3H6/image-1.png',
  imageAlt: 'image',
};

Style4.args = {
  title: 'Beautiful analytics to grow smarter',
  supportiveText:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
  primaryBtnText: 'Signup',
  secondaryBtnText: 'Demo',
  imageSrc: 'https://i.ibb.co/HX8yRdk/macBook.png',
  imageAlt: 'image',
  badgeGroup: false,
  label: 'New feature',
  badgeLinkText: 'Check out the team dashboard',
  badgeLinkHref: '#',
};

Style5.args = {
  title: 'Beautiful analytics to grow smarter',
  supportiveText:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
  primaryBtnText: 'Signup',
  secondaryBtnText: 'Demo',
  imageSrc: 'https://i.ibb.co/YRTGY6b/image-2.png',
  imageAlt: 'image',
  rightPadding: false,
};

Style6.args = {
  title: 'Beautiful analytics to grow smarter',
  supportiveText:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
  imageSrc: 'https://i.ibb.co/ChDbcNW/image-3.png',
  imageAlt: 'image',
};

Style7.args = {
  title: 'We Design Websites that Excel Today & Evolve for Tomorrows',
  supportiveText:
    'En combinant stratégie, design et technologie, nous concevons des expériences qui font le pont entre vous et vos utilisateurs.',
  description:
    'Nous travaillons avec des clients du monde entier pour des utilisateurs du monde entier. Tout ça depuis la belle ville de Lyon, en France.',
  btnText: 'Talk to Us',
};

Style8.args = {
  title: 'Beautiful analytics to grow smarter',
  supportiveText:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
  primaryBtnText: 'Try for Free',
  secondaryBtnText: 'Book a Demo',
  primaryImageSrc: 'https://i.ibb.co/nRKkkfB/image-4.png',
  primaryImageAlt: 'image',
  secondaryImageSrc: 'https://i.ibb.co/RynbdtQ/image-5.png',
  secondaryImageAlt: 'image',
};

Style9.args = {
  title: 'Space is the complete Team Collaboration solution',
  supportiveText:
    'From automation of people processes to creating an engaged and driven culture',
  primaryBtnText: 'Try for Free',
  secondaryBtnText: 'Book a Demo',
  imageSrc: 'https://i.ibb.co/wRYyk09/image-6.png',
  imageAlt: 'image',
};
