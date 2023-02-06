import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Footer';
import './src/TypeTwo/TypeTwo';
import './src/TypeThree/TypeThree';
import './src/TypeFour/TypeFour';
import './src/TypeFive/TypeFive';
import './src/TypeSix/TypeSix';
import './src/TypeSeven/TypeSeven';
import './src/TypeEight/TypeEight';
import './src/TypeNine/TypeNine';
import './src/TypeTen/TypeTen';
import './src/TypeEleven/TypeEleven';
import './src/TypeTwelve/TypeTwelve';
import './src/TypeThirteen/TypeThirteen';
import './src/TypeFourteen/TypeFourteen';
import './src/TypeFifteen/TypeFifteen';
import './src/TypeSixteen/TypeSixteen';
import './src/TypeSeventeen/TypeSeventeen';

export default {
  title: 'Galaxy/Footer',
  component: 'space-footer-type-one',
} as Meta;

const linkOptions = [
  {
    heading: 'Product',
    options: [
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
    ],
  },
  {
    heading: 'Company',
    options: [
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
    ],
  },
  {
    heading: 'Resources',
    options: [
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
    ],
  },
  {
    heading: 'Use Cases',
    options: [
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
    ],
  },
  {
    heading: 'Social',
    options: [
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
      {
        navigationText: 'Overview',
        navigationHref: '#',
      },
    ],
  },
];

const socialLinkOptions = [
  {
    linkHref: '#',
    linkIcon: 'twitter',
  },
  {
    linkHref: '#',
    linkIcon: 'linkedin',
  },
  {
    linkHref: '#',
    linkIcon: 'facebook',
  },
  {
    linkHref: '#',
    linkIcon: 'github',
  },
];

const footerLinkOptions = [
  {
    linkHref: '#',
    linkText: 'Terms',
  },
  {
    linkHref: '#',
    linkText: 'Privacy',
  },
  {
    linkHref: '#',
    linkText: 'Cookies',
  },
];

const locationOptions = [
  {
    location: 'Canada',
    address: '2433 29St SW Calgary, Alberta T3E2K3, Canada',
    phone: '+1 4034000849',
  },
  {
    location: 'Canada',
    address: '2433 29St SW Calgary, Alberta T3E2K3, Canada',
    phone: '+1 4034000849',
  },
  {
    location: 'Canada',
    address: '2433 29St SW Calgary, Alberta T3E2K3, Canada',
    phone: '+1 4034000849',
  },
];

const quickLinks = [
  {
    navigationText: 'Overview',
    navigationHref: '#',
  },
  {
    navigationText: 'Overview',
    navigationHref: '#',
  },
  {
    navigationText: 'Overview',
    navigationHref: '#',
  },
  {
    navigationText: 'Overview',
    navigationHref: '#',
  },
  {
    navigationText: 'Overview',
    navigationHref: '#',
  },
  {
    navigationText: 'Overview',
    navigationHref: '#',
  },
];

const Template = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  linkOptions,
}: any) => {
  return html`
    <space-footer-type-one
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
    >
    </space-footer-type-one>
  `;
};

const typeTwo = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  supportiveText,
  linkOptions,
  socialLinkOptions,
}: any) => {
  return html`
    <space-footer-type-two
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      supportive-text=${supportiveText}
      .socialLinkOptions=${socialLinkOptions}
    >
    </space-footer-type-two>
  `;
};

const typeThree = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  supportiveText,
  linkOptions,
  footerLinkOptions,
  inputLabel,
  inputPlaceholder,
  btnLabel,
}: any) => {
  return html`
    <space-footer-type-three
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      supportive-text=${supportiveText}
      .footerLinkOptions=${footerLinkOptions}
      input-label=${inputLabel}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
    >
    </space-footer-type-three>
  `;
};

const typeFour = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  supportiveText,
  linkOptions,
  footerLinkOptions,
  iosLogoSrc,
  androidLogoSrc,
}: any) => {
  return html`
    <space-footer-type-four
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      supportive-text=${supportiveText}
      .footerLinkOptions=${footerLinkOptions}
      ios-logo-src=${iosLogoSrc}
      android-logo-src=${androidLogoSrc}
    >
    </space-footer-type-four>
  `;
};

const typeFive = ({
  background,
  footerText,
  supportiveText,
  linkOptions,
  footerLinkOptions,
  heading,
  inputLabel,
  inputPlaceholder,
  btnLabel,
  socialLinkOptions,
}: any) => {
  return html`
    <space-footer-type-five
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      supportive-text=${supportiveText}
      .footerLinkOptions=${footerLinkOptions}
      heading=${heading}
      input-label=${inputLabel}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
      .socialLinkOptions=${socialLinkOptions}
    >
    </space-footer-type-five>
  `;
};

const typeSix = ({
  background,
  footerText,
  linkOptions,
  socialLinkOptions,
  footerLinkOptions,
  title,
  locationOptions,
  quickLinks,
}: any) => {
  return html`
    <space-footer-type-six
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      .socialLinkOptions=${socialLinkOptions}
      .footerLinkOptions=${footerLinkOptions}
      title=${title}
      .locationOptions=${locationOptions}
      .quickLinks=${quickLinks}
    >
    </space-footer-type-six>
  `;
};

