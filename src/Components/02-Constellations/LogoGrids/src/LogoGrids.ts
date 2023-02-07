import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import styles from './LogoGrids.scss.lit';
import '../../../01-stars/Image/src/Image';
import Swiper from 'swiper';
import '../../Pagination/src/CarouselArrow/CarouselArrow';

export type LogoGridType = 'carousel' | 'logo_4' | 'logo_5' | 'logo_6';

export interface LogoGridOption {
  /** src */
  src: string;
  /** alt */
  alt: string;
}

@customElement('space-logo-grids')
export default class LogoGrids extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options: LogoGridOption[] = [];

  /** @attr title */
  @property()
  title!: string;

  /** @attr description */
  @property()
  description!: string;

  /** @attr type */
  @property()
  type: LogoGridType = 'logo_4';

  @query('.swiper')
  swiperEl!: HTMLElement;

  @state()
  swiper!: Swiper;

  @query('.next-btn')
  nextButton!: HTMLElement;

  @query('.prev-button')
  previousButton!: HTMLElement;

  firstUpdated() {
    this.swiper = new Swiper(this.swiperEl, {
      spaceBetween: 32,

      navigation: {
        nextEl: this.nextButton,
        prevEl: this.previousButton,
      },
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6.2,
          spaceBetween: 40,
        },
      },
    });
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  render() {
    const logoGridClass = {
      logogrid: 'true',
      swiper: this.type === 'carousel',
      [`logogrid-type-${this.type}`]: this.type,
    };

    return html`
      <div class=${classMap(logoGridClass)}>
        ${this.title ? html` <h1 class="title">${this.title}</h1> ` : null}
        ${this.description
          ? html` <p class="description">${this.description}</p> `
          : null}

        <ul class="logo-grid-container swiper-wrapper">
          ${map(
            this.options,
            ({ src, alt }) =>
              html`
                <li class="swiper-slide">
                  <space-image
                    src=${src}
                    alt=${alt}
                    class="logo-grid-image"
                  ></space-image>
                </li>
              `
          )}
        </ul>
        ${this.type === 'carousel'
          ? html`
              <div class="pagination-arrow-container">
                <space-carousel-arrow
                  size="lg"
                  class="prev-button"
                  color="primaryDark"
                  icon-name="chevronLeft"
                  @click=${() => this.swiper.slidePrev()}
                ></space-carousel-arrow>
                <space-carousel-arrow
                  size="lg"
                  class="next-button"
                  color="primaryDark"
                  icon-name="chevronRight"
                  @click=${() => this.swiper.slideNext()}
                ></space-carousel-arrow>
              </div>
            `
          : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-logo-grids': LogoGrids;
  }
}
