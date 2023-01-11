import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './CarouselArrow.scss.lit';
import '../../../../01-stars/Icon/src/Icon';
import { classMap } from 'lit/directives/class-map.js';

export type CarouselArrowSizeType = 'md' | 'lg';
export type CarouselArrowColorType =
  | 'primaryLight'
  | 'primaryDark'
  | 'greyLight'
  | 'greyDark';

@customElement('space-carousel-arrow')
export default class CarouselArrow extends LitElement {
  static styles = [styles];

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  /** @attr size */
  @property()
  size: CarouselArrowSizeType = 'md';

  /** @attr disabled */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /** @attr color */
  @property()
  color: CarouselArrowColorType = 'primaryLight';

  render() {
    const carouselArrowClass = {
      'carousel-button': true,
      [`carousel-button-size-${this.size}`]: this.size,
      [`carousel-button-color-${this.color}`]: this.color,
    };

    return html`
      <button
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled}
        class=${classMap(carouselArrowClass)}
      >
        <space-icon
          class="carousel-button-icon"
          icon-name=${this.iconName}
        ></space-icon>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-carousel-arrow': CarouselArrow;
  }
}
