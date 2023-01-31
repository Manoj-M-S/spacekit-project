import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/button/src/Button';
import '../../../01-stars/Image/src/Image';
import '../../../01-stars/Link/src/Link';
import styles from './TeamSections.scss.lit';
import '../../../01-stars/Avatar/src/Avatar';
import Swiper, { Navigation } from 'swiper';
import '../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';

export type TeamSectionThemeType = 'default' | 'greyLight';
export const teamSectionVariationType = [
  'simple_01',
  'simple_02',
  'simple_03',
  'imageCard_01',
  'imageCard_02',
  'imageCard_04',
] as const;

export interface TeamSectionsSocialIconType {
  href: string;
  iconName: string;
}

export interface TeamSectionsOptionsType {
  alt: string;
  src: string;
  name: string;
  role: string;
  description: string;
  socialIcons: TeamSectionsSocialIconType[];
}

export type TeamSectionVariationType = typeof teamSectionVariationType[number];

Swiper.use([Navigation]);

@customElement('space-team-sections')
export default class TeamSections extends LitElement {
  static styles = [styles];

  /** @attr theme */
  @property()
  theme: TeamSectionThemeType = 'default';

  /** @attr type */
  @property()
  type: TeamSectionVariationType = 'simple_01';

  /** @attr heading */
  @property()
  heading!: string;

  /** @attr description */
  @property()
  description!: string;

  /** @attr sub-heading */
  @property({ attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr btn-text-one */
  @property({ attribute: 'btn-text-one' })
  btnTextOne!: string;

  /** @attr btn-text-two */
  @property({ attribute: 'btn-text-two' })
  btnTextTwo!: string;

  /** @attr options */
  @property({ type: Array })
  options: TeamSectionsOptionsType[] = [];

  @state()
  swiper!: Swiper;

  @query('.swiper')
  swiperEl!: HTMLElement;

  @query('.next-btn')
  nextBtn!: HTMLElement;

  @query('.prev-btn')
  prevBtn!: HTMLElement;

  @state()
  swiperTypes = ['imageCard_04'];

  firstUpdated() {
    if (this.swiperTypes.includes(this.type)) {
      this.swiper = new Swiper(this.swiperEl, {
        navigation: {
          nextEl: this.nextBtn,
          prevEl: this.prevBtn,
        },
        breakpoints: {
          320: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          460: {
            slidesPerView: 2.3,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 3.3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3.6,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4.3,
            spaceBetween: 32,
          },
        },
      });
    }
  }

  disconnectedCallback(): void {
    this.swiper.destroy();
  }

  render() {
    const teamSectionClass = {
      'team-section': true,
      [`team-section-theme-${this.theme}`]: this.theme,
      [`team-section-type-${this.type}`]: this.type,
    };

    const swiperClass = {
      'team-section-list-container': true,
      'swiper': this.swiperTypes.includes(this.type),
    };

    return html`
      <div class=${classMap(teamSectionClass)}>
        <div class="team-section-heading-container">
          <div>
            ${this.subHeading
              ? html`<p class="team-section-sub-heading">${this.subHeading}</p>`
              : null}
            ${this.heading
              ? html`<h3 class="team-section-heading">${this.heading}</h3>`
              : null}
            ${this.description
              ? html`<p class="team-section-description">
                  ${this.description}
                </p>`
              : null}
          </div>
          <div class="team-section-cta-container">
            ${this.btnTextOne
              ? html` <space-button
                  button-size="xl"
                  button-variant="secondary"
                  class="team-section-cta-btn"
                >
                  ${this.btnTextOne}
                </space-button>`
              : null}
            ${this.btnTextTwo
              ? html`<space-button
                  button-size="xl"
                  button-variant="primary"
                  class="team-section-cta-btn"
                >
                  ${this.btnTextTwo}</space-button
                >`
              : null}
          </div>
        </div>

        <div class=${classMap(swiperClass)}>
          <ul class="team-section-list swiper-wrapper">
            ${map(
              this.options,
              ({
                name,
                src,
                alt = name,
                role,
                description,
                socialIcons,
              }) => html`
                <li class="team-section-list-item swiper-slide">
                  ${src && alt
                    ? html` <div class="team-section-list-image-container">
                        ${this.type.startsWith('simple_')
                          ? html` <space-avatar
                              src=${src}
                              alt=${alt}
                              size="xl"
                            ></space-avatar>`
                          : html`
                              <space-image
                                src=${src}
                                alt=${alt}
                                class="team-section-list-image"
                              ></space-image>
                            `}
                      </div>`
                    : null}
                  <div class="team-section-list-item-heading-container">
                    ${name
                      ? html`<h6 class="team-section-list-name">${name}</h6>`
                      : null}
                    ${role
                      ? html`<p class="team-section-list-role">${role}</p>`
                      : null}
                    ${description
                      ? html`<p class="team-section-list-description">
                          ${description}
                        </p>`
                      : null}
                    ${socialIcons
                      ? html`
                          <ul class="team-section-social-list">
                            ${map(
                              socialIcons,
                              ({ href, iconName }) => html`
                                <li>
                                  <space-link
                                    href=${href}
                                    iconname=${iconName}
                                    class="team-section-social-icon-item"
                                  ></space-link>
                                </li>
                              `
                            )}
                          </ul>
                        `
                      : null}
                  </div>
                </li>
              `
            )}
          </ul>

          ${this.swiperTypes.includes(this.type)
            ? html`<div class="team-section-nav-buttons">
                <space-carousel-arrow
                  color="greyDark"
                  icon-name="chevronLeft"
                  class="prev-btn"
                ></space-carousel-arrow>
                <space-carousel-arrow
                  color="greyDark"
                  icon-name="chevronRight"
                  class="next-btn"
                ></space-carousel-arrow>
              </div>`
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-team-sections': TeamSections;
  }
}
