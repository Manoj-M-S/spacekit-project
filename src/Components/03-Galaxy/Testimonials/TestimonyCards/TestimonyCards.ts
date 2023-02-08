import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import Swiper from 'swiper';
import '../../../02-Constellations/Cards';
import { PeopleCardSize } from '../../../02-Constellations/Cards';
import styles from './TestimonyCards.scss.lit';
import '../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';

export type TestimonialCardType = 'simple' | 'carousal';

@customElement('space-testimonial-card')
export default class TestimonyCards extends LitElement {
  static styles = [styles];

  /** @attr size */
  @property()
  size: PeopleCardSize = 'md';

  /** @attr type */
  @property()
  type: TestimonialCardType = 'carousal';

  /** @attr options */
  @property()
  options: any[] = [];

  @query('.swiper')
  swiperEl!: HTMLElement;

  @state()
  swiper!: Swiper;

  @query('.next-btn')
  nextButton!: HTMLElement;

  @query('.prev-button')
  previousButton!: HTMLElement;

  firstUpdated() {
    if (this.type === 'carousal') {
      this.swiper = new Swiper(this.swiperEl, {
        navigation: {
          nextEl: this.nextButton,
          prevEl: this.previousButton,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: this.size === 'sm' ? 2.3 : 1.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: this.size === 'sm' ? 3.3 : 2.3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: this.size === 'sm' ? 4.3 : 3.3,
            spaceBetween: 32,
          },
        },
      });
    }
  }

  render() {
    const testimonyClass = {
      'testimony': true,
      'swiper-wrapper': true,
      [`testimony-type-${this.type}`]: this.type,
    };
    if (this.type === 'simple') this.options = this.options.slice(0, 4);

    return html`
      <div class="swiper">
        <ul class=${classMap(testimonyClass)}>
          ${map(this.options, option => {
            const {
              name,
              type,
              imageSrc,
              imageAlt,
              avatarSrc,
              avatarAlt,
              socialLinks,
              destination,
              description,
            } = option;

            const testimonyListItemClass = {
              'testimony-list': true,
              'swiper-slide': this.type === 'carousal',
            };

            return html`
              <li class=${classMap(testimonyListItemClass)}>
                <space-people-card
                  size=${this.size}
                  type=${type}
                  name=${name}
                  image-src=${imageSrc}
                  image-alt=${imageAlt}
                  avatar-src=${avatarSrc}
                  avatar-alt=${avatarAlt}
                  destination=${destination}
                  description=${description}
                  .socialLinks=${socialLinks}
                ></space-people-card>
              </li>
            `;
          })}
        </ul>
        ${this.type === 'carousal'
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
          : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-testimonial-card': TestimonyCards;
  }
}
