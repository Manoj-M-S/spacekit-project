import { html, LitElement, PropertyValueMap } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { map } from 'lit-html/directives/map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import Swiper, { Navigation, SwiperOptions } from 'swiper';
import type {
  PricingCardColorType,
  PricingCardType,
} from '../../../../02-Constellations/Cards/src/PricingCard/PricingCard';
import '../../../../02-Constellations/Pagination/src/CarouselArrow/CarouselArrow';
import { CardPatternType } from '../IconCard/IconCardPattern';
import styles from './PriceCardPattern.scss.lit';
import '../../../../02-Constellations/Cards/src/PricingCard/PricingCard';

Swiper.use([Navigation]);

@customElement('space-pricecard-pattern')
export class PriceCardPattern extends LitElement {
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

  initialiseSwiper() {
    let desktopPoint = 4.3;
    switch (this.cardType) {
      case 'longFeatureList':
        desktopPoint = 2.2;
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
          slidesPerView: desktopPoint,
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
    if (_changedProperties.get('cardType')) this.initialiseSwiper();
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  /** @attr colour */
  @property()
  colour: PricingCardColorType = 'light';

  /** @attr card-type */
  @property({ type: String, attribute: 'card-type' })
  cardType: PricingCardType = 'icon';

  renderList() {
    const sliceOption = this.cardType !== 'longFeatureList' ? 3 : 2;

    this.options =
      this.type === 'carousel'
        ? this.options.slice(0)
        : this.options.slice(0, sliceOption);

    return html`${map(this.options, item => {
      const {
        label,
        price,
        planName,
        iconName,
        headingOne,
        headingTwo,
        buttonText,
        featuresList,
        priceDescription,
      } = item;

      return html`
        <li class="swiper-slide">
          <space-pricing-card
            label=${label}
            price=${price}
            class="pricing-card"
            icon-name=${iconName}
            colour=${this.colour}
            plan-name=${planName}
            button-text=${buttonText}
            heading-one=${headingOne}
            heading-two=${headingTwo}
            card-type=${this.cardType}
            .featuresList=${featuresList}
            price-description=${priceDescription}
          >
          </space-pricing-card>
        </li>
      `;
    })}`;
  }

  render() {
    const priceCardClass = {
      'price-card-pattern': true,
      [`price-card-pattern-type-${this.type}`]: this.cardType,
    };

    return html`<div class=${classMap(priceCardClass)}>
      ${this.type === 'simple'
        ? html`<ul class="price-card-pattern-list">
            ${this.renderList()}
          </ul>`
        : html`
            <div class="swiper">
              <div class="swiper-wrapper">${this.renderList()}</div>
            </div>
            <div class="price-card-pattern-button-container">
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
    'space-pricecard-pattern': PriceCardPattern;
  }
}
