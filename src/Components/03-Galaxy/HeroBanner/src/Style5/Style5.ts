import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Style5.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';

@customElement('space-herobanner-style5')
export default class Style5 extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr image-src */
  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  /** @attr image-alt */
  @property({ type: String, attribute: 'image-alt' })
  imageAlt: string = '';

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnText: string = '';

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnText: string = '';

  /** @attr right-padding */
  @property({ type: Boolean, attribute: 'right-padding' })
  rightPadding: boolean = false;

  render() {
    const heroBannerClass = {
      'hero-banner-style5': true,
      'r-padding': !this.rightPadding,
    };
    return html`
      <div class=${classMap(heroBannerClass)}>
        <div class="content">
          <div class="text-container">
            <div class="title">${this.title}</div>
            <div class="support-text">${this.supportiveText}</div>
          </div>
          <div class="action">
            <space-button class="btn-class" button-variant="secondary"
              >${this.secondaryBtnText}</space-button
            >
            <space-button class="btn-class" button-variant="primary"
              >${this.primaryBtnText}</space-button
            >
          </div>
        </div>
        <space-image
          class="image"
          src=${this.imageSrc}
          alt=${this.imageAlt}
        ></space-image>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-herobanner-style5': Style5;
  }
}
