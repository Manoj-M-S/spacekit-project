import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './QuickLinkCard.scss.lit';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/Link/src/Link';

export type QuickLinkCardColorType = 'light' | 'dark';
export type QuickLinkCardSize = 'sm' | 'md' | 'lg';

@customElement('space-quicklink-card')
export default class QuickLinkCard extends LitElement {
  static styles = [styles];

  /** @attr color */
  @property()
  color: QuickLinkCardColorType = 'light';

  /** @attr size */
  @property()
  size: QuickLinkCardSize = 'md';

  /** @attr cta-text */
  @property({ type: String, attribute: 'cta-text' })
  ctaText!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  /** @attr head-text */
  @property({ type: String, attribute: 'head-text' })
  headingText!: string;

  /** @attr cta-icon-name */
  @property({ type: String, attribute: 'cta-icon-name' })
  ctaIconName!: string;

  /** @attr src */
  @property({ attribute: 'src' })
  src!: string;

  /** @attr alt */
  @property()
  alt!: string;

  render() {
    const quickLinkCardClass = {
      'quick-link-card': true,
      [`quick-link-card-size-${this.size}`]: this.size,
      [`quick-link-card-color-${this.color}`]: this.color,
    };
    return html`
      <div class=${classMap(quickLinkCardClass)}>
        ${this.src && this.alt
          ? html`
              <div class="quick-link-card-image-container">
                <space-image
                  class="quick-link-card-image"
                  src=${this.src}
                  alt=${this.alt}
                ></space-image>
              </div>
            `
          : null}
        <div class="quick-link-card-text-container">
          ${this.headingText
            ? html`
                <h3 class="quick-link-card-head-text">${this.headingText}</h3>
              `
            : null}
          ${this.supportText
            ? html`
                <p class="quick-link-card-support-text">${this.supportText}</p>
              `
            : null}
          ${this.ctaText
            ? html` <space-button
                iconaftertext
                button-size="lg"
                iconname=${this.ctaIconName}
                button-variant="primary"
                class="space-quicklink-card-button"
                >${this.ctaText}</space-button
              >`
            : null}
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-quicklink-card': QuickLinkCard;
  }
}
