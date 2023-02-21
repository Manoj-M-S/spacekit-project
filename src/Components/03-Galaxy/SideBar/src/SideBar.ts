import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './SideBar.scss.lit';

export type BaseStyle = 'simple' | 'underline' | 'filled';

export interface ListOptions {
  listName: string;
  listHref: string;
}

@customElement('space-sidebar')
export class Sidebar extends LitElement {
  static styles = [styles];

  /** @attr base-style */
  @property({ type: String, attribute: 'base-style' })
  baseStyle: BaseStyle = 'simple';

  /** @attr label */
  @property({ type: String, attribute: 'label' })
  label: string = '';

  /** @attr list-href */
  @property({ type: String, attribute: 'list-href' })
  listHref: string = '';

  /** @attr show-dropdown */
  @property({ type: Boolean, attribute: 'show-dropdown' })
  showDropdown: boolean = false;

  @state()
  isExpanded: boolean = false;

  /** @attr options */
  @property({ type: Array<ListOptions> })
  options!: ListOptions[];

  renderIcon() {
    const defaultIcon = 'chevronRight';
    const expandedIcon = 'chevronUp';

    return html`<space-icon
      class="accordion-icon"
      icon-name=${this.isExpanded ? expandedIcon : defaultIcon}
    ></space-icon>`;
  }

  handleButtonClick() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    const buttonClass = {
      'button-heading': true,
      'expanded': this.isExpanded,
    };
    const categoryClass = {
      'category-base': true,
      [`style-${this.baseStyle}`]: this.baseStyle,
    };
    return html`
      <div class=${classMap(categoryClass)}>
        ${this.showDropdown
          ? html`
              <button
                class=${classMap(buttonClass)}
                aria-expanded=${this.isExpanded}
                @click=${this.handleButtonClick}
              >
                ${this.label} ${this.renderIcon()}
              </button>
              ${this.isExpanded
                ? html`<ul class="base-list">
                    ${map(
                      this.options,
                      ({ listName, listHref }) => html` <li class="base-item">
                        <a class="item" href=${listHref}>${listName}</a>
                      </li>`
                    )}
                  </ul>`
                : null}
            `
          : html`<a class="sidebar-base" href=${this.listHref}
              >${this.label}</a
            >`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-sidebar': Sidebar;
  }
}
