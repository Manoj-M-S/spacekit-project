import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './404Section.scss.lit';
import '../../../01-stars/button/src/Button';

@customElement('space-404-section-type1')
export class NotFoundSection extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property()
  title!: string;

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnText!: string;

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnText!: string;

  /** @attr center */
  @property({ type: Boolean, attribute: 'center' })
  center!: boolean;

  render() {
    const sectionClass = {
      'section': true,
      'allignment-center': this.center,
    };
    return html`
      <div class=${classMap(sectionClass)}>
        <div
          class=${classMap({
            'heading': true,
            'heading-allignment': this.center,
          })}
        >
          <div
            class=${classMap({
              'title-content': true,
              'title-allignment': this.center,
            })}
          >
            <div class="title">${this.title}</div>
            <div class="sub-heading">${this.subHeading}</div>
          </div>
          <div class="support-text">${this.supportText}</div>
        </div>
        <div
          class=${classMap({ 'action': true, 'action-center': this.center })}
        >
          <space-button button-variant="primary" class="btn-class"
            >${this.primaryBtnText}</space-button
          >
          <space-button
            button-variant="secondary"
            class="btn-class"
            iconname="arrowLeft"
            >${this.secondaryBtnText}</space-button
          >
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-404-section-type1': NotFoundSection;
  }
}
