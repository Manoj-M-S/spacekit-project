import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../03-Galaxy/Header/src/Header';
import styles from './Contact.scss.lit';
import '../../../../03-Galaxy/Footer/src/Footer';
import '../../../../03-Galaxy/ContactHeader/src/ContactHeader';

@customElement('space-contact-page')
export default class Contact extends LitElement {
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

      <main class="main">
        <section class="section">
          <space-contact-header
            email-text="hi@space.com"
            first-name-label="First name"
            first-name-placeholder="First name"
            last-name-label="Last name"
            last-name-placeholder="Last name"
            email-label="Email"
            email-placeholder="you@company.com"
            phone-label="Phone Number"
            phone-placeholder="Enter your phone number here"
            message-label="Message"
            message-placeholder="Include a message"
            button-text="Send Message"
            ?center=${true}
            ?heading=${true}
            heading-text="Let's make something great together."
            sub-heading="You can reach us anytime via"
            image-src="https://i.ibb.co/VvvBzjz/image.png"
            image-variant=${this.imageAllignent}
          ></space-contact-header>
        </section>
      </main>
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
    'space-contact-page': Contact;
  }
}