const typeSeven = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  linkOptions,
  title,
  supportiveText,
  inputPlaceholder,
  btnLabel,
}: any) => {
  return html`
    <space-footer-type-seven
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      title=${title}
      supportive-text=${supportiveText}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
    >
    </space-footer-type-seven>
  `;
};

const typeEight = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  supportiveText,
  linkOptions,
  socialLinkOptions,
  title,
  inputPlaceholder,
  btnLabel,
}: any) => {
  return html`
    <space-footer-type-eight
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      .socialLinkOptions=${socialLinkOptions}
      title=${title}
      supportive-text=${supportiveText}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
    >
    </space-footer-type-eight>
  `;
};

const typeNine = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  supportiveText,
  footerLinkOptions,
  inputLabel,
  inputPlaceholder,
  btnLabel,
  quickLinks,
}: any) => {
  return html`
    <space-footer-type-nine
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      supportive-text=${supportiveText}
      .footerLinkOptions=${footerLinkOptions}
      input-label=${inputLabel}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
      .quickLinks=${quickLinks}
    >
    </space-footer-type-nine>
  `;
};

const typeTen = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  supportiveText,
  inputLabel,
  inputPlaceholder,
  btnLabel,
  quickLinks,
  socialLinkOptions,
  iosLogoSrc,
  androidLogoSrc,
}: any) => {
  return html`
    <space-footer-type-ten
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      supportive-text=${supportiveText}
      input-label=${inputLabel}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
      .quickLinks=${quickLinks}
      .socialLinkOptions=${socialLinkOptions}
      ios-logo-src=${iosLogoSrc}
      android-logo-src=${androidLogoSrc}
    >
    </space-footer-type-ten>
  `;
};

const typeEleven = ({
  background,
  footerText,
  linkOptions,
  socialLinkOptions,
  footerLinkOptions,
  title,
  quickLinks,
  supportiveText,
}: any) => {
  return html`
    <space-footer-type-eleven
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      .socialLinkOptions=${socialLinkOptions}
      .footerLinkOptions=${footerLinkOptions}
      title=${title}
      .quickLinks=${quickLinks}
      supportive-text=${supportiveText}
    >
    </space-footer-type-eleven>
  `;
};

const typeTwelve = ({
  background,
  footerText,
  linkOptions,
  socialLinkOptions,
  footerLinkOptions,
  title,
  supportiveText,
  logoSrc,
  logoAlt,
  inputLabel,
  inputPlaceholder,
  btnLabel,
}: any) => {
  return html`
    <space-footer-type-twelve
      .linkOptions=${linkOptions}
      ?background=${background}
      footer-text=${footerText}
      .socialLinkOptions=${socialLinkOptions}
      .footerLinkOptions=${footerLinkOptions}
      title=${title}
      supportive-text=${supportiveText}
      logo-alt=${logoAlt}
      logo-src=${logoSrc}
      input-label=${inputLabel}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
    >
    </space-footer-type-twelve>
  `;
};

const typeThirteen = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  footerLinkOptions,
  quickLinks,
}: any) => {
  return html`
    <space-footer-type-thirteen
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      .footerLinkOptions=${footerLinkOptions}
      .quickLinks=${quickLinks}
    >
    </space-footer-type-thirteen>
  `;
};

const typeFourteen = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  quickLinks,
  inputLabel,
  inputPlaceholder,
  btnLabel,
}: any) => {
  return html`
    <space-footer-type-fourteen
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      .quickLinks=${quickLinks}
      input-label=${inputLabel}
      input-placeholder=${inputPlaceholder}
      btn-label=${btnLabel}
    >
    </space-footer-type-fourteen>
  `;
};

const typeFifteen = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  quickLinks,
}: any) => {
  return html`
    <space-footer-type-fifteen
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      .quickLinks=${quickLinks}
    >
    </space-footer-type-fifteen>
  `;
};

const typeSixteen = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  socialLinkOptions,
}: any) => {
  return html`
    <space-footer-type-sixteen
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      .socialLinkOptions=${socialLinkOptions}
    >
    </space-footer-type-sixteen>
  `;
};

const typeSeventeen = ({
  background,
  footerText,
  logoSrc,
  logoAlt,
  footerLinkOptions,
  title,
  supportiveText,
  primaryBtnTxt,
  secondaryBtnTxt,
}: any) => {
  return html`
    <space-footer-type-seventeen
      ?background=${background}
      footer-text=${footerText}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      .footerLinkOptions=${footerLinkOptions}
      title=${title}
      supportive-text=${supportiveText}
      primary-btn-text=${primaryBtnTxt}
      secondary-btn-text=${secondaryBtnTxt}
    >
    </space-footer-type-seventeen>
  `;
};

