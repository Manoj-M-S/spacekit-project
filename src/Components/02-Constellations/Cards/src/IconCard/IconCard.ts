import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './IconCard.scss.lit';
import '../../../../01-stars/Link/src/Link';

export type IconCardAlignment = 'left' | 'center';

@customElement('space-icon-card')
export class IconCard extends LitElement {
  static styles = [styles];

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  /** @attr cta-text */
  @property({ type: String, attribute: 'cta-text' })
  ctaText!: string;

  /** @attr cta-href */
  @property({ type: String, attribute: 'cta-href' })
  ctaHref!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  /** @attr head-text */
  @property({ type: String, attribute: 'head-text' })
  headingText!: string;

  /** @attr icon-container */
  @property({ type: Boolean, attribute: 'icon-container' })
  iconContainer!: boolean;

  /** @attr alignment */
  @property()
  alignment!: IconCardAlignment;

  /** @attr container */
  @property({ type: Boolean })
  container!: boolean;

  render() {
    const iconCardClass = {
      'icon-card': true,
      'icon-card-container': this.container,
      [`icon-card-alignment-${this.alignment}`]: this.alignment,
    };
    return html`
      <div class=${classMap(iconCardClass)}>
        <div class="icon-card-inner-container">
          ${this.iconName
            ? this.iconContainer
              ? html`
                  <div class="icon-container">
                    <space-icon
                      class="icon-card-icon-container"
                      icon-name=${this.iconName}
                    ></space-icon>
                  </div>
                `
              : html`<space-icon
                  class="icon-card-icon"
                  icon-name=${this.iconName}
                ></space-icon>`
            : null}
          ${this.headingText
            ? html`
                <h5 class="icon-card-heading-text">${this.headingText}</h5>
              `
            : null}
          ${this.supportText
            ? html` <p class="icon-card-support-text">${this.supportText}</p> `
            : null}
          ${this.ctaText && this.ctaHref
            ? html`
                <space-link
                  class="icon-card-cta"
                  href=${this.ctaHref}
                  iconaftertext
                  iconname="arrowRight"
                  >${this.ctaText}</space-link
                >
              `
            : this.ctaText
            ? html`<p class="cta-text">${this.ctaText}</p>`
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-icon-card': IconCard;
  }
}
