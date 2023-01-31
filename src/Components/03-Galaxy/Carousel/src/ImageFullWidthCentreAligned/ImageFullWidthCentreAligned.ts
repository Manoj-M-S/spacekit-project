import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import Swiper from 'swiper';
import styles from './ImageFullWidthCentreAligned.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';

export interface ImageFullWidthCentreAlignedOption {
  alt: string;
  src: string;
  heading: string;
  ctaTextOne: string;
  ctaTextTwo: string;
  description: string;
}

@customElement('space-image-fullwidth-centre')
export default class ImageFullWidthCentreAligned extends LitElement {
  static styles = [styles];

  options: Array<ImageFullWidthCentreAlignedOption> = [];

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
      spaceBetween: 32,
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.previousButton,
      },
    });

    this.swiper.on('slideChange', swiper => {
      this.currentPage = swiper.snapIndex + 1;
    });
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  handleCustomEvent(eventName: string, data: any) {
    const detail = data;

    const customEvent = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  handleCTAOne = (option: ImageFullWidthCentreAlignedOption) => () => {
    this.handleCustomEvent('onCtaOne', option);
  };

  handleCTATwo = (option: ImageFullWidthCentreAlignedOption) => () => {
    this.handleCustomEvent('onCtaTwo', option);
  };

  render() {
    return html`
      <div class="container">
        <div class="swiper">
        <space-carousel-arrow
                size="lg"
                color="greyLight"
                icon-name="chevronLeft"
                class="arrow-large left"
                @click=${() => this.swiper.slidePrev()}
              ></space-carousel-arrow>
          </space-carousel-arrow>
          <space-carousel-arrow
            size="lg"
            color="greyLight"
            icon-name="chevronRight"
            class="arrow-large right"
            @click=${() => this.swiper.slideNext()}
          ></space-carousel-arrow>
          <ul class="swiper-wrapper wrapper-container">
            ${map(this.options, option => {
              const {
                src,
                heading,
                ctaTextOne,
                ctaTextTwo,
                description,
                alt = heading,
              } = option;
              return html`
                <li class="inner-container swiper-slide">
                  <div class="text-container">
                    ${heading
                      ? html`<h1 class="heading">${heading}</h1>`
                      : null}
                    ${description
                      ? html`<p class="description">${description}</p>`
                      : null}
                    <div class="cta-container">
                      ${ctaTextOne
                        ? html`
                            <space-button
                              @click=${this.handleCTAOne(option)}
                              button-variant="secondary"
                              class="cta-btn"
                              >${ctaTextOne}</space-button
                            >
                          `
                        : null}
                      ${ctaTextTwo
                        ? html`
                            <space-button
                              button-variant="primary"
                              @click=${this.handleCTAOne}
                              class="cta-btn"
                              >${ctaTextTwo}</space-button
                            >
                          `
                        : null}
                    </div>
                  </div>
                  ${src && alt
                    ? html`<space-image
                        class="image"
                        src=${src}
                        alt=${alt}
                      ></space-image>`
                    : null}
                </li>
              `;
            })}
          </ul>

          <div class="pagination-container">
            <div class="arrow-container">
              <space-carousel-arrow
                size="lg"
                color="greyLight"
                icon-name="chevronLeft"
                class="arrow-small"
                @click=${() => this.swiper.slidePrev()}
              ></space-carousel-arrow>
              <space-carousel-arrow
                size="lg"
                color="greyLight"
                icon-name="chevronRight"
                class="arrow-small"
                @click=${() => this.swiper.slideNext()}
              ></space-carousel-arrow>
            </div>
            <space-pagination-indicator
              style="dash"
              page-size=${1}
              colour="greyDark"
              total=${this.options.length}
              current-page=${this.currentPage}
              @onPageChange=${({ detail }: any) => {
                const { pageNumber } = detail;

                this.currentPage = pageNumber;
                this.swiper.slideTo(pageNumber - 1);
              }}
            ></space-pagination-indicator>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-image-fullwidth-centre': ImageFullWidthCentreAligned;
  }
}
