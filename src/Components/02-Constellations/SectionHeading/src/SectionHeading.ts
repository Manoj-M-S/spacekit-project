import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './SectionHeading.scss.lit';

export type SectionHeadingSide = 'left' | 'center';

@customElement('space-section-heading')
export default class SectionHeading extends LitElement {
  static styles = [styles];

  /** @attr align */
  @property({ type: String })
  alignSide!: SectionHeadingSide;

  /** @attr icon-side */
  @property({ type: String })
  shortLabel?: string = '';

  /** @attr label-text */
  @property({ type: String })
  labelText?: string = '';

  /** @attr paragraph-text */
  @property({ type: String })
  paragraph?: string = '';

  render() {
    const sectionClass = {
      'section-heading': true,
      [`align-content-${this.alignSide}`]: this.alignSide,
    };
    return html`
      <div class=${classMap(sectionClass)}>
          <div class="section-short-label">
            ${this.shortLabel}
          </div>
        <div class="section-content">
          <div class="section-label">
            ${this.labelText}
          </div>
          <div class="section-paragraph">
            ${this.paragraph}
          </div>
        </div>
      </div>
    `;
  }
}
