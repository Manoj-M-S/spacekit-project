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
  linkOptions,
  footerLinkOptions,
  inputLabel,
  inputPlaceholder,
  btnLabel,
  quickLinks,
}: any) => {
  return html`
    <space-footer-type-nine
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
      .quickLinks=${quickLinks}
    >
    </space-footer-type-nine>
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
  quickLinks,
};