export const TypeOne = Template.bind({});
export const TypeTwo = typeTwo.bind({});
export const TypeThree = typeThree.bind({});
export const TypeFour = typeFour.bind({});
export const TypeFive = typeFive.bind({});
export const TypeSix = typeSix.bind({});
export const TypeSeven = typeSeven.bind({});
export const TypeEight = typeEight.bind({});
export const TypeNine = typeNine.bind({});
export const TypeTen = typeTen.bind({});
export const TypeEleven = typeEleven.bind({});
export const TypeTwelve = typeTwelve.bind({});
export const TypeThirteen = typeThirteen.bind({});
export const TypeFourteen = typeFourteen.bind({});
export const TypeFifteen = typeFifteen.bind({});
export const TypeSixteen = typeSixteen.bind({});
export const TypeSeventeen = typeSeventeen.bind({});

TypeOne.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
};

TypeTwo.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  supportiveText:
    'Design amazing digital experiences that create more happy in the world.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  socialLinkOptions,
};

TypeThree.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  supportiveText:
    'Design amazing digital experiences that create more happy in the world.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  footerLinkOptions,
  inputPlaceholder: 'Enter your email',
  inputLabel: 'Stay upto date',
  btnLabel: 'Subscribe',
};

TypeFour.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  supportiveText:
    'Design amazing digital experiences that create more happy in the world.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  footerLinkOptions,
  iosLogoSrc: 'https://imgtr.ee/images/2023/02/01/MGUFD.png',
  androidLogoSrc: 'https://imgtr.ee/images/2023/02/01/MG96s.png',
};

TypeFive.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  supportiveText:
    'Design amazing digital experiences that create more happy in the world.',
  heading: 'We Challenge Core Assumptions',
  footerLinkOptions,
  inputPlaceholder: 'Enter your email',
  inputLabel: 'Stay upto date',
  btnLabel: 'Subscribe',
  socialLinkOptions,
};

TypeSix.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  socialLinkOptions,
  footerLinkOptions,
  title: 'Serve.\nPreserve.\nInnovate.',
  locationOptions,
  quickLinks,
};

TypeSeven.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  title: 'Join our newsletter',
  supportiveText: 'We’ll send you a nice letter once per week. No spam.',
  inputPlaceholder: 'Enter your email',
  btnLabel: 'Subscribe',
};

TypeEight.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  socialLinkOptions,
  title: 'Join our newsletter',
  supportiveText: 'We’ll send you a nice letter once per week. No spam.',
  inputPlaceholder: 'Enter your email',
  btnLabel: 'Subscribe',
};

TypeNine.args = {
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  supportiveText:
    'Design amazing digital experiences that create more happy in the world.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  footerLinkOptions,
  inputPlaceholder: 'Enter your email',
  inputLabel: 'Stay upto date',
  btnLabel: 'Subscribe',
  quickLinks,
};

TypeTen.args = {
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  supportiveText:
    'Design amazing digital experiences that create more happy in the world.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  inputPlaceholder: 'Enter your email',
  inputLabel: 'Stay upto date',
  btnLabel: 'Subscribe',
  quickLinks,
  socialLinkOptions,
  iosLogoSrc: 'https://imgtr.ee/images/2023/02/01/MGUFD.png',
  androidLogoSrc: 'https://imgtr.ee/images/2023/02/01/MG96s.png',
};

TypeEleven.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  socialLinkOptions,
  footerLinkOptions,
  title: "Let's make something great together.",
  quickLinks,
  supportiveText: 'Be the brand that customers want and competitors envy.',
};

TypeTwelve.args = {
  linkOptions,
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  socialLinkOptions,
  footerLinkOptions,
  title: 'Lorem ipsum dolor sit amet, nsectetur adipiscing elit.',
  supportiveText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dis dictumst amet cursus enim ultricies fames. Pulvinar amet, sed tristique auctor placerat velit a felis. Et pellentesque et aliquam eu urna. Dolor urna, dignissim consectetur morbi nulla. Turpis neque sed a risus ac nec et arcu.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  inputPlaceholder: 'Enter your email',
  inputLabel: 'Stay upto date',
  btnLabel: 'Subscribe',
};

TypeThirteen.args = {
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  footerLinkOptions,
  quickLinks,
};

TypeFourteen.args = {
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  footerLinkOptions,
  quickLinks,
  inputPlaceholder: 'Enter your email',
  inputLabel: 'Stay upto date',
  btnLabel: 'Subscribe',
};

TypeFifteen.args = {
  background: false,
  footerText: '© 2021 SPACE',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  quickLinks,
};

TypeSixteen.args = {
  background: false,
  footerText: '© 2021 SPACE',
  logoSrc: 'https://i.ibb.co/m8QfWzK/logo.png',
  logoAlt: 'logo',
  socialLinkOptions,
};

TypeSeventeen.args = {
  background: false,
  footerText: '© 2021 SPACE. All rights reserved.',
  logoSrc: 'https://i.ibb.co/QPS2rCY/Logomark.png',
  logoAlt: 'logo',
  footerLinkOptions,
  title: 'Join our newsletter',
  supportiveText: 'We’ll send you a nice letter once per week. No spam.',
  primaryBtnTxt: 'View demo',
  secondaryBtnTxt: 'Get started',
};
