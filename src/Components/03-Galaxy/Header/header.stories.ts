import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../../01-stars/button';
import '../../02-Constellations/HeaderMenuItem';
import './';

export default {
  title: 'Galaxy/Header',
  component: 'space-header',
} as Meta;

const twoColSidebarOptions = {
  title: 'Products',
  description: 'Find the best solution for you.',
  iconName: 'box',
};

const twoColSidebar = ({
  logoSrc,
  logoAlt,
  ctaTextOne,
  ctaTextTwo,
  search,
  options,
  hamburger,
}: any) => {
  return html`
    <space-header
      ?search=${search}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      ?hamburger=${hamburger}
      cta-text-one=${ctaTextOne}
      cta-text-two=${ctaTextTwo}
    >
      <space-header-menu-item slot="subMenu" label="Home">
      </space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="Resources">
        <space-twocolsidebar
          sidebar-link-href="#"
          sidebar-link-text="All video tutorials"
          headingTwo="Company"
          headingOne="Resources"
          headingThree="Resources"
          .optionsOne=${options}
          .optionsTwo=${options}
        >
          <space-media-card
            slot="sidebar"
            size="sm"
            src="https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc1OTIyMDA1&force=true&w=1920"
            alt="media"
            head-text="How to get started"
            support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sub-heading="Tutorial"
            orientation="horizontal"
          >
          </space-media-card>
          <space-media-card
            slot="sidebar"
            size="sm"
            src="https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc1OTIyMDA1&force=true&w=1920"
            alt="media"
            head-text="How to get started"
            support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sub-heading="Tutorial"
            orientation="horizontal"
          >
          </space-media-card
        ></space-twocolsidebar>
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

const twoColSlimFooter = ({
  logoSrc,
  logoAlt,
  ctaTextOne,
  ctaTextTwo,
  search,
  options,
  hamburger,
}: any) => {
  return html`
    <space-header
      ?search=${search}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      ?hamburger=${hamburger}
      cta-text-one=${ctaTextOne}
      cta-text-two=${ctaTextTwo}
    >
      <space-header-menu-item
        slot="subMenu"
        label="Home"
      ></space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="Resources">
        <space-twocolslimfooter
          footer-text="Looking for a new career? Get in touch"
          footer-href="#"
          .options=${options}
        ></space-twocolslimfooter>
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

const threeColSidebar = ({
  logoSrc,
  logoAlt,
  ctaTextOne,
  ctaTextTwo,
  search,
  options,
  hamburger,
}: any) => {
  return html`
    <space-header
      ?search=${search}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      ?hamburger=${hamburger}
      cta-text-one=${ctaTextOne}
      cta-text-two=${ctaTextTwo}
    >
      <space-header-menu-item
        slot="subMenu"
        label="Home"
      ></space-header-menu-item>
      <space-header-menu-item slot="subMenu" label="Resources">
        <space-threecolsidebar
          headingTwo="Use cases"
          headingOne="Resources"
          headingThree="Company"
          .optionsOne=${options}
          .optionsTwo=${options}
          .optionsThree=${options}
          ><space-media-card
            slot="sidebar"
            size="md"
            src="https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc1OTIyMDA1&force=true&w=1920"
            alt="media"
            head-text="Digital Experience Platforms — Designed for Digital Transformation"
            support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sub-heading="CASE STUDY"
            orientation="vertical"
          >
          </space-media-card>
        </space-threecolsidebar>
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

const branchedHamburger = ({
  logoSrc,
  logoAlt,

  search,
  hamburger,
}: any) => {
  return html`
    <space-header
      ?search=${search}
      logo-src=${logoSrc}
      logo-alt=${logoAlt}
      ?hamburger=${hamburger}
    >
      <h1 slot="branchedHamburger">children</h1>
    </space-header>
  `;
};

export const TwoColSidebar = twoColSidebar.bind({});
export const TwoColSlimFooter = twoColSlimFooter.bind({});
export const ThreeColSidebar = threeColSidebar.bind({});
export const BranchedHamburger = branchedHamburger.bind({});

BranchedHamburger.args = {
  logoAlt: 'logo',
  search: true,
  hamburger: true,
  logoSrc: 'https://i.ibb.co/k5sYcwt/logo.png',
};

TwoColSidebar.args = {
  logoAlt: 'logo',
  logoSrc: 'https://i.ibb.co/k5sYcwt/logo.png',
  ctaTextOne: 'Log in',
  ctaTextTwo: 'Sign up',
  options: [
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
  ],
};

TwoColSlimFooter.args = {
  ...TwoColSidebar.args,
  options: [
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
  ],
};

ThreeColSidebar.args = {
  ...TwoColSidebar.args,
  options: [
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
    { ...twoColSidebarOptions },
  ],
};
