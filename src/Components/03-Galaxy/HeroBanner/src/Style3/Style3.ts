import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './Style3.scss.lit';
import '../../../../01-stars/Image/src/Image';

@customElement('space-herobanner-style3')
export default class Style3 extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr description */
  @property({ type: String, attribute: 'description' })
  description: string = '';

  /** @attr image-src */
  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  /** @attr image-alt */
  @property({ type: String, attribute: 'image-alt' })
  imageAlt: string = '';

  render() {
    return html`
      <div class="hero-banner-style3">
        <div class="content">
          <div class="title">${this.title}</div>
          <div class="support-text">${this.supportiveText}</div>
        </div>
        <div class="info">
          <space-image
            class="image"
            src=${this.imageSrc}
            alt=${this.imageAlt}
          ></space-image>

          <div class="description">${this.description}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-herobanner-style3': Style3;
  }
}
