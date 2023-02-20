import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Style8.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';

@customElement('space-herobanner-style8')
export default class Style8 extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr primary-image-src */
  @property({ type: String, attribute: 'primary-image-src' })
  primaryImageSrc: string = '';

  /** @attr primary-image-alt */
  @property({ type: String, attribute: 'primary-image-alt' })
  primaryImageAlt: string = '';

  /** @attr secondary-image-src */
  @property({ type: String, attribute: 'secondary-image-src' })
  secondaryImageSrc: string = '';

  /** @attr secondary-image-alt */
  @property({ type: String, attribute: 'secondary-image-alt' })
  secondaryImageAlt: string = '';

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnText: string = '';

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnText: string = '';

  render() {
    return html`
      <div class="hero-banner-style8">
        <div class="container">
          <div class="media-info">
            <space-image
              class="image-class"
              src=${this.primaryImageSrc}
              alt=${this.primaryImageAlt}
            ></space-image>
            <div class="content">
              <div class="title">${this.title}</div>
              <div class="support-text">${this.supportiveText}</div>
              <div class="action">
                <space-button class="btn-class" button-variant="secondary"
                  >${this.secondaryBtnText}</space-button
                >
                <space-button class="btn-class" button-variant="primary"
                  >${this.primaryBtnText}</space-button
                >
              </div>
            </div>
          </div>
          <space-image
            class="image-class"
            src=${this.secondaryImageSrc}
            alt=${this.secondaryImageAlt}
          ></space-image>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-herobanner-style8': Style8;
  }
}
