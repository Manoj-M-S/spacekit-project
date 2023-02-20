import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../02-Constellations/LogoGrids/src/LogoGrids';
import '../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../02-Constellations/Stats/src/Stats';
import '../../../03-Galaxy/AccordionPattern/src/AccordionPattern';
import '../../../03-Galaxy/Banner/src/Banner';
import '../../../03-Galaxy/Footer/src/TypeTen/TypeTen';
import '../../../03-Galaxy/Header/src/Header';
import '../../../03-Galaxy/Testimonials/TestimonyCarousel/TestimonyCarousel';
import styles from './Sample-02.scss.lit';
import '../../../02-Constellations/Content/src/Content';

@customElement('space-sample-02')
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
          >
          </space-logo-grids>
        </section>

        <section class="section stats">
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="split"
          ></space-section-heading>
          <div class="stats-container">
            <space-content
              heading="Share team inboxes"
              description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
              .options=${[
                'Leverage automation to move fast',
                'Always give customers a human to chat to',
                'Automate customer support and close leads faster',
              ]}
            >
            </space-content>
            <space-image
              class="stats-image"
              alt="A Fully integrated digital agency"
              src="https://s3-alpha-sig.figma.com/img/7b87/7547/59497e4990f14877aefbbd99d19ed75d?Expires=1678060800&Signature=ezG2tTb3wPu3t2WItIav3JnY2wI~PtLHXnljXth5Gx86bB~CiFdtL26c9vdB7JOxoRMvxypWhcC9y2BFBK3hNBqHl9M8fG2rnIzsTO1iAbGf0LriLwmqlgohFlysX-K4Vjghkzk-ij9xts62KO~hkWv8hbZEdsHiELy~3JVQES9KazvOj6PsP8jAIhBoO2OEi~WK1p1R7CFzmzFQcjM~uKrFGi6Lg4y--Uc4PbgiIzMRoXL0U~bxMpWJLm5U0ckgEfu~7gHEZL5ZZdj8zIaBklZYzce7WIxmHIwz-i~JLv5rRlVLCd9Z30azHCG0eYF5bNd93Zy8awvPNjR23DgCcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            ></space-image>
          </div>
        </section>
        <section class="section stats">
          <div class="stats-container">
            <space-content
              heading="Share team inboxes"
              description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
              .options=${[
                'Leverage automation to move fast',
                'Always give customers a human to chat to',
                'Automate customer support and close leads faster',
              ]}
            >
            </space-content>
            <space-image
              class="stats-image"
              alt="A Fully integrated digital agency"
              src="https://s3-alpha-sig.figma.com/img/3899/d721/14198772f41b2a0f189081750c2074e9?Expires=1678060800&Signature=hd0af~hSqStXifEvGtSakFiGjeCf3r24OjRn7964XMfKdrWyQ5S2u45SI-SHEAyDBLrQSxoICNEdupMz1R347Ya1uAKnMjlutvxtynaKDSfQ4UtnCwnhZJxWjGMCIlsAFJBFQ2jiRHCWdR6JK8xQibKgj3ctTTOZgeRJ9ehptclBC7nc7KCntg2qbFUFyL2OSYI~m6q2tJeEX6gI~yH4Hib129Ou1sFFBcmId-vO1DLql8qXCeWcKyWaQx7pIsltdEQuHzkyUhVrB0OpJkpw~aYVaydcuJh8-QZp5i4C8dyY~mX41mEyg6BcIQOpXTNU6ZDg~C4sc2kpekquVV~UlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            ></space-image>
          </div>
        </section>
        <section class="section">
          <space-banner
            heading="Start your 30-day free trial"
            sub-heading="Join over 4,000+ startups already growing with SPACE."
            cta-type="button"
            banner-width="full"
            show-sub-heading=""
            primary-btn-text="Get started"
            secondary-btn-text="Learn more"
          >
          </space-banner>
        </section>

        <section class="section accordion-container">
          <space-section-heading
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="split"
          ></space-section-heading>
          <space-testimony-carousel
            class="carousal"
            type="largeAvatar"
            .options=${[
              {
                src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
                alt: 'Alexander David',
                name: 'Alexander David',
                logoSrc: 'https://i.ibb.co/wMY9d3G/logo.png',
                logoAlt: 'alt',
                description:
                  'Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!',
              },
              {
                src: 'https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400',
                alt: 'Alexander David',
                name: 'Alexander David',
                logoSrc: 'https://i.ibb.co/wMY9d3G/logo.png',
                logoAlt: 'alt',
                description:
                  'Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!',
              },
            ]}
          >
          </space-testimony-carousel>
        </section>
      </main>
      <space-footer-type-ten
        class="footer"
        footer-text="© 2021 SPACE. All rights reserved."
        logo-src="https://i.ibb.co/m8QfWzK/logo.png"
        logo-alt="logo"
        supportive-text="Design amazing digital experiences that create more happy in the world."
        ios-logo-src="https://imgtr.ee/images/2023/02/01/MGUFD.png"
        android-logo-src="https://imgtr.ee/images/2023/02/01/MG96s.png"
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
      </space-footer-type-ten>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-sample-02': Sample;
  }
}
