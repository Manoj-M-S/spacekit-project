import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Type3.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';

@customElement('space-404-section-type3')
export class SectionType3 extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property()
  title!: string;

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnText!: string;

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnText!: string;

  /** @attr img-src */
  @property({ type: String, attribute: 'img-src' })
  imageSrc!: string;

  /** @attr img-alt */
  @property({ type: String, attribute: 'img-alt' })
  imageAlt!: string;

  render() {
    const sectionClass = {
      section: true,
    };
    return html`
      <div class=${classMap(sectionClass)}>
        <div class="content">
          <div class="heading">
            <div class="title">${this.title}</div>
            <div class="sub-heading">${this.subHeading}</div>
          </div>
          <div class="action">
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

        <space-image
          class="image-class"
          src=${this.imageSrc}
          alt=${this.imageAlt}
        ></space-image>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-404-section-type3': SectionType3;
  }
}
