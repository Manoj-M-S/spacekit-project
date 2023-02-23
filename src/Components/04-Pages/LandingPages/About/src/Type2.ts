import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../02-Constellations/LogoGrids/src/LogoGrids';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../03-Galaxy/Header/src/Header';
import styles from './Type2.scss.lit';
import '../../../../03-Galaxy/Testimonials/TestimonyCarousel/TestimonyCarousel';
import '../../../../02-Constellations/Stats/src/Stats';
import '../../../../03-Galaxy/Banner/src/Banner';
import '../../../../03-Galaxy/AccordionPattern/src/AccordionPattern';
import '../../../../03-Galaxy/TeamSections/src/TeamSections';
import '../../../../03-Galaxy/ContactHeader/src/SimpleLink01/SimpleLink01';
import '../../../../03-Galaxy/ContactHeader/src/ContactHeader';
import '../../../../03-Galaxy/Footer/src/TypeFive/TypeFive';

@customElement('space-about-page-type2')
export default class Type2 extends LitElement {
  static styles = [styles];

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
          <space-contact-header-simplelink
            title="About us"
            sub-title="We’re a distributed team"
            support-text="We have offices and teams all around the world."
            map-source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5096084154!2d144.49268362290942!3d-37.97015407090076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1672663059428!5m2!1sen!2sin"
            ?container=${false}
            allignment="center"
            .options=${[
              {
                iconContainer: false,
                iconName: 'mail',
                container: false,
                headText: 'Email',
                ctaHref: '',
                ctaText: 'hi@space.com',
                supportText: 'Our friendly team is here to help.',
              },
              {
                iconContainer: false,
                iconName: 'mapPin',
                container: false,
                headText: 'Office',
                ctaHref: '',
                ctaText:
                  '203, 2nd Floor, "B" Wing, Nyati Tech Park, Wadgaon Sheri, Pune, 411014, India',
                supportText: 'Come say hello at our office HQ.',
              },
              {
                iconContainer: false,
                iconName: 'phone',
                container: false,
                headText: 'Phone',
                ctaHref: '',
                ctaText: '+91 7767815999',
                supportText: 'Mon-Fri from 8am to 5pm.',
              },
            ]}
          ></space-contact-header-simplelink>
        </section>
        <section class="section">
          <space-contact-header-simplelink
            container
            title="About us"
            sub-title="We’re a distributed team"
            support-text="We have offices and teams all around the world."
            allignment="left"
            ?icon-container=${true}
            .options=${[
              {
                iconName: 'mail',
                container: false,
                headText: 'Email',
                ctaHref: '',
                ctaText: 'hi@space.com',
                supportText: 'Our friendly team is here to help.',
              },
              {
                iconName: 'mapPin',
                container: false,
                headText: 'Office',
                ctaHref: '',
                ctaText:
                  '203, 2nd Floor, "B" Wing, Nyati Tech Park, Wadgaon Sheri, Pune, 411014, India',
                supportText: 'Come say hello at our office HQ.',
              },
              {
                iconName: 'phone',
                container: false,
                headText: 'Phone',
                ctaHref: '',
                ctaText: '+91 7767815999',
                supportText: 'Mon-Fri from 8am to 5pm.',
              },
            ]}
          >
          </space-contact-header-simplelink>
        </section>
        <section class="section">
          <space-team-sections
            type="simple_02"
            sub-heading="Our team"
            heading="Some of the people you’ll be working with"
            description="We’re a 100% remote team spread all across the world. Join us!"
            .options=${Array(8).fill({
              src: 'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dXNlcnxlbnwwfHx8fDE2NzQ0NzY2ODU&force=true&w=1920',
              alt: 'Ranveer Suri',
              role: 'Engineering Manager',
              name: 'Ranveer Suri',
              description:
                'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
              socialIcons: [
                { href: '#', iconName: 'figma' },
                { href: '#', iconName: 'twitter' },
                { href: '#', iconName: 'linkedin' },
              ],
            })}
          >
          </space-team-sections>
        </section>
        <section class="section">
          <space-contact-header
            title="About us"
            support-text="We have offices and teams all around the world."
            sub-title="We’re a distributed team"
            first-name-label="First name"
            first-name-placeholder="First name"
            last-name-label="Last name"
            last-name-placeholder="Last name"
            email-label="Email"
            email-placeholder="Email"
            phone-label="Phone"
            phone-placeholder="Phone"
            message-label="Message"
            message-placeholder="Message"
            button-text="Send Message"
            ?center=${true}
          ></space-contact-header>
        </section>
        <section class="section">
          <div class="container">
            <space-logo-grids
              description="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services"
              type="logo_5"
              .options=${Array(10).fill({
                src: ' https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg',
                alt: 'Logo Name',
              })}
            >
            </space-logo-grids>
          </div>
        </section>
      </main>
      <div class="footer">
        <space-footer-type-five
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
          ]}
          heading="We Challenge Core Assumptions"
          ?background=${true}
          .footerLinkOptions=${[
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
          ]}
          input-placeholder="Enter your email"
          btn-label="Subscribe"
          footer-text="© 2021 SPACE. All rights reserved."
          logo-src="https://i.ibb.co/X4hf7G6/logo.png"
          logo-alt="logo"
          supportive-text="Design amazing digital experiences that create more happy in the world."
          .socialLinkOptions=${[
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
          ]}
        >
        </space-footer-type-five>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-about-page-type2': Type2;
  }
}
