import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../../01-stars/button';
import '../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import './src/Header';

export default {
  title: 'Galaxy/Header',
  component: 'space-header',
} as Meta;

const Template = ({ logoSrc, logoAlt, ctaTextOne, ctaTextTwo }: any) => {
  return html`
    <space-header
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      cta-text-one=${ctaTextOne}
      cta-text-two=${ctaTextTwo}
    >
      <space-header-menu-item
        slot="subMenu"
        label="Home"
      ></space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="Resources">
        <div>
          <p>children</p>
        </div>
      </space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="Blog">
      </space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="About">
      </space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="Contact">
      </space-header-menu-item>
    </space-header>
  `;
};

export const Default = Template.bind({});

Default.args = {
  logoAlt: 'logo',
  logoSrc: 'https://i.ibb.co/k5sYcwt/logo.png',
  ctaTextOne: 'Log in',
  ctaTextTwo: 'Sign up',
};
