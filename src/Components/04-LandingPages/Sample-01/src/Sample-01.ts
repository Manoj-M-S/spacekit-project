import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../02-Constellations/LogoGrids/src/LogoGrids';
import '../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../03-Galaxy/Header/src/Header';
import styles from './Sample-01.scss.lit';
import '../../../03-Galaxy/Testimonials/TestimonyCarousel/TestimonyCarousel';
import { map } from 'lit/directives/map.js';
import '../../../02-Constellations/Stats/src/Stats';
import '../../../03-Galaxy/Banner/src/Banner';
import '../../../03-Galaxy/AccordionPattern/src/AccordionPattern';
import '../../../03-Galaxy/Footer/src/TypeSix/TypeSix';

@customElement('space-sample-01')
export default class Sample extends LitElement {
  static styles = [styles];

  @property()
  statsOptions = [
    {
      size: 'default',
      subHeading: 'Global customers',
      orientation: 'default',
      headingText: '4,000+',
      supportText:
        'We’ve helped build over 400 projects and have worked with some amazing companies.',
    },
    {
      size: 'default',
      subHeading: 'Return on investment',
      orientation: 'default',
      headingText: '600%',
      supportText: 'Our customers have reported an average of ~600% ROI.',
    },
    {
      size: 'default',
      subHeading: 'Global downloads',
      orientation: 'default',
      headingText: '10k',
      supportText: 'Our app has been downloaded over 10k times.',
    },
    {
      size: 'default',
      subHeading: '5-star reviews',
      orientation: 'default',
      headingText: '200+',
      supportText: 'We’re proud of our 5-star rating with over 200 reviews.',
    },
  ];

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
        <section class="section logo-grid-section">
          <space-logo-grids
            .options=${Array(12).fill({
              src: ' https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg',
              alt: 'Logo Name',
            })}
            type="logo_6"
            title="A Fully integrated digital agency"
            description="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services"
          >
          </space-logo-grids>
        </section>

        <section class="section section-two">
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="center"
          >
          </space-section-heading>
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
          <space-testimony-carousel
            type="withCompanyLogo"
            .options=${[
              {
                src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
                alt: 'Alexander David',
                name: 'Alexander David',
                designation: 'Head of Digital Transformation, Grofers',
                logoSrc: 'https://i.ibb.co/wMY9d3G/logo.png',
                logoAlt: 'alt',
                description:
                  'Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!',
              },
              {
                src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
                alt: 'Alexander David',
                name: 'Alexander David',
                designation: 'Head of Digital Transformation, Grofers',
                logoSrc: 'https://i.ibb.co/wMY9d3G/logo.png',
                logoAlt: 'alt',
                description:
                  'Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!',
              },
            ]}
          >
          </space-testimony-carousel>
        </section>
        <section class="section">
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="center"
          ></space-section-heading>
          <div class="stats-container">
            <ul class="stats-list">
              ${map(
                this.statsOptions,
                ({
                  size,
                  subHeading,
                  headingText,
                  supportText,
                  orientation,
                }) => html`
                  <space-stats
                    size=${size}
                    sub-heading=${subHeading}
                    heading-text=${headingText}
                    support-text=${supportText}
                    orientation=${orientation}
                  >
                  </space-stats>
                `
              )}
            </ul>
            <space-image
              class="stats-image"
              alt="A Fully integrated digital agency"
              src="https://s3-alpha-sig.figma.com/img/6a7d/4961/2c2d31c5592a945a1858e36acdd32017?Expires=1677456000&Signature=nTAC60h~xd~t4UGy-WfCSX7pXJ1j~OyfbJOsyNfDtxPKQKK0NkEt~pEul92kSwjLB58BipyDBct4BmPlNv0qMLUadFzOtPu28T2GIJj5~9G6LLdAfSVkteoWl3yk4AeeInf1A~pLl1fEa3-RRAOvLLjuuSBNEN4LKaPiJZYNnQrZ0ElPTXFiMMJK4XV3qI08pr6SEL143u9vRMumxnZAHWZrhkpUKfKwgEHo0gr3q~0AOYAYa8NkwkLWe5qEnuf7TA7ADZQPOQOevxGIrZsnIZeZkhhxMSq1aKkKvmuaRSGMfAvc-9Dr36vje4XC09AB5XvDYAZvHtvcaP~aN9ADfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            ></space-image>
          </div>
        </section>
        <section class="section">
          <space-banner
            heading="Join our newsletter"
            sub-heading="Sign up for the very best tutorials and the latest news."
            cta-type="button"
            banner-width="full"
            banner-image-alt="image"
            banner-image-src="https://www.lotame.com/wp-content/uploads/2021/08/About-Team.png"
            show-sub-heading=""
            primary-btn-text="Get started"
            secondary-btn-text="Learn more"
            cta-image-type="normal"
            input-hint-text="We care about your data in our privacy policy"
          >
          </space-banner>
        </section>

        <section class="section accordion-container">
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="center"
          ></space-section-heading>

          <space-accordion-pattern
            icon-position="left"
            class="accordion"
            .options=${[
              {
                headingText: 'Is there a free trial available?',
                content:
                  'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                divider: true,
              },
              {
                headingText: 'Is there a free trial available?',
                content:
                  'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                divider: true,
              },
              {
                headingText: 'Is there a free trial available?',
                content:
                  'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                divider: true,
              },
              {
                headingText: 'Is there a free trial available?',
                content:
                  'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                divider: true,
              },
            ]}
          >
          </space-accordion-pattern>
        </section>
      </main>
      <space-footer-type-six
        footer-text="© 2021 SPACE. All rights reserved."
        title="Serve. Preserve. Innovate."
        .linkOptions=${[
          {
            heading: 'Our Services',
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
            ],
          },
        ]}
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
        .locationOptions=${[
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
        ]}
        .quickLinks=${[
          {
            navigationText: 'Contact',
            navigationHref: '#',
          },
          {
            navigationText: 'Careers',
            navigationHref: '#',
          },
          {
            navigationText: 'Login',
            navigationHref: '#',
          },
        ]}
      >
      </space-footer-type-six>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-sample-01': Sample;
  }
}
