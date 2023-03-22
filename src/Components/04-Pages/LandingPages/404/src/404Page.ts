import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../03-Galaxy/Header/src/Header';
import styles from './404Page.scss.lit';
import '../../../../03-Galaxy/Footer/src/Footer';
import '../../../../03-Galaxy/404Section/src/404Section';

@customElement('space-404-page')
export default class NotFoundFape extends LitElement {
  static styles = [styles];

  @property()
  imageAllignent!: string;

  render() {
    return html`<space-header
        logo-src="https://i.ibb.co/k5sYcwt/logo.png"
        logo-alt="logo"
        cta-text-one="Log in"
        cta-text-two="Sign up"
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
      <div class="main">
        <div class="section">
          <space-404-section-type1
            title="404 Error"
            sub-heading="We can’t find that page"
            support-text="Sorry, the page you are looking for does not exist or has been moved."
            primary-btn-text="Take me home"
            secondary-btn-text="Go back"
          ></space-404-section-type1>
        </div>
      </div>
      <div class="footer">
        <space-footer-type-one
          .linkOptions=${[
            {
              heading: 'Product',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Company',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Resources',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Use Cases',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
            {
              heading: 'Social',
              options: Array(6).fill({
                navigationText: 'Overview',
                navigationHref: '#',
              }),
            },
          ]}
          ?background=${true}
          footer-text="© 2021 SPACE. All rights reserved."
          logo-src="https://i.ibb.co/X4hf7G6/logo.png"
          logo-alt="logo"
        >
        </space-footer-type-one>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-404-page': NotFoundFape;
  }
}
