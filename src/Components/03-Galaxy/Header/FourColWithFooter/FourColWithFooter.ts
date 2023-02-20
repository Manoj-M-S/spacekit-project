import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { TwoColWithSideBarOptions } from '../TwoColWithSideBar/TwoColWithSideBar';
import styles from './FourColWithFooter.scss.lit';

export interface FourColWithFooterOptions extends TwoColWithSideBarOptions {}

export interface FooterOptions {
  /** icon name */
  iconName: string;
  /** text */
  text: string;
  /** href */
  href: string;
}

@customElement('space-fourcolfooter')
export default class FourColWithFooter extends LitElement {
  static styles = [styles];

  /** @attr optionsOne */
  @property()
  optionsOne: FourColWithFooterOptions[] = [];

  /** @attr optionsTwo */
  @property()
  optionsTwo: FourColWithFooterOptions[] = [];

  /** @attr optionsThree */
  @property()
  optionsThree: FourColWithFooterOptions[] = [];

  /** @attr optionsFour */
  @property()
  optionsFour: FourColWithFooterOptions[] = [];

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

  /** @attr footer-text-one */
  @property({ attribute: 'footer-text-one' })
  footerTextOne!: string;

  /** @attr footer-text-two */
  @property({ attribute: 'footer-text-two' })
  footerTextTwo!: string;

  /** @attr footer-href */
  @property({ attribute: 'footer-href' })
  footerHref!: string;

  /** @attr footerOptions */
  @property()
  footerOptions: FooterOptions[] = [];

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
        <div class="footer-text-container">
          <p></p>
          ${this.footerTextOne
            ? html`<p class="footer-text">${this.footerTextOne}</p>`
            : null}
          ${this.footerTextTwo && this.footerHref
            ? html`<a class="footer-text link" href=${this.footerHref}
                >${this.footerTextTwo}</a
              >`
            : null}
        </div>

        <ul class="footer-list">
          ${map(
            this.footerOptions,
            ({ iconName, text, href }) => html`
              <li class="footer-list-item">
                ${href && text
                  ? html`<a class="link" href=${href}>
                      ${iconName
                        ? html`<space-icon
                            class="icon"
                            icon-name=${iconName}
                          ></space-icon>`
                        : null}${text}</a
                    >`
                  : null}
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-fourcolfooter': FourColWithFooter;
  }
}
