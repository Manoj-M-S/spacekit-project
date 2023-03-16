import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import './src/Login';

export default {
  title: 'Galaxy/Login',
  component: 'space-login',
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
}: any) => {
  return html`
    <space-login
      image-src=${imageSrc}
      title=${title}
      sub-title=${subTitle}
      ?social-login=${socialLogin}
      ?split-image=${splitImage}
      forgot-passwrd-href=${forgotPasswordHref}
      signup-href=${signupHref}
      logo-src=${logoSrc}
    >
    </space-login>
  `;
};

export const Default = Template.bind({});

Default.args = {
  imageSrc: 'https://i.ibb.co/MgDPSFw/Section.png',
  title: 'Log in to your account',
  subTitle: 'Welcome back! Please enter your details.',
  socialLogin: false,
  splitImage: false,
  forgotPasswordHref: '#',
  signupHref: '#',
  logoSrc: 'https://i.ibb.co/QPS2rCY/Logomark.png',
};
