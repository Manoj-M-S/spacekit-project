import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './Image.css.lit';

@customElement('space-image')
export default class Image extends LitElement {
  static styles = [styles];

  /** @attr src */
  @property({ type: String })
  src!: string;

  /** @attr alt */
  @property({ type: String })
  alt!: string;

  /** @attr srcset */
  @property({ type: String })
  srcset!: string;

  render() {
    return html`
      <img
        class="image"
        src=${this.src}
        alt=${this.alt}
        srcset=${this.srcset}
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-image': Image;
  }
}
