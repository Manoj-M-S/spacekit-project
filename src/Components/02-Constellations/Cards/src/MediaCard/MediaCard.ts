import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './MediaCard.scss.lit';

export type MediaCardSize = 'sm' | 'md' | 'lg';
export type MediaCardOrientation = 'vertical' | 'horizontal';
export type MediaCardPosition = 'default' | 'swap';

@customElement('space-media-card')
export class MediaCard extends LitElement {
  static styles = [styles];

  /** @attr src */
  @property()
  src!: string;

  /** @attr alt */
  @property()
  alt!: string;

  /** @attr size */
  @property()
  size!: MediaCardSize;

  /** @attr orientation */
  @property()
  orientation!: MediaCardOrientation;

  /** @attr head-text */
  @property({ type: String, attribute: 'head-text' })
  headText!: string;

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  /** @attr media-first */
  @property({ type: Boolean, attribute: 'media-first' })
  mediaFirst: boolean = true;

  /** @attr container */
  @property({ type: Boolean })
  container!: boolean;

  render() {
    const cardClass = {
      'media-card': true,
      [`media-card-size-${this.size}`]: this.size,
      [`media-card-container`]: this.container,
      [`media-card-position-swap`]: !this.mediaFirst,
      [`media-card-orientation-${this.orientation}`]: this.orientation,
      [`media-card-orientation`]: !this.orientation,
    };
    return html`
      <div class=${classMap(cardClass)}>
        ${this.src && this.alt
          ? html`<img
              class="media-card-image"
              src=${this.src}
              alt=${this.alt}
            />`
          : null}
        <div class="media-card-text-container">
          ${this.subHeading
            ? html`
                <h5 class="media-card-subheading-text">${this.subHeading}</h5>
              `
            : null}
          ${this.headText
            ? html` <h1 class="media-card-heading-text">${this.headText}</h1> `
            : null}
          ${this.supportText
            ? html` <p class="media-card-support-text">${this.supportText}</p> `
            : null}
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-media-card': MediaCard;
  }
}
