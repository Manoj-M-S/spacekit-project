import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../03-Galaxy/Header/src/Header';
import styles from './FaqType2.scss.lit';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../03-Galaxy/ContactHeader/src/SimpleLink01/SimpleLink01';
import '../../../../03-Galaxy/HeroBanner/src/Style4/Style4';
import '../../../../03-Galaxy/Footer/src/TypeFourteen/TypeFourteen';
import '../../../../03-Galaxy/TeamSections/src/TeamSections';
import '../../../../03-Galaxy/Banner/src/Banner';

@customElement('space-faq-type2')
export default class FAQType2 extends LitElement {
  static styles = [styles];

  render() {
    const simple02Options = {
      src: 'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dXNlcnxlbnwwfHx8fDE2NzQ0NzY2ODU&force=true&w=1920',
      alt: 'Ranveer Suri',
      role: 'Engineering Manager',
      name: 'Ranveer Suri',
    };

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
        <section class="section section-bg">
          <ul class="icon-card-list">
            ${[...Array.from({ length: 8 })].map(
              () => html`
                <li class="icon-card-list-item">
                  <space-icon-card
                    cta-href="#"
                    cta-text="Learn More"
                    head-text="Deliver instant answers"
                    icon-name="zap"
                    alignment="left"
                    support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
                  >
                  </space-icon-card>
                </li>
              `
            )}
          </ul>
          <space-banner
            heading="Join our newsletter"
            sub-heading="Sign up for the very best tutorials and the latest news."
            cta-type="button"
            ?center=${false}
            banner-width="tillMargin"
            ?show-sub-heading=${true}
            primary-btn-text="Get started"
            secondary-btn-text="Learn more"
            cta-image-type="noImage"
            input-hint-text="We care about your data in our privacy policy"
          ></space-banner>
        </section>
        <section class="section">
          <space-team-sections
            type="simple_01"
            heading="Meet our team"
            sub-heading="We’re hiring!"
            description="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work."
            .options=${Array(8).fill({ ...simple02Options })}
          ></space-team-sections>
        </section>
        <section class="section-no-padding">
          <space-banner
            heading="Join our newsletter"
            sub-heading="Sign up for the very best tutorials and the latest news."
            cta-type="email"
            ?center=${true}
            ?background=${true}
            banner-width="tillMargin"
            ?show-sub-heading=${true}
            primary-btn-text="Get started"
            secondary-btn-text="Learn more"
            cta-image-type="noImage"
            input-hint-text="We care about your data in our privacy policy"
          ></space-banner>
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
    'space-faq-type2': FAQType2;
  }
}
