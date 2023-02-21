import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Menu.scss.lit';
import '../../../01-stars/Icon/src/Icon';

@customElement('space-menu')
export class Menu extends LitElement {
  static styles = [styles];

  /** @attr menu-name */
  @property({ type: String, attribute: 'menu-name' })
  menuName: string = '';

  /** @attr expand-menu */
  @property({ type: Boolean, attribute: 'expand-menu' })
  expandMenu: boolean = false;

  /** @attr is-expanded */
  @property({ type: Boolean, attribute: 'is-expanded' })
  isExpanded: boolean = false;

  /** @attr menu-href */
  @property({ type: String, attribute: 'menu-href' })
  menuHref: string = '';

  renderIfExpanded() {
    return html`
      ${this.isExpanded
        ? html`
            <space-icon
              class="menu-icon-class"
              icon-name="chevronUp"
            ></space-icon>
          `
        : html`
            <space-icon
              class="menu-icon-class"
              icon-name="chevronDown"
            ></space-icon>
          `}
    `;
  }

  render() {
    const menuClass = {
      'menu': true,
      'menu-name': true,
    };

    return html`
      <a href=${this.menuHref} class=${classMap(menuClass)}>
        ${this.menuName}${this.expandMenu ? this.renderIfExpanded() : ''}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-menu': Menu;
  }
}
