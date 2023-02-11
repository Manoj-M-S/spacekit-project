import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { NavSize, NavState } from '../../../02-Constellations/Menu';
import styles from './FourColLargeTextCardFooter.scss.lit';
import '../../../01-stars/Link/src/Link';

export interface FourColLargeTextCardFooterOptions {
  /** title */
  title: string;
  /**  description */
  description: string;
  /** icon name */
  iconName: string;
  /** size */
  size?: NavSize;
  /** state */
  state?: NavState;
}

@customElement('space-fourcollargetextcardrooter')
export default class FourColLargeTextCardFooter extends LitElement {
  static styles = [styles];

  /** @attr optionsOne */
  @property()
  optionsOne: FourColLargeTextCardFooterOptions[] = [];

  /** @attr optionsTwo */
  @property()
  optionsTwo: FourColLargeTextCardFooterOptions[] = [];

  /** @attr optionsThree */
  @property()
  optionsThree: FourColLargeTextCardFooterOptions[] = [];

  /** @attr optionsFour */
  @property()
  optionsFour: FourColLargeTextCardFooterOptions[] = [];

  /** @attr headingOne */
  @property()
  headingOne!: string;

  /** @attr headingTwo */
  @property()
  headingTwo!: string;

  /** @attr headingThree */
  @property()
  headingThree!: string;

  /** @attr headingFour */
  @property()
  headingFour!: string;

  /** @attr footer-text */
  @property({ attribute: 'footer-text' })
  footerText!: string;

  /** @attr footer-href */
  @property({ attribute: 'footer-href' })
  footerHref!: string;

  render() {
    return html`
      <div class="four-col">
        <div class="col">
          ${this.headingOne
            ? html`<h6 class="heading-text">${this.headingOne}</h6>`
            : null}
          <ul>
            ${map(
              this.optionsOne,
              ({
                title,
                iconName,
                description,
                size = 'small',
                state = 'default',
              }) =>
                html`
                  <space-nav-menu-item
                    size=${size}
                    title=${title}
                    state=${state}
                    icon-name=${iconName}
                    description=${description}
                  >
                  </space-nav-menu-item>
                `
            )}
          </ul>
        </div>
        <div class="col">
          ${this.headingTwo
            ? html`<h6 class="heading-text">${this.headingTwo}</h6>`
            : null}
          <ul>
            ${map(
              this.optionsOne,
              ({
                title,
                iconName,
                description,
                size = 'small',
                state = 'default',
              }) =>
                html`
                  <space-nav-menu-item
                    size=${size}
                    title=${title}
                    state=${state}
                    icon-name=${iconName}
                    description=${description}
                  >
                  </space-nav-menu-item>
                `
            )}
          </ul>
        </div>
        <div class="col">
          ${this.headingThree
            ? html`<h6 class="heading-text">${this.headingThree}</h6>`
            : null}
          <ul>
            ${map(
              this.optionsThree,
              ({
                title,
                iconName,
                description,
                size = 'small',
                state = 'default',
              }) =>
                html`
                  <space-nav-menu-item
                    size=${size}
                    title=${title}
                    state=${state}
                    icon-name=${iconName}
                    description=${description}
                  >
                  </space-nav-menu-item>
                `
            )}
          </ul>
        </div>
        <div class="col">
          ${this.headingFour
            ? html`<h6 class="heading-text">${this.headingFour}</h6>`
            : null}
          <ul>
            ${map(
              this.optionsThree,
              ({
                title,
                iconName,
                description,
                size = 'small',
                state = 'default',
              }) =>
                html`
                  <space-nav-menu-item
                    size=${size}
                    title=${title}
                    state=${state}
                    icon-name=${iconName}
                    description=${description}
                  >
                  </space-nav-menu-item>
                `
            )}
          </ul>
        </div>
      </div>
      <div class="footer">
        <div class="footer-container">
          <slot name="footer"></slot>
        </div>
        ${this.footerText && this.footerHref
          ? html`
              <space-link
                iconaftertext
                iconname="arrowRight"
                href=${this.footerHref}
                class="footer-link"
                >${this.footerText}</space-link
              >
            `
          : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-fourcollargetextcardrooter': FourColLargeTextCardFooter;
  }
}
