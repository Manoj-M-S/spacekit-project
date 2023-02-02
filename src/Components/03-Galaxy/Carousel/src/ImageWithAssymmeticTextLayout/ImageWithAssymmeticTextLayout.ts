import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import Swiper, { Navigation } from 'swiper';
import styles from './ImageWithAssymmeticTextLayout.scss.lit';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/Link/src/Link';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';

export interface ImageWithAssymmeticTextLayoutOptions {
  alt: string;
  src: string;
  heading: string;
  linkHref: string;
  linkText: string;
  iconName: string;
  subHeading: string;
  description: string;
}

Swiper.use([Navigation]);
@customElement('space-image-assymmetic-textlayout')
export default class ImageWithAssymmeticTextLayout extends LitElement {
  static styles = [styles];

  options: Array<ImageWithAssymmeticTextLayoutOptions> = [];

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

  renderPagination() {
    return html`
      <space-carousel-arrow
        size="lg"
        color="greyDark"
        icon-name="chevronLeft"
        @click=${() => this.swiper.slidePrev()}
      ></space-carousel-arrow>
      <space-pagination-indicator
        page-size=${1}
        style="fraction"
        colour="greyLight"
        total=${this.options.length}
        current-page=${this.currentPage}
      ></space-pagination-indicator>
      <space-carousel-arrow
        size="lg"
        color="greyDark"
        icon-name="chevronRight"
        @click=${() => this.swiper.slideNext()}
      ></space-carousel-arrow>
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="swiper">
          <ul class="swiper-wrapper wrapper-container">
            ${map(
              this.options,
              ({
                heading,
                src,
                linkHref,
                linkText,
                subHeading,
                alt = heading,
                description,
                iconName = 'arrowRight',
              }) => html`
                <li class="inner-container swiper-slide">
                  <div class="text-container">
                    ${subHeading
                      ? html`<h6 class="sub-heading">${subHeading}</h6>`
                      : null}
                    ${heading
                      ? html`<h1 class="heading">${heading}</h1>`
                      : null}
                    ${description
                      ? html`<p class="description">${description}</p>`
                      : null}
                    ${linkHref
                      ? html`<space-link
                          class="cta"
                          iconaftertext
                          href=${linkHref}
                          iconname=${iconName}
                          >${linkText}</space-link
                        >`
                      : null}
                    <div class="pagination-container pagination-large">
                      ${this.renderPagination()}
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
              `
            )}
          </ul>
          <div class="pagination-container pagination-small">
            ${this.renderPagination()}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-image-assymmetic-textlayout': ImageWithAssymmeticTextLayout;
  }
}
