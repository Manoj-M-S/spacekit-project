import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './SectionHeading.scss.lit';

export type SectionHeadingSize = 'default';
export type SectionHeadingView = 'center' | 'split' | 'default';

@customElement('space-section-heading')
export class SectionHeading extends LitElement {
  static styles = [styles];

  /** @attr size */
  @property()
  size!: SectionHeadingSize;

  /** @attr orientation */
  @property()
  orientation!: SectionHeadingView;

  /** @attr head-text */
  @property({ type: String, attribute: 'head-text' })
  headText!: string;

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  render() {
    const cardClass = {
      'section-heading': true,
      [`section-heading-size-${this.size}`]: this.size,
      [`section-heading-orientation-${this.orientation}`]: this.orientation,
    };
    return html`
      <div class=${classMap(cardClass)}>
        <div class="section-heading-text-container">
          ${this.subHeading
            ? html`
                <p class="section-heading-subheading-text">
                  ${this.subHeading}
                </p>
              `
            : null}
          <div class="section-heading-main">
            ${this.headText
              ? html`
                  <h1 class="section-heading-heading-text">${this.headText}</h1>
                `
              : null}
            ${this.supportText
              ? html`
                  <p class="section-heading-support-text">
                    ${this.supportText}
                  </p>
                `
              : null}
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-section-heading': SectionHeading;
  }
}
