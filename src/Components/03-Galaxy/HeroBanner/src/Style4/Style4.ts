import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './Style4.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/Label/src/Label';
import '../../../../01-stars/Link/src/Link';

@customElement('space-herobanner-style4')
export class Style4 extends LitElement {
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

  /** @attr badge-group */
  @property({ type: Boolean, attribute: 'badge-group' })
  badgeGroup: boolean = false;

  /** @attr label */
  @property({ type: String, attribute: 'label' })
  label: string = '';

  /** @attr badge-link-text */
  @property({ type: String, attribute: 'badge-link-text' })
  badgeLinkText: string = '';

  /** @attr badge-link-href */
  @property({ type: String, attribute: 'badge-link-href' })
  badgeLinkHref: string = '';

  render() {
    return html`
      <div class="hero-banner-style4">
        ${this.badgeGroup
          ? html`<div class="badge-group">
              <space-label label=${this.label}></space-label
              ><space-link
                href=${this.badgeLinkHref}
                iconaftertext
                iconname="arrowRight"
                >${this.badgeLinkText}</space-link
              >
            </div>`
          : null}
        <div class="container">
          <div class="content">
            <div class="title">${this.title}</div>
            <div class="support-text">${this.supportiveText}</div>
          </div>
          <div class="action">
            <space-button
              class="btn-class"
              button-variant="secondary"
              iconname="play"
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
    'space-herobanner-style4': Style4;
  }
}
