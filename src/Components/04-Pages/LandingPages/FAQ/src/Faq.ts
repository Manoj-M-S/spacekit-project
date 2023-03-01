import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../03-Galaxy/Header/src/Header';
import styles from './Faq.scss.lit';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../03-Galaxy/ContactHeader/src/SimpleLink01/SimpleLink01';
import '../../../../03-Galaxy/HeroBanner/src/Style4/Style4';
import '../../../../03-Galaxy/Footer/src/TypeFourteen/TypeFourteen';

@customElement('space-faq-page')
export default class FAQ extends LitElement {
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
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="center"
          >
          </space-section-heading>
        </section>
        <section class="section">
          <ul class="icon-card-list">
            ${[...Array.from({ length: 8 })].map(
              () => html`
                <li class="icon-card-list-item">
                  <space-icon-card
                    cta-href="#"
                    cta-text="Learn More"
                    head-text="Deliver instant answers"
                    icon-name="zap"
                    alignment="center"
                    support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
                  >
                  </space-icon-card>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="section">
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="center"
          >
          </space-section-heading>
        </section>
        <section class="section">
          <ul class="icon-cards-list">
            ${[...Array.from({ length: 3 })].map(
              () => html`
                <li class="icon-cards-list-item">
                  <space-icon-card
                    cta-href=""
                    cta-text="hi@space.com"
                    head-text="Email"
                    icon-name="mail"
                    alignment="center"
                    support-text="Our friendly team is here to help."
                  >
                  </space-icon-card>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="section">
          <space-herobanner-style4
            title="Start your 30-day free trial"
            supportive-text="Join over 4,000+ startups already growing with SPACE."
            image-alt="image"
            primary-btn-text="Learn more"
            secondary-btn-text="Get started"
            image-src="https://i.ibb.co/Mp7YxZL/image-7.png"
          ></space-herobanner-style4>
        </section>
      </main>
      <div class="footer">
        <space-footer-type-fourteen
          ?background=${false}
          footer-text="© 2021 SPACE. All rights reserved."
          logo-src="https://i.ibb.co/m8QfWzK/logo.png"
          logo-alt="logo"
          .quickLinks=${[
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
          ]}
          input-placeholder="Enter your email"
          input-label="Stay upto date"
          btn-label="Subscribe"
        ></space-footer-type-fourteen>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-faq-page': FAQ;
  }
}
