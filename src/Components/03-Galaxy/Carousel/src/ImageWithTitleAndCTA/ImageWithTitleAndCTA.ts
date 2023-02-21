import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import Swiper, { Navigation } from 'swiper';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';
import styles from './ImageWithTitleAndCTA.scss.lit';

export interface ImageWithTitleAndCTAOptions {
  alt: string;
  src: string;
  heading: string;
  ctaText: string;
  iconName: string;
  description: string;
}

Swiper.use([Navigation]);

@customElement('space-image-title-cta')
export class ImageWithTitleAndCTA extends LitElement {
  static styles = [styles];
  options: Array<ImageWithTitleAndCTAOptions> = [];

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

  onPageChange({ detail }: any) {
    const { pageNumber } = detail;

    this.currentPage = pageNumber;
    this.swiper.slideTo(pageNumber - 1);
  }

  onCtaHandle = (option: ImageWithTitleAndCTAOptions) => () => {
    const detail = option;

    const customEvent = new CustomEvent('onClickCta', {
      detail,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  };

  renderPagination() {
    return html`
      <space-pagination-indicator
        style="dot"
        page-size=${1}
        colour="greyLight"
        total=${this.options.length}
        current-page=${this.currentPage}
        class="pagination-dot"
        @onPageChange=${this.onPageChange}
      ></space-pagination-indicator>
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
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="pagination-container large">${this.renderPagination()}</div>

        <div class="swiper">
          <ul class="swiper-wrapper wrapper-container">
            ${map(this.options, option => {
              const {
                src,
                heading,
                ctaText,
                description,
                alt = heading,
                iconName = 'chevronRight',
              } = option;

              return html`
                <li class="inner-container swiper-slide">
                  <div class="text-container">
                    ${
                      heading ? html`<h1 class="heading">${heading}</h1>` : null
                    }
                     ${
                       description
                         ? html`<p class="description">${description}</p>`
                         : null
                     }
                     ${
                       ctaText
                         ? html`<space-button
                             class="cta"
                             iconaftertext
                             button-size="xl"
                             iconname=${iconName}
                             button-variant="secondary"
                             @click=${this.onCtaHandle(option)}
                             >${ctaText}</space-button
                           >`
                         : null
                     }
                    </div>
                  </div>
                  ${
                    src && alt
                      ? html`<space-image
                          class="image"
                          src=${src}
                          alt=${alt}
                        ></space-image>`
                      : null
                  }
                </li>
              `;
            })}
          </ul>
          <div class="pagination-container small">
            ${this.renderPagination()}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-image-title-cta': ImageWithTitleAndCTA;
  }
}
