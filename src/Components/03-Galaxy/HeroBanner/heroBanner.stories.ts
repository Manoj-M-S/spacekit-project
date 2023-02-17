import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Style2/Style2';
import './src/Style3/Style3';
import './src/Style4/Style4';
import './src/Style5/Style5';

export default {
  title: 'Galaxy/HeroBanner',
  component: 'space-herobanner-style2',
} as Meta;

const Template = ({
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

export const Style2 = Template.bind({});
export const Style3 = style3.bind({});
export const Style4 = style4.bind({});
export const Style5 = style5.bind({});

const statsOption = [
  {
    heading: '400+',
    subHeading: 'Projects Completed',
  },
  {
    heading: '400+',
    subHeading: 'Projects Completed',
  },
  {
    heading: '400+',
    subHeading: 'Projects Completed',
  },
];

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
