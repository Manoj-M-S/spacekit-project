import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../Link/src/Link';
import styles from './NavigationBase.scss.lit';

export type NavigationBaseSizeType = 'sm' | 'lg';
export type NavigationBaseColourType = 'lightGrey' | 'darkGrey' | 'primaryDark';

@customElement('space-navigation-base')
export class NavigationBase extends LitElement {
  static styles = [styles];

  /** @attr size */
  @property()
  size: NavigationBaseSizeType = 'sm';

  /** @attr href */
  @property()
  href!: string;

  /** @attr colour */
  @property()
  colour: NavigationBaseColourType = 'lightGrey';

  /** @attr icon-name */
  @property({ attribute: 'icon-name' })
  iconName!: string;

  render() {
    const navigationBase = {
      'navigation-base': true,
      [`navigation-base-size-${this.size}`]: this.size,
      [`navigation-base-colour-${this.colour}`]: this.colour,
    };

    return html`
      <a href=${this.href} class=${classMap(navigationBase)}>
        <slot class="navigation-base-text"></slot>
        ${this.iconName
          ? html`<space-icon
              class="navigation-base-icon"
              icon-name=${this.iconName}
            ></space-icon>`
          : null}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-navigation-base': NavigationBase;
  }
}
