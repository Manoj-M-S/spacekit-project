import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './Style7.scss.lit';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/button/src/Button';

@customElement('space-herobanner-style7')
export default class Style7 extends LitElement {
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

  /** @attr button-text */
  @property({ type: String, attribute: 'button-text' })
  btnText: string = '';

  render() {
    return html`
      <div class="hero-banner-style7">
        <div class="content">
          <div class="title">${this.title}</div>
        </div>
        <div class="info">
          <div class="support-text">${this.supportiveText}</div>
          <div class="description">${this.description}</div>
          <space-button
            class="btn-class"
            button-variant="primary"
            iconaftertext
            iconname="coffee"
            >${this.btnText}</space-button
          >
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-herobanner-style7': Style7;
  }
}
