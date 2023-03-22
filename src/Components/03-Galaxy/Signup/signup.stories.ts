import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import './src/Signup';

export default {
  title: 'Galaxy/Signup',
  component: 'space-signup',
} as Meta;

const Template = ({
  imageSrc,
  title,
  subTitle,
  socialLogin,
  splitImage,
  forgotPasswordHref,
  signupHref,
  logoSrc,
  btnText,
  footerText,
  footerLinkText,
}: any) => {
  return html`
    <space-signup
      image-src=${imageSrc}
      title=${title}
      sub-title=${subTitle}
      ?social-login=${socialLogin}
      ?split-image=${splitImage}
      forgot-passwrd-href=${forgotPasswordHref}
      signup-href=${signupHref}
      logo-src=${logoSrc}
      btn-text=${btnText}
      footer-text=${footerText}
      footer-link-text=${footerLinkText}
    >
    </space-signup>
  `;
};

export const Default = Template.bind({});

Default.args = {
  imageSrc: 'https://i.ibb.co/Lzc741L/unsplash-yb3hsmz4utg.png',
  title: 'Create an account',
  subTitle: 'Start your 30-day free trial.',
  socialLogin: false,
  splitImage: false,
  forgotPasswordHref: '#',
  signupHref: '#',
  logoSrc: 'https://i.ibb.co/QPS2rCY/Logomark.png',
  btnText: 'Get Started',
  footerText: "Don't have an account?",
  footerLinkText: 'Log in',
};
