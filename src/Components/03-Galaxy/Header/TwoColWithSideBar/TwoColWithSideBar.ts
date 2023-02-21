import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import styles from './TwoColWithSideBar.scss.lit';
import '../../../01-stars/NavigationBase/src/NavigationBase';
import '../../../02-Constellations/Menu/src/NavMenu/NavMenuItem';
import {
  NavSize,
  NavState,
} from '../../../02-Constellations/Menu/src/NavMenu/NavMenuItem';
import '../../../02-Constellations/Cards/src/MediaCard/MediaCard';

export interface TwoColWithSideBarOptions {
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

@customElement('space-twocolsidebar')
export class TwoColWithSideBar extends LitElement {
  static styles = [styles];

  /** @attr optionsOne */
  @property()
  optionsOne: TwoColWithSideBarOptions[] = [];

  /** @attr optionsTwo */
  @property()
  optionsTwo: TwoColWithSideBarOptions[] = [];

  /** @attr headingOne */
  @property()
  headingOne!: string;

  /** @attr headingTwo */
  @property()
  headingTwo!: string;

  /** @attr headingThree */
  @property()
  headingThree!: string;

  /** @attr sidebar-link-text */
  @property({ attribute: 'sidebar-link-text' })
  sideBarLinkText!: string;

  /** @attr sidebar-link-href */
  @property({ attribute: 'sidebar-link-href' })
  sideBarLinkHref!: string;

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

        <div class="sidebar">
          ${this.headingThree
            ? html`<h6 class="heading-text">${this.headingThree}</h6>`
            : null}
          <slot name="sidebar"></slot>
          ${this.sideBarLinkText && this.sideBarLinkHref
            ? html`
                <space-link
                  href=${this.sideBarLinkHref}
                  class="link"
                  iconaftertext
                  iconname="arrowRight"
                >
                  ${this.sideBarLinkText}
                </space-link>
              `
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-twocolsidebar': TwoColWithSideBar;
  }
}
