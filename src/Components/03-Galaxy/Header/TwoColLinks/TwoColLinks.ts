import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '../../../02-Constellations/Menu/src/NavMenu/NavMenuItem';
import { TwoColSlimFooterOptions } from '../TwoColSlimFooter/TwoColSlimFooter';
import styles from './TwoColLinks.scss.lit';

export interface TwoColLinksOptions extends TwoColSlimFooterOptions {}

export interface LinkOptions {
  /** text */
  text: string;
  /** href */
  href: string;
}

@customElement('space-twocollinks')
export default class TwoColLinks extends LitElement {
  static styles = [styles];

  /** @attr optionsOne */
  @property()
  optionsOne: TwoColLinksOptions[] = [];

  /** @attr optionsTwo */
  @property()
  optionsTwo: TwoColLinksOptions[] = [];

  /** @attr optionsThree */
  @property()
  optionsThree: TwoColLinksOptions[] = [];

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

  /** @attr linkOptions */
  @property()
  linkOptions: LinkOptions[] = [];

  render() {
    return html`
      <div class="two-col-sidebar">
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

        <div class="column-links">
          ${this.headingFour
            ? html`<h6 class="heading-text">${this.headingFour}</h6>`
            : null}

          <ul class="list">
            ${map(
              this.linkOptions,
              ({ text, href }) => html`
                <li class="list-items">
                  ${href && text
                    ? html`<a class="link" href=${href}>${text}</a>`
                    : null}
                </li>
              `
            )}
          </ul>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-twocollinks': TwoColLinks;
  }
}
