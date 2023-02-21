import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import styles from './ImagesAndVideoWithDescription.scss.lit';
import { map } from 'lit/directives/map.js';
import Swiper from 'swiper';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/Link/src/Link';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';

export type SrcType = 'image' | 'video';

export interface ImagesAndVideoWithDescriptionOptions {
  alt: string;
  src: string;
  heading: string;
  srcType: SrcType;
  linkHref: string;
  linkText: string;
  iconName: string;
  description: string;
}

@customElement('space-images-video-description')
export class ImagesAndVideoWithDescription extends LitElement {
  static styles = [styles];
  options: Array<ImagesAndVideoWithDescriptionOptions> = [];

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
        color="primaryLight"
        icon-name="chevronLeft"
        @click=${() => this.swiper.slidePrev()}
      ></space-carousel-arrow>

      <space-carousel-arrow
        size="lg"
        color="primaryLight"
        icon-name="chevronRight"
        @click=${() => this.swiper.slideNext()}
      ></space-carousel-arrow>
    `;
  }

  render() {
    return html`
      <div class="container">
        <space-carousel-arrow
          size="lg"
          color="primaryLight"
          icon-name="chevronLeft"
          class="prev-button"
          @click=${() => this.swiper.slidePrev()}
        ></space-carousel-arrow>
        <div class="swiper">
          <ul class="swiper-wrapper wrapper-container">
            ${map(
              this.options,
              ({
                src,
                heading,
                linkHref,
                linkText,
                description,
                alt = heading,
                srcType = 'image',
                iconName = 'arrowUpRight',
              }) => {
                return html`
                  <li class="inner-container swiper-slide">
                    <div class="text-container">
                      ${heading
                        ? html`<h1 class="heading">${heading}</h1>`
                        : null}
                      <div>
                        ${description
                          ? html`<p class="description">${description}</p>`
                          : null}
                        ${linkHref
                          ? html`<a class="cta" href=${linkHref}
                              >${linkText}
                              ${iconName
                                ? html`<space-icon
                                    class="cta-icon"
                                    icon-name=${iconName}
                                  ></space-icon>`
                                : null}
                            </a>`
                          : null}
                      </div>
                    </div>
                    ${src && srcType === 'image'
                      ? html`<space-image
                          class="image"
                          src=${src}
                          alt=${alt}
                        ></space-image>`
                      : html`
                          <video controls>
                            <source src=${src} />
                          </video>
                        `}
                  </li>
                `;
              }
            )}
          </ul>

          <div class="pagination-container">${this.renderPagination()}</div>
        </div>

        <space-carousel-arrow
          size="lg"
          color="primaryLight"
          icon-name="chevronRight"
          class="next-button"
          @click=${() => this.swiper.slideNext()}
        ></space-carousel-arrow>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'space-images-video-description': ImagesAndVideoWithDescription;
  }
}
