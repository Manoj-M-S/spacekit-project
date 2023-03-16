import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './BlogPage.scss.lit';
import '../../../03-Galaxy/Footer/src/TypeSeven/TypeSeven';
import '../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../02-Constellations/HeaderMenuItem/HeaderMenuItem';
import '../../../03-Galaxy/Header/src/Header';
import { map } from 'lit/directives/map.js';
import '../../../02-Constellations/Cards/src/QuickLinkCard/QuickLinkCard';
import '../../../03-Galaxy/Banner/src/Banner';
import '../../../03-Galaxy/CardsPattern/src/QuickLink/QuickLinkCardPattern';

@customElement('space-blogpage')
export class BlogPage extends LitElement {
  static styles = [styles];

  quickLinkCardProp = {
    src: 'https://s3-alpha-sig.figma.com/img/2212/efbe/668a2bb364a834fb4e810d31a8ea7d8a?Expires=1678060800&Signature=eeHI7OmDn6gJmQMN0q8sWDA-oE9GEanoa3q0JBhouXXNbcEEUTvxoHf5-ooBeYqeIgBa8VecKod-Iujgx6jiYdWC07zXgpSb-yez9YPVRohAwuzKrkscjiNHIVSI90GB~i7eVzOg~8X4Ym7Fghk8IxglQo6k9JgkpFeOdPH4GYeJMbXdJci~ygZY6Ac6SiC1en1Lj7hXTf-m8lnmB8Y93msR3GYL9G5cQBoPvJseWafWgcfEVnOkFTiARdU0nC0TZ6mmQi~dY9BFVvb6dIrJ2LalvSyY7Aaam5mxzJdTu4lIBOi6TPXFW1O9CieSrkTSQwaNjQXslbLUYtD6NDyjMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'Improve Outreach to Maximise Conversion',
    size: 'md' as const,
    color: 'light' as const,
    ctaText: 'Learn More',
    ctaIconName: 'arrowRight',
    headText: 'Improve Outreach to Maximise Conversion',
    supportText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
  };

  @state()
  quickLinkCardOptions = [
    { ...this.quickLinkCardProp },
    { ...this.quickLinkCardProp },
    { ...this.quickLinkCardProp },
    { ...this.quickLinkCardProp },
    { ...this.quickLinkCardProp },
    { ...this.quickLinkCardProp },
  ];

  @state()
  quickLinkPatternOptions = [
    {
      src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
      alt: 'Improve Outreach to Maximise Conversion',
      ctaText: 'Learn More',
      ctaIconName: 'arrowRight',
      headingText: 'Improve Outreach to Maximise Conversion',
      supportText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
    },
    {
      src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
      alt: 'Improve Outreach to Maximise Conversion',
      ctaText: 'Learn More',
      ctaIconName: 'arrowRight',
      headingText: 'Improve Outreach to Maximise Conversion',
      supportText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
    },
    {
      src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
      alt: 'Improve Outreach to Maximise Conversion',
      ctaText: 'Learn More',
      ctaIconName: 'arrowRight',
      headingText: 'Improve Outreach to Maximise Conversion',
      supportText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
    },
    {
      src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
      alt: 'Improve Outreach to Maximise Conversion',
      ctaText: 'Learn More',
      ctaIconName: 'arrowRight',
      headingText: 'Improve Outreach to Maximise Conversion',
      supportText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
    },
    {
      src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
      alt: 'Improve Outreach to Maximise Conversion',
      ctaText: 'Learn More',
      ctaIconName: 'arrowRight',
      headingText: 'Improve Outreach to Maximise Conversion',
      supportText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
    },
    {
      src: 'https://unsplash.com/photos/iftBhUFfecE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F2ZXN8ZW58MHx8fHwxNjc0MjA3NTk5&force=true&w=1920',
      alt: 'Improve Outreach to Maximise Conversion',
      ctaText: 'Learn More',
      ctaIconName: 'arrowRight',
      headingText: 'Improve Outreach to Maximise Conversion',
      supportText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ultrices quam id sit aliquam.',
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
            class="section-heading"
            size="default"
            head-text="A Fully integrated digital agency"
            support-text="We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services."
            sub-heading="Launch faster"
            orientation="center"
          ></space-section-heading>

          <ul class="quicklink-card-list large">
            ${map(
              this.quickLinkCardOptions,
              ({
                src,
                alt,
                size,
                ctaIconName,
                ctaText,
                headText,
                supportText,
                color,
              }) => html`
                <li class="quicklink-card-list-item">
                  <space-quicklink-card
                    src=${src}
                    alt=${alt}
                    size=${size}
                    color=${color}
                    cta-text=${ctaText}
                    cta-icon-name=${ctaIconName}
                    head-text=${headText}
                    support-text=${supportText}
                  >
                  </space-quicklink-card>
                </li>
              `
            )}
          </ul>
          <space-quicklink-pattern
            .options=${this.quickLinkPatternOptions}
            class="quicklink-card-list small"
            type="carousel"
            size="md"
            color="light"
          ></space-quicklink-pattern>
        </section>
        <section class="section">
          <space-banner
            class="cta-banner"
            heading="Easy &amp; Flexible Engagement model to grow your business."
            sub-heading="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
            cta-type="button"
            banner-width="full"
            banner-image-alt="image"
            banner-image-src="https://www.lotame.com/wp-content/uploads/2021/08/About-Team.png"
            show-sub-heading=""
            primary-btn-text="Talk to Us"
            secondary-btn-text="View our Services"
            cta-image-type="normal"
            input-hint-text="We care about your data in our privacy policy"
          >
          </space-banner>
        </section>
      </main>
      <space-footer-type-seven
        class="footer"
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
        footer-text="© 2021 SPACE. All rights reserved."
        logo-src="https://i.ibb.co/m8QfWzK/logo.png"
        logo-alt="logo"
        title="Join our newsletter"
        supportive-text="We’ll send you a nice letter once per week. No spam."
        input-placeholder="Enter your email"
        btn-label="Subscribe"
      >
      </space-footer-type-seven>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-blogpage': BlogPage;
  }
}
