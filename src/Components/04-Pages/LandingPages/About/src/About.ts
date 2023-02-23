import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../02-Constellations/LogoGrids/src/LogoGrids';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../03-Galaxy/Header/src/Header';
import styles from './About.scss.lit';
import '../../../../03-Galaxy/Testimonials/TestimonyCarousel/TestimonyCarousel';
import { map } from 'lit/directives/map.js';
import '../../../../02-Constellations/Stats/src/Stats';
import '../../../../03-Galaxy/Banner/src/Banner';
import '../../../../03-Galaxy/Footer/src/TypeTwo/TypeTwo';
import '../../../../03-Galaxy/TeamSections/src/TeamSections';

@customElement('space-about-page')
export default class About extends LitElement {
  static styles = [styles];

  @property()
  statsOptions = [
    {
      size: 'default',
      subHeading: 'Global customers',
      orientation: 'center' as const,
      headingText: '4,000+',
      supportText:
        'We’ve helped build over 400 projects and have worked with some amazing companies.',
    },
    {
      size: 'default',
      subHeading: 'Return on investment',
      orientation: 'center' as const,
      headingText: '600%',
      supportText: 'Our customers have reported an average of ~600% ROI.',
    },
    {
      size: 'default',
      subHeading: 'Global downloads',
      orientation: 'center' as const,
      headingText: '10k',
      supportText: 'Our app has been downloaded over 10k times.',
    },
    {
      size: 'default',
      subHeading: '5-star reviews',
      orientation: 'center' as const,
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
          <space-logo-grids
            type="carousel"
            .options=${Array(12).fill({
              src: ' https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg',
              alt: 'Logo Name',
            })}
          ></space-logo-grids>
        </section>
        <section class="section">
          <space-team-sections
            type="simple_01"
            heading="Meet our team"
            sub-heading="We’re hiring!"
            description="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work."
            .options=${Array(8).fill({
              src: 'https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8dXNlcnxlbnwwfHx8fDE2NzQ0NzY2ODU&force=true&w=1920',
              alt: 'Ranveer Suri',
              role: 'Engineering Manager',
              name: 'Ranveer Suri',
            })}
          ></space-team-sections>
        </section>
        <section class="section section-bg ">
          <div class="container">
            <space-section-heading
              size="default"
              head-text="A Fully integrated digital agency"
              support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
              sub-heading="Launch faster"
              orientation="center"
            >
            </space-section-heading>
            <ul class="icon-card-list">
              ${[...Array.from({ length: 4 })].map(
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
          </div>
        </section>
      </main>
      <div class="footer">
        <space-footer-type-two
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
        </space-footer-type-two>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-about-page': About;
  }
}
