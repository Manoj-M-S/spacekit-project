import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/button/src/Button';
import styles from './SectionWithTextAndMedia.scss.lit';
import '../../../01-stars/Link/src/Link';
import '../../../01-stars/Image/src/Image';
import '../../../01-stars/Input/src/Input';

export type ImageSide = 'left' | 'right';
export type ChecklistOptions = {
  features: String;
  iconName?: String;
};

@customElement('space-section-text-media')
export class SectionWithTextAndMedia extends LitElement {
  static styles = [styles];

  /** @attr image-src */
  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  /** @attr image-alt */
  @property({ type: String, attribute: 'image-alt' })
  imageAlt: string = '';

  /** @attr description */
  @property({ type: String, attribute: 'description' })
  description: string = '';

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr image-side */
  @property({ type: String, attribute: 'image-side' })
  imageSide: ImageSide = 'left';

  /** @attr show-buttons */
  @property({ type: Boolean, attribute: 'show-buttons' })
  showButtons: boolean = false;

  /** @attr primary-cta-text */
  @property({ type: String, attribute: 'primary-cta-text' })
  primaryCtaText: string = '';

  /** @attr secondary-cta-text */
  @property({ type: String, attribute: 'secondary-cta-text' })
  secondaryCtaText: string = '';

  @property()
  featuresList!: ChecklistOptions[];

  renderCTA() {
    return html`<div class="action">
      <space-button class="cta-class" button-variant="primary"
        >${this.primaryCtaText}</space-button
      >
      <space-button class="cta-class" button-variant="secondary"
        >${this.secondaryCtaText}</space-button
      >
    </div>`;
  }

  renderCheck = () => html`<svg
    width="13"
    height="11"
    viewBox="0 0 13 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.098 0.390159L3.93797 7.30016L2.03797 5.27016C1.68797 4.94016 1.13797 4.92016 0.737968 5.20016C0.347968 5.49016 0.237968 6.00016 0.477968 6.41016L2.72797 10.0702C2.94797 10.4102 3.32797 10.6202 3.75797 10.6202C4.16797 10.6202 4.55797 10.4102 4.77797 10.0702C5.13797 9.60016 12.008 1.41016 12.008 1.41016C12.908 0.490159 11.818 -0.31984 11.098 0.38016V0.390159Z"
      fill="#038153"
    />
  </svg>`;

  renderChecklist() {
    return html`
      <ul class="checklist">
        ${map(this.featuresList, ({ features, iconName = '' }) => {
          return html`
            <li class="pricing-card-features-inner-container">
              ${iconName
                ? html` <space-icon
                    class="pricing-card-features-icon"
                    icon-name=${iconName}
                  ></space-icon>`
                : html`<span class="pricing-card-features-icon"
                    >${this.renderCheck()}</span
                  >`}
              <p class="pricing-card-features-text">${features}</p>
            </li>
          `;
        })}
      </ul>
    `;
  }

  render() {
    const mediaPosition = {
      [`content-media-${this.imageSide}`]: this.imageSide,
    };

    return html`
      <div class="text-and-media">
        <div class="media-content">
          <div class=${classMap(mediaPosition)}>
            ${this.title ? html`<div class="title">${this.title}</div>` : null}
            ${this.description
              ? html`<div class="description">${this.description}</div>`
              : null}
            ${this.showButtons ? this.renderCTA() : null}
            ${this.featuresList ? this.renderChecklist() : null}
          </div>
          <div class="media">
            <space-image
              class="media-image"
              src=${this.imageSrc}
              alt=${this.imageAlt}
            ></space-image>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-section-text-media': SectionWithTextAndMedia;
  }
}
