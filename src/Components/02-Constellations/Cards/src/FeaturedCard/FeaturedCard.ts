import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { QuickLinkCardSize } from '../QuickLinkCard/QuickLinkCard';
import styles from './FeaturedCard.scss.lit';

export type FeaturedCardSize = QuickLinkCardSize;
export type FeaturedCardOrientation = 'vertical' | 'horizontal';

@customElement('space-featured-card')
export default class FeaturedCard extends LitElement {
  static styles = [styles];

  /** @attr size */
  @property()
  size: FeaturedCardSize = 'md';

  /** @attr label */
  @property()
  label!: string;

  /** @attr title */
  @property()
  title!: string;

  /** @attr src */
  @property()
  src!: string;

  /** @attr alt */
  @property()
  alt!: string;

  /** @attr orientation */
  @property()
  orientation: FeaturedCardOrientation = 'horizontal';

  /** @attr button-text */
  @property({ type: String, attribute: 'button-text' })
  buttonText!: string;

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  render() {
    const featuredCardClass = {
      'featured-card': true,
      [`featured-card-size-${this.size}`]: this.size,
      [`featured-card-orientation-${this.orientation}`]: this.orientation,
    };

    return html`
      <div class=${classMap(featuredCardClass)}>
        ${this.src && this.alt
          ? html`<space-image
              class="featured-card-image"
              src=${this.src}
              alt=${this.alt}
            ></space-image>`
          : null}

        <div class="featured-card-text-container">
          ${this.label
            ? html`<p class="featured-card-label-text">${this.label}</p>`
            : null}
          ${this.title
            ? html`<h2 class="featured-card-title-text">${this.title}</h2>`
            : null}
          ${this.buttonText
            ? html`<space-button
                iconaftertext
                class="featured-card-cta"
                button-variant="secondary"
                iconname=${this.iconName}
                button-size=${this.size === 'lg' ? 'md' : 'sm'}
                >${this.label}</space-button
              >`
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-featured-card': FeaturedCard;
  }
}
