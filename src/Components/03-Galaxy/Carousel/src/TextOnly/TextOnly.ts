import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import Swiper, { Navigation } from 'swiper';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';
import styles from './TextOnly.scss.lit';

export interface TextOnlyOptions {
  heading: string;
  description: string;
}

Swiper.use([Navigation]);

@customElement('space-text-only')
export class TextOnly extends LitElement {
  static styles = [styles];

  options: Array<TextOnlyOptions> = [];

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

  render() {
    return html`
      <div class="container">
        <div class="swiper">
          <ul class="swiper-wrapper wrapper-container">
            ${map(this.options, option => {
              const { heading, description } = option;

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
                    </div>
                  </div>
                 
                </li>
              `;
            })}
          </ul>
          <div class="pagination-container">
            <space-carousel-arrow
              size="lg"
              class="prev-button"
              color="primaryDark"
              icon-name="chevronLeft"
              @click=${() => this.swiper.slidePrev()}
            ></space-carousel-arrow>
            <space-pagination-indicator
              style="fraction"
              page-size=${1}
              colour="greyLight"
              total=${this.options.length}
              current-page=${this.currentPage}
              class="pagination-dot"
              @onPageChange=${this.onPageChange}
            ></space-pagination-indicator>
            <space-carousel-arrow
              size="lg"
              class="next-button"
              color="primaryDark"
              icon-name="chevronRight"
              @click=${() => this.swiper.slideNext()}
            ></space-carousel-arrow>
          </div>
          <hr class="border" />
        </div>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'space-text-only': TextOnly;
  }
}
