import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import Swiper from 'swiper';
import { SrcType } from '../ImagesAndVideoWithDescription/ImagesAndVideoWithDescription';

import styles from './Images&VideosSlideshow.scss.lit';

export interface ImagesVideosSlideshowOptions {
  alt: string;
  src: string;
  srcType: SrcType;
}

@customElement('space-images-videos-slideshow')
export class ImagesVideosSlideshow extends LitElement {
  static styles = [styles];

  @property()
  options: Array<ImagesVideosSlideshowOptions> = [];

  /** @attr heading */
  @property()
  heading!: string;

  /** @attr  description */
  @property()
  description!: string;

  /**  @attr icon-name */
  @property({ attribute: 'icon-name' })
  iconName: string = 'playCircle';

  /**  @attr src */
  @property()
  src!: string;

  /**  @attr alt */
  @property()
  alt!: string;

  /**  @attr cta-text */
  @property({ attribute: 'cta-text' })
  ctaText!: string;

  /** @attr src-type */
  @property()
  srcType: SrcType = 'image';

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
          slidesPerView: 3,
          spaceBetween: 8,
        },
        460: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  handleCta() {
    const customEvent = new CustomEvent('onCta', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  render() {
    return html`
      <div class="container">
        <div class="image-container">
          ${this.src && this.alt && this.srcType === 'image'
            ? html`
                <space-image
                  class="image"
                  src=${this.src}
                  alt=${this.alt}
                ></space-image>
              `
            : html`
                <video>
                  <source class="image" src=${this.src} />
                </video>
              `}
          <div class="text-container">
            ${this.heading
              ? html` <h1 class="heading">${this.heading}</h1> `
              : null}
            ${this.description
              ? html` <p class="description">${this.description}</p> `
              : null}
            ${this.ctaText
              ? html`
                  <space-button
                    class="cta"
                    iconaftertext
                    button-size="md"
                    button-variant="primary"
                    iconname=${this.iconName}
                    @click=${this.handleCta}
                    >${this.ctaText}</space-button
                  >
                `
              : null}
          </div>
        </div>
        <div class="images-container">
          <space-carousel-arrow
            size="lg"
            color="primaryLight"
            icon-name="chevronLeft"
            class="navigation-button left"
            @click=${() => this.swiper.slidePrev()}
          ></space-carousel-arrow>

          <div class="swiper">
            <ul class="swiper-wrapper">
              ${map(
                this.options,
                ({ src, alt, srcType = 'image' }) => html`
                  <li class="swiper-slide">
                    ${src && alt && srcType === 'image'
                      ? html`
                          <space-image
                            class="image"
                            src=${src}
                            alt=${alt}
                          ></space-image>
                        `
                      : html`
                          <video class="image">
                            <source src=${src} />
                          </video>
                        `}
                  </li>
                `
              )}
            </ul>
          </div>
          <space-carousel-arrow
            size="lg"
            color="primaryLight"
            icon-name="chevronRight"
            class="navigation-button right"
            @click=${() => this.swiper.slideNext()}
          ></space-carousel-arrow>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-images-videos-slideshow': ImagesVideosSlideshow;
  }
}
