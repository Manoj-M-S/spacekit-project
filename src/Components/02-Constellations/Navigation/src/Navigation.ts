import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './Navigation.scss.lit';
import '../../../01-stars/Icon/src/Icon';
import '../../../01-stars/Link/src/Link';

export type NavigationSize = 'small' | 'large';
export type Orientation = 'vertical' | 'horizontal';
export const color = [
  'whiteBackground',
  'darkGreyBackground',
  'darkPrimaryBackground',
];
export type NavigationColor = typeof color[number];

export interface NavigationOption {
  navigationText: string;
  navigationHref: string;
}

@customElement('space-navigation')
export default class Navigation extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options!: NavigationOption[];

  /** @attr navigation-size */
  @property({ type: String, attribute: 'navigation-size' })
  navigationSize: NavigationSize = 'small';

  /** @attr navigation-color */
  @property({ type: String, attribute: 'navigation-color' })
  navigationColor: NavigationColor = 'whiteBackground';

  /** @attr orientation */
  @property({ type: String, attribute: 'orientation' })
  orientation: Orientation = 'vertical';

  /** @attr heading */
  @property({ type: String, attribute: 'heading' })
  heading: string = '';

  /** @attr nav-icon */
  @property({ type: Boolean, attribute: 'nav-icon' })
  navIcon: boolean = false;

  renderIcon() {
    const iconClass = {
      [`icon-color-${this.navigationColor}`]: this.navigationColor ?? '',
      right: this.navIcon,
      [`icon-size-${this.navigationSize}`]: this.navigationSize ?? '',
    };
    return html` <space-icon
      class=${classMap(iconClass)}
      icon-name="arrowUpRight"
    ></space-icon>`;
  }

  render() {
    const navigationClass = {
      navigation: true,
      [`navigation-size-${this.navigationSize}`]: this.navigationSize,
      [`nav-${this.orientation}`]: this.orientation,
    };
    const navigationHeading = {
      'navigation-heading': true,
      [`heading-${this.navigationSize}`]: this.navigationSize,
    };
    return html`
      <div class=${classMap(navigationClass)}>
        ${this.heading
          ? html`<div class=${classMap(navigationHeading)}>
              ${this.heading}
            </div>`
          : ''}
        ${map(
          this.options,
          ({ navigationText, navigationHref }) => html` <li class="list-items">
            <a
              class="nav-link nav-link-${this.navigationSize} nav-link-${this
                .navigationColor}"
              href=${navigationHref}
              >${navigationText} ${this.navIcon ? this.renderIcon() : ''}
            </a>
          </li>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-navigation': Navigation;
  }
}
