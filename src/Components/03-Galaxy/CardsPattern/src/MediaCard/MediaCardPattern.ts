import { html, LitElement, PropertyValueMap } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { map } from 'lit-html/directives/map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import Swiper from 'swiper';
import {
  MediaCardOrientation,
  MediaCardSize,
} from '../../../../02-Constellations/Cards';
import { CardPatternType } from '../IconCard/IconCardPattern';
import styles from './MediaCardPattern.scss.lit';
import '../../../../02-Constellations/Cards/src/MediaCard/MediaCard';

@customElement('space-mediacard-pattern')
export default class MediaCardPattern extends LitElement {
  static styles = [styles];
  /** @attr type */
  @property()
  type: CardPatternType = 'carousel';

  /**  @attr options */
  @property()
  options: any[] = [];

  @state()
  swiper!: Swiper;

  @query('.swiper')
  swiperEl!: HTMLElement;

  @query('.next-button')
  nextBtnEl!: HTMLElement;

  @query('.prev-button')
  prevBtnEl!: HTMLElement;

  /** @attr size */
  @property()
  size: MediaCardSize = 'md';

  /** @attr orientation */
  @property()
  orientation: MediaCardOrientation = 'vertical';

  initialiseSwiper() {
    let desktopCount = 0;
    switch (this.size) {
      case 'sm':
        desktopCount = 4.2;
        break;
      case 'md':
        desktopCount = 3.2;
        break;
      case 'lg':
        desktopCount = 2.2;
        break;
    }

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
          slidesPerView: desktopCount,
        },
      },
    });
  }

  firstUpdated() {
    this.initialiseSwiper();
  }

  updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    if (_changedProperties.get('size')) this.initialiseSwiper();
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  renderList() {
    const slicedOption = (end: number) =>
      this.type === 'carousel'
        ? this.options.slice(0)
        : this.options.slice(0, end);

    switch (this.size) {
      case 'sm':
        this.options = slicedOption(4);
        break;
      case 'md':
        this.options = slicedOption(3);
        break;
      case 'lg':
        this.options = slicedOption(2);
        break;
    }

    return html`${map(this.options, item => {
      const {
        src,
        alt,
        container,
        mediaFirst,
        headingText,
        supportText,
        subHeadingText,
      } = item;

      return html`
        <li class="swiper-slide">
          <space-media-card
            src=${src}
            alt=${alt}
            size=${this.size}
            ?container=${container}
            head-text=${headingText}
            ?media-first=${mediaFirst}
            support-text=${supportText}
            sub-heading=${subHeadingText}
            orientation=${this.orientation}
          >
          </space-media-card>
        </li>
      `;
    })}`;
  }

  render() {
    const mediaCardClass = {
      'media-card-pattern': true,
      [`media-card-pattern-type-${this.type}`]: this.type,
    };

    return html`<div class=${classMap(mediaCardClass)}>
      ${this.type === 'simple'
        ? html`<ul class="media-card-pattern-list">
            ${this.renderList()}
          </ul>`
        : html`
            <div class="swiper">
              <div class="swiper-wrapper">${this.renderList()}</div>
            </div>
            <div class="media-card-pattern-button-container">
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
    'space-mediacard-pattern': MediaCardPattern;
  }
}
