import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../02-Constellations/Cards/src/MediaCard/MediaCard';
import '../../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../../02-Constellations/LogoGrids/src/LogoGrids';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../02-Constellations/Stats/src/Stats';
import '../../../../03-Galaxy/AccordionPattern/src/AccordionPattern';
import '../../../../03-Galaxy/Banner/src/Banner';
import '../../../../03-Galaxy/Footer/src/TypeFour/TypeFour';
import '../../../../03-Galaxy/Header/src/Header';
import '../../../../03-Galaxy/Testimonials/TestimonyCarousel/TestimonyCarousel';
import styles from './Sample-03.scss.lit';
import '../../../../03-Galaxy/HeroBanner/src/Style2/Style2';
import { map } from 'lit/directives/map.js';

@customElement('space-sample-03')
export class Sample03 extends LitElement {
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

  @property()
  mediaCardOptions = [
    {
      iconName: 'zap',
      headText: 'Deliver instant answers',
      ctaHref: '#',
      ctaText: 'Learn More',
      alignment: 'center' as const,
      supportText:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      iconName: 'zap',
      headText: 'Deliver instant answers',
      ctaHref: '#',
      ctaText: 'Learn More',
      alignment: 'center' as const,
      supportText:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      iconName: 'zap',
      headText: 'Deliver instant answers',
      ctaHref: '#',
      ctaText: 'Learn More',
      alignment: 'center' as const,
      supportText:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      iconName: 'zap',
      headText: 'Deliver instant answers',
      ctaHref: '#',
      ctaText: 'Learn More',
      alignment: 'center' as const,
      supportText:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
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
        <space-herobanner-style2
          title="SPACE is the Complete Team Collaboration Solution"
          supportive-text="From automation of people processes to creating an engaged and driven culture."
          btn-text="Get started"
          input-placeholder="charles@space.com"
          .statsOption=${[
            {
              heading: '400+',
              subHeading: 'Projects Completed',
              linkText: 'Learn more',
              linkHref: '#',
            },
            {
              heading: '400+',
              subHeading: 'Projects Completed',
              linkText: 'Learn more',
              linkHref: '#',
            },
            {
              heading: '400+',
              subHeading: 'Projects Completed',
              linkText: 'Learn more',
              linkHref: '#',
            },
          ]}
        >
        </space-herobanner-style2>
        <section class="section logo-grid-section">
          <space-logo-grids
            class="logo-grid small"
            .options=${Array(12).fill({
              src: ' https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg',
              alt: 'Logo Name',
            })}
            type="logo_4"
            title="A Fully integrated digital agency"
            description="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services"
          >
          </space-logo-grids>
          <space-logo-grids
            class="logo-grid large"
            .options=${Array(12).fill({
              src: ' https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg',
              alt: 'Logo Name',
            })}
            type="carousel"
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
          <ul class="media-card-list">
            ${[...Array.from({ length: 6 })].map(
              () => html`
                <li class="media-card-list-item">
                  <space-media-card
                    src="https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc2ODk2ODUy&force=true&w=1920"
                    container
                    alt="media"
                    size="md"
                    media-first=""
                    head-text="Digital Experience Platforms — Designed for Digital Transformation"
                    support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ullamcorper laoreet in sagittis, sed aenean felis, a. Varius mauris elerisque lectus tincidunt venenatis placerat velit accumsan."
                    sub-heading="CASE STUDY"
                    orientation="vertical"
                  >
                  </space-media-card>
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
          <space-testimony-carousel
            class="testimony-carousal"
            type="centerAligned"
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
          >
          </space-section-heading>
          <video
            controls
            class="video-overlay"
            src=""
            poster="https://unsplash.com/photos/WUehAgqO5hE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fGN5Y2xlfGVufDB8fHx8MTY3NzEyNTc0MQ&force=true&w=1920"
          ></video>

          <ul class="icon-card-list">
            ${map(
              this.mediaCardOptions,
              ({
                iconName,
                headText,
                ctaText,
                ctaHref,
                alignment,
                supportText,
              }) => html`
                <space-icon-card
                  cta-href=${ctaHref}
                  cta-text=${ctaText}
                  head-text=${headText}
                  icon-name=${iconName}
                  alignment=${alignment}
                  support-text=${supportText}
                >
                </space-icon-card>
              `
            )}
          </ul>
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
        <section class="section">
          <space-banner
            center
            heading="Start your free trial"
            sub-heading="Join over 4,000+ startups already growing with SPACE."
            cta-type="button"
            banner-width="full"
            show-sub-heading
            primary-btn-text="Get started"
            secondary-btn-text="Learn more"
            cta-image-type="noImage"
            input-hint-text="We care about your data in our privacy policy"
          >
          </space-banner>
        </section>
      </main>
      <space-footer-type-four
        class="footer"
        footer-text="© 2021 SPACE. All rights reserved."
        logo-src="https://i.ibb.co/m8QfWzK/logo.png"
        logo-alt="logo"
        ios-logo-src="https://imgtr.ee/images/2023/02/01/MGUFD.png"
        android-logo-src="https://imgtr.ee/images/2023/02/01/MG96s.png"
        .linkOptions=${[
          {
            heading: 'Product',
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
              {
                navigationText: 'Overview',
                navigationHref: '#',
              },
            ],
          },
          {
            heading: 'Company',
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
              {
                navigationText: 'Overview',
                navigationHref: '#',
              },
            ],
          },
          {
            heading: 'Resources',
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
              {
                navigationText: 'Overview',
                navigationHref: '#',
              },
            ],
          },
          {
            heading: 'Use Cases',
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
              {
                navigationText: 'Overview',
                navigationHref: '#',
              },
            ],
          },
          {
            heading: 'Social',
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
              {
                navigationText: 'Overview',
                navigationHref: '#',
              },
            ],
          },
        ]}
      >
      </space-footer-type-four>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-sample-03': Sample03;
  }
}
