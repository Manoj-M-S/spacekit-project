import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import Swiper, { Navigation, SwiperOptions } from 'swiper';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import { IconCardAlignment } from '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import '../../../../02-Constellations/Slider/src/Slider';
import styles from './IconCardPattern.scss.lit';

export type CardPatternType = 'simple' | 'carousel';

Swiper.use([Navigation]);

@customElement('space-iconcard-pattern')
export class IconCardPattern extends LitElement {
  static styles = [styles];

  /** @attr type */
  @property()
  type: CardPatternType = 'carousel';

  /**  @attr options */
  @property()
  options: any[] = [];

  /** @attr alignment */
  @property()
  alignment!: IconCardAlignment;

  @state()
  swiper!: Swiper;

  @query('.swiper')
  swiperEl!: HTMLElement;

  @query('.next-button')
  nextBtnEl!: HTMLElement;

  @query('.prev-button')
  prevBtnEl!: HTMLElement;

  firstUpdated() {
    this.swiper = new Swiper(this.swiperEl, {
      navigation: {
        nextEl: this.nextBtnEl,
        prevEl: this.prevBtnEl,
      },
      spaceBetween: 32,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 2.3,
        },
      },
    });
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  renderList() {
    const sliceOption = this.type === 'simple' ? 4 : undefined;

    return html`${map(this.options.slice(0, sliceOption), item => {
      const {
        iconName,
        ctaText,
        ctaHref,
        supportText,
        headingText,
        container,
      } = item;
      return html`
        <li class="swiper-slide">
          <space-icon-card
            cta-href=${ctaHref}
            cta-text=${ctaText}
            icon-name=${iconName}
            ?container=${container}
            head-text=${headingText}
            support-text=${supportText}
            alignment=${this.alignment}
          ></space-icon-card>
        </li>
      `;
    })}`;
  }

  render() {
    const iconCardClass = {
      'icon-card-pattern': true,
      [`icon-card-pattern-type-${this.type}`]: this.type,
    };

    return html`<div class=${classMap(iconCardClass)}>
      ${this.type === 'simple'
        ? html`<ul class="icon-card-pattern-list">
            ${this.renderList()}
          </ul>`
        : html`
            <div class="swiper">
              <div class="swiper-wrapper">${this.renderList()}</div>
            </div>
            <div class="icon-card-pattern-button-container">
              <space-carousel-arrow
                class="prev-button"
                icon-name="chevronLeft"
                color="primaryDark"
              ></space-carousel-arrow>
              <space-carousel-arrow
                class="next-button"
                icon-name="chevronRight"
              ></space-carousel-arrow>
            </div>
          `}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-iconcard-pattern': IconCardPattern;
  }
}
