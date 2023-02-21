import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import Swiper from 'swiper';
import styles from './ImageWithTitleAndDescription.scss.lit';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';
import { map } from 'lit/directives/map.js';
import '../../../../01-stars/Link/src/Link';
import '../../../../01-stars/Image/src/Image';

export interface ImageWithTitleAndDescriptionOptions {
  alt: string;
  src: string;
  heading: string;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionHeadingOne: string;
  descriptionHeadingTwo: string;
}

@customElement('space-image-title-description')
export class ImageWithTitleAndDescription extends LitElement {
  static styles = [styles];

  options: Array<ImageWithTitleAndDescriptionOptions> = [];

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

  render() {
    return html`
      <div class="container">
        <div class="swiper">
          <ul class="swiper-wrapper wrapper-container">
            ${map(
              this.options,
              ({
                src,
                heading,
                alt = heading,
                descriptionHeadingOne,
                descriptionHeadingTwo,
                descriptionOne,
                descriptionTwo,
              }) => html`
                <li class="inner-container swiper-slide">
                  <div class="text-container">
                    ${heading
                      ? html`<h1 class="heading">${heading}</h1>`
                      : null}
                    <div class="description-container">
                      <div>
                        ${descriptionHeadingOne
                          ? html`
                              <h5 class="description-heading">
                                ${descriptionHeadingOne}
                              </h5>
                            `
                          : null}
                        ${descriptionOne
                          ? html` <p class="description">${descriptionOne}</p> `
                          : null}
                      </div>
                      <div>
                        ${descriptionHeadingTwo
                          ? html`
                              <h5 class="description-heading">
                                ${descriptionHeadingTwo}
                              </h5>
                            `
                          : null}
                        ${descriptionTwo
                          ? html` <p class="description">${descriptionTwo}</p> `
                          : null}
                      </div>
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
          <div class="pagination-container">
            <space-pagination-indicator
              style="dash"
              page-size=${1}
              colour="greyLight"
              total=${this.options.length}
              current-page=${this.currentPage}
              @onPageChange=${({ detail }: any) => {
                const { pageNumber } = detail;

                this.currentPage = pageNumber;
                this.swiper.slideTo(pageNumber - 1);
              }}
            ></space-pagination-indicator>
            <div class="pagination-arrow-container">
              <space-carousel-arrow
                size="lg"
                color="greyDark"
                icon-name="chevronLeft"
                @click=${() => this.swiper.slidePrev()}
              ></space-carousel-arrow>
              <space-carousel-arrow
                size="lg"
                color="greyDark"
                icon-name="chevronRight"
                @click=${() => this.swiper.slideNext()}
              ></space-carousel-arrow>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-image-title-description': ImageWithTitleAndDescription;
  }
}
