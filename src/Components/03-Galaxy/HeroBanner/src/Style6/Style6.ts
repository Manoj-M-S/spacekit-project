import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Style6.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';

@customElement('space-herobanner-style6')
export default class Style6 extends LitElement {
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

  render() {
    return html`
      <div class="hero-banner-style6">
        <div class="content">
          <hr class="border" />
          <div class="text-container">
            <div class="title">${this.title}</div>
            <div class="support-text">${this.supportiveText}</div>
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
    'space-herobanner-style6': Style6;
  }
}
