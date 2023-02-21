import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import Swiper, { Navigation, Scrollbar, SwiperOptions } from 'swiper';
import '../../Cards/src/IconCard/IconCard';
import styles from './Slider.scss.lit';

Swiper.use([Scrollbar, Navigation]);
@customElement('space-slider')
export class Slider extends LitElement {
  static styles = [styles];

  @query('.swiper')
  swiperContainer!: HTMLElement;

  @query('.scrollbar')
  scrollbarEl!: HTMLElement;

  @queryAssignedElements()
  private slideElements!: HTMLElement[];

  @state()
  swiper!: Swiper;

  /** @attr scrollbar */
  @property({ type: Boolean })
  scrollbar: boolean = false;

  /** @attr swiperOptions */
  @property()
  swiperOptions: SwiperOptions = {};

  firstUpdated() {
    super.connectedCallback();
    this.swiper = new Swiper(this.swiperContainer, {
      a11y: { enabled: true },
      watchOverflow: true,
      ...(this.scrollbar && {
        scrollbar: {
          el: this.scrollbarEl,
          draggable: true,
        },
      }),
      ...this.swiperOptions,
    });
  }

  disconnectedCallback() {
    this.swiper.destroy();
  }

  render() {
    return html`
      <div class="swiper">
        <div class="swiper-wrapper">
          <slot></slot>
          ${map(
            this.slideElements,
            element => html`<div class="swiper-slide">${element}</div>`
          )}
        </div>
        <div class="scrollbar"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-slider': Slider;
  }
}
