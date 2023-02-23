import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './NavMenuItem.scss.lit';
import '../../../../01-stars/Icon/src/Icon';

export type NavSize = 'small' | 'large';
export type NavState = 'default' | 'hover' | 'active';

@customElement('space-nav-menu-item')
export class NavMenuItem extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr description */
  @property({ type: String, attribute: 'description' })
  description: string = '';

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName: string = '';

  /** @attr size */
  @property({ type: String, attribute: 'size' })
  size: NavSize = 'small';

  /** @attr state */
  @property({ type: String, attribute: 'state' })
  state: NavState = 'default';

  render() {
    const navMenuClass = {
      'nav-menu-item': true,
      [`nav-size-${this.size}`]: this.size,
      [`nav-${this.state}`]: this.state,
    };

    const navTitleClass = {
      [`nav-title-${this.size}`]: this.size,
      [`nav-title-${this.state}`]: this.state,
    };

    return html`
      <div class=${classMap(navMenuClass)}>
        ${this.iconName
          ? html`<space-icon
              class="nav-icon-class"
              icon-name=${this.iconName}
            ></space-icon>`
          : ''}
        <div class="nav-data">
          ${this.title
            ? html`<div class=${classMap(navTitleClass)}>${this.title}</div>`
            : ''}
          ${this.description
            ? html`<div class="nav-desc">${this.description}</div>`
            : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-nav-menu-item': NavMenuItem;
  }
}
