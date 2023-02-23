import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import Swiper from 'swiper';
import styles from './TestimonyCarousel.scss.lit';
import '../../../01-stars/Image/src/Image';
import '../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import '../../../01-stars/Avatar/src/Avatar';
import '../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';

export type TestimonialCarousalType =
  | 'largeAvatar'
  | 'centerAligned'
  | 'simple'
  | 'withCompanyLogo';

export interface TestimonialCarousalOptionsType {
  /** src */
  src?: string;
  /** alt */
  alt?: string;
  /** name */
  name?: string;
  /** logo src */
  logoSrc?: string;
  /** logo alt */
  logoAlt?: string;
  /** designation */
  designation?: string;
  /** description */
  description?: string;
  /** icon name */
  iconName: string;
}

@customElement('space-testimony-carousel')
export class TestimonyCarousel extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options: TestimonialCarousalOptionsType[] = [];

  /** @attr type */
  @property()
  type: TestimonialCarousalType = 'largeAvatar';

  @query('.swiper')
  swiperEl!: HTMLElement;

  @state()
  swiper!: Swiper;

  @query('.next-btn')
  nextButton!: HTMLElement;

  @query('.prev-button')
  previousButton!: HTMLElement;

  @state()
  currentPage = 1;

  firstUpdated() {
    this.swiper = new Swiper(this.swiperEl, {
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.previousButton,
      },
      spaceBetween: 32,
    });

    this.swiper.on('slideChange', swiper => {
      this.currentPage = swiper.snapIndex + 1;
    });
  }

  onPageChange(event: CustomEvent) {
    const { pageNumber } = event.detail;
    this.swiper.slideTo(pageNumber - 1);
  }

  render() {
    const testimonialCarousal = {
      [`testimony-type-${this.type}`]: this.type,
    };

    return html`
      <div class="testimony swiper ${classMap(testimonialCarousal)}">
        <ul class="swiper-wrapper ${classMap(testimonialCarousal)}">
          ${map(this.options, option => {
            const {
              src,
              alt,
              name,
              logoSrc,
              logoAlt,
              iconName,
              description,
              designation,
            } = option;

            return html`
              <li
                class="swiper-slide testimony-list-item ${classMap(
                  testimonialCarousal
                )}"
              >
                ${this.type === 'withCompanyLogo' && logoAlt && logoSrc
                  ? html`<space-image
                      src=${logoSrc}
                      alt=${logoAlt}
                      class="logo"
                    ></space-image>`
                  : null}
                ${this.type === 'largeAvatar' && src && alt
                  ? html`<space-image
                      src=${src}
                      alt=${alt}
                      class="large-image"
                    ></space-image>`
                  : null}
                ${!['largeAvatar', 'withCompanyLogo'].includes(this.type) &&
                src &&
                alt
                  ? html`<space-avatar
                      size="3xl"
                      src=${src}
                      alt=${alt}
                      class="avatar"
                    ></space-avatar>`
                  : null}
                <div class="text-container">
                  ${this.type === 'largeAvatar'
                    ? html`
                        <space-icon
                          class="icon"
                          icon-name=${iconName}
                        ></space-icon>
                      `
                    : null}
                  ${description
                    ? html` <p class="description">${description}</p> `
                    : null}
                  ${this.type === 'withCompanyLogo' && src && alt
                    ? html`<space-avatar
                        size="2xl"
                        src=${src}
                        alt=${alt}
                        class="avatar"
                      ></space-avatar>`
                    : null}
                  ${name ? html` <p class="name">${name}</p> ` : null}
                  ${designation
                    ? html` <p class="designation">${designation}</p> `
                    : null}
                </div>
              </li>
            `;
          })}
        </ul>
        ${!['withCompanyLogo'].includes(this.type)
          ? html`<div class="carousal-container">
              <space-carousel-arrow
                size="md"
                color="primaryLight"
                icon-name="chevronLeft"
                @click=${() => this.swiper.slidePrev()}
              ></space-carousel-arrow>

              <space-carousel-arrow
                size="md"
                color="primaryLight"
                icon-name="chevronRight"
                @click=${() => this.swiper.slideNext()}
              ></space-carousel-arrow>
            </div>`
          : html`
              <space-pagination-indicator
                style="dot"
                page-size=${1}
                current-page=${this.currentPage}
                @onPageChange=${this.onPageChange}
                total=${this.options.length}
                class="pagination"
              ></space-pagination-indicator>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-testimony-carousel': TestimonyCarousel;
  }
}
