import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/NavigationBase/src/NavigationBase';
import type {
  NavigationBaseColourType,
  NavigationBaseSizeType,
} from '../../../01-stars/NavigationBase/src/NavigationBase';
import styles from './NavigationList.scss.lit';

@customElement('space-navigation-list')
export default class NavigationList extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options: any[] = [];

  /** @attr colour */
  @property()
  colour: NavigationBaseColourType = 'lightGrey';

  /** @attr size */
  @property()
  size: NavigationBaseSizeType = 'sm';

  render() {
    return html`
      <div>
        ${map(
          this.options,
          ({ iconName, text, href }) => html`
            <space-navigation-base
              href=${href}
              size=${this.size}
              colour=${this.colour}
              icon-name=${iconName}
            >
              ${text}
            </space-navigation-base>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-navigation-list': NavigationList;
  }
}
