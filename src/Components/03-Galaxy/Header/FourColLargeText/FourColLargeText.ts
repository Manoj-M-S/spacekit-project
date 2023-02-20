import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { TwoColWithSideBarOptions } from '../TwoColWithSideBar/TwoColWithSideBar';
import styles from './FourColLargeText.scss.lit';

export interface FourColLargeTextOptions extends TwoColWithSideBarOptions {}

@customElement('space-fourcollargetext')
export default class ThreeColSidebar extends LitElement {
  static styles = [styles];

  /** @attr optionsOne */
  @property()
  optionsOne: FourColLargeTextOptions[] = [];

  /** @attr optionsTwo */
  @property()
  optionsTwo: FourColLargeTextOptions[] = [];

  /** @attr optionsThree */
  @property()
  optionsThree: FourColLargeTextOptions[] = [];

  /** @attr optionsFour */
  @property()
  optionsFour: FourColLargeTextOptions[] = [];

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
                  <li class="nav-item">
                    <space-nav-menu-item
                      size=${size}
                      title=${title}
                      state=${state}
                      icon-name=${iconName}
                      description=${description}
                    >
                    </space-nav-menu-item>
                  </li>
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
                  <li class="nav-item">
                    <space-nav-menu-item
                      size=${size}
                      title=${title}
                      state=${state}
                      icon-name=${iconName}
                      description=${description}
                    >
                    </space-nav-menu-item>
                  </li>
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
              }) => html`
                <li class="nav-item">
                  <space-nav-menu-item
                    size=${size}
                    title=${title}
                    state=${state}
                    icon-name=${iconName}
                    description=${description}
                  >
                  </space-nav-menu-item>
                </li>
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
              }) => html`
                <li class="nav-item">
                  <space-nav-menu-item
                    size=${size}
                    title=${title}
                    state=${state}
                    icon-name=${iconName}
                    description=${description}
                  >
                  </space-nav-menu-item>
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
    'space-fourcollargetext': ThreeColSidebar;
  }
}
