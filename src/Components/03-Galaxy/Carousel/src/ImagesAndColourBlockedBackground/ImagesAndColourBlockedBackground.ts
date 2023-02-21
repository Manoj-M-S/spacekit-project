import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import styles from './ImagesAndColourBlockedBackground.scss.lit';
import '../../../../01-stars/Image/src/Image';
import { map } from 'lit/directives/map.js';
import Swiper from 'swiper';
import '../../../../02-Constellations/Pagination/src/IndicatorBase/PaginationIndicatorBase';
import '../../../../01-stars/button/src/Button';

export interface ImagesAndColourBlockedBackgroundOptions {
  src: string;
  alt: string;
}
@customElement('space-images-colour-blocked-background')
export class ImagesAndColourBlockedBackground extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options: Array<ImagesAndColourBlockedBackgroundOptions> = [];

  /** @attr heading */
  @property()
  heading!: string;

  /** @attr cta-text */
  @property({
    attribute: 'cta-text',
  })
  ctaText!: string;

  /** @attr src */
  @property()
  src!: string;

  /** @attr ALT */
  @property()
  alt!: string;

  @query('.swiper')
  swiperEl!: HTMLElement;

  @state()
  swiper!: Swiper;

  @state()
  currentPage = 1;

  firstUpdated() {
    this.swiper = new Swiper(this.swiperEl, {
      spaceBetween: 32,
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
      <space-pagination-indicator
        style="dot"
        page-size=${1}
        colour="primaryLight"
        total=${this.options.length}
        current-page=${this.currentPage}
        @onPageChange=${({ detail }: any) => {
          const { pageNumber } = detail;

          this.currentPage = pageNumber;
          this.swiper.slideTo(pageNumber - 1);
        }}
      ></space-pagination-indicator>
    `;
  }

  handleCta() {
    const customEvent = new CustomEvent('onClickCTA', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  render() {
    return html`
      <div class="container">
        <div class="text-container">
          ${this.heading
            ? html` <h1 class="heading">${this.heading}</h1> `
            : null}
          ${this.ctaText
            ? html`
                <space-button
                  class="cta"
                  iconaftertext
                  button-size="lg"
                  iconname="arrowRight"
                  button-variant="secondary"
                  @click=${this.handleCta}
                  >${this.ctaText}</space-button
                >
              `
            : null}
        </div>
        <div class="container-one">
          <div class="swiper">
            <ul class="swiper-wrapper wrapper-container">
              ${map(this.options, ({ src, alt = this.heading }) => {
                return html`
                  <li class="inner-container swiper-slide">
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
            <div class="pagination">${this.renderPagination()}</div>
          </div>
        </div>
        <div class="pagination small">${this.renderPagination()}</div>
        <div class="container-two">
          ${this.src && this.alt
            ? html`<space-image
                class="image"
                src=${this.src}
                alt=${this.alt}
              ></space-image>`
            : null}
        </div>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'space-images-colour-blocked-background': ImagesAndColourBlockedBackground;
  }
}
