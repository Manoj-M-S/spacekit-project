import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { TwoColWithSideBarOptions } from '../TwoColWithSideBar/TwoColWithSideBar';
import styles from './ThreeColSidebar.scss.lit';

export interface ThreeColSidebarOptions extends TwoColWithSideBarOptions {}

@customElement('space-threecolsidebar')
export class ThreeColSidebar extends LitElement {
  static styles = [styles];

  /** @attr optionsOne */
  @property()
  optionsOne: ThreeColSidebarOptions[] = [];

  /** @attr optionsTwo */
  @property()
  optionsTwo: ThreeColSidebarOptions[] = [];

  /** @attr optionsThree */
  @property()
  optionsThree: ThreeColSidebarOptions[] = [];

  /** @attr headingOne */
  @property()
  headingOne!: string;

  /** @attr headingTwo */
  @property()
  headingTwo!: string;

  /** @attr headingThree */
  @property()
  headingThree!: string;

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

        <div class="sidebar">
          <slot name="sidebar"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-threecolsidebar': ThreeColSidebar;
  }
}
