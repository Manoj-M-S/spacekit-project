import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './CategoryList.scss.lit';
import { BaseStyle } from './../SideBar';

export interface CategoryListOptions {
  label: string;
  listHref: string;
  showDropdown: boolean;
  options: any;
}

@customElement('space-category-list')
export class CategoryList extends LitElement {
  static styles = [styles];

  /** @attr base-style */
  @property({ type: String, attribute: 'base-style' })
  baseStyle: BaseStyle = 'simple';

  /** @attr sidebar-heading */
  @property({ type: String, attribute: 'sidebar-heading' })
  sidebarHeading: string = '';

  /** @attr sidebar */
  @property({ type: Boolean, attribute: 'sidebar' })
  sidebar: boolean = false;

  /** @attr background */
  @property({ type: Boolean, attribute: 'background' })
  background: boolean = false;

  /** @attr options */
  @property({ type: Array<CategoryListOptions> })
  options!: CategoryListOptions[];

  @state()
  expandedSidebar: boolean = false;

  renderIcon() {
    const defaultIcon = 'plus';
    const expandedIcon = 'minus';

    return html`<space-icon
      class="accordion-icon"
      icon-name=${this.expandedSidebar ? expandedIcon : defaultIcon}
    ></space-icon>`;
  }

  handleButtonClick() {
    this.expandedSidebar = !this.expandedSidebar;
  }

  renderSidebar() {
    const buttonClass = {
      'button-heading': true,
      'expanded-sidebar': this.expandedSidebar,
    };
    const listingClass = {
      listing: true,
      background: this.background,
    };
    return html`
      <div class="sidebar">
        <button
          class=${classMap(buttonClass)}
          aria-expanded=${this.expandedSidebar}
          @click=${this.handleButtonClick}
        >
          ${this.sidebarHeading} ${this.renderIcon()}
        </button>

        ${this.expandedSidebar
          ? html`<div class=${classMap(listingClass)}>
              ${map(
                this.options,
                ({
                  label,
                  listHref,
                  showDropdown,
                  options,
                }) => html` <space-sidebar
                  label=${label}
                  list-href=${listHref}
                  ?show-dropdown=${showDropdown}
                  .options=${options}
                  base-style=${this.baseStyle}
                ></space-sidebar>`
              )}
            </div> `
          : null}
      </div>
    `;
  }

  render() {
    const categoryListClass = {
      'category-list': true,
      [`variant-${this.baseStyle}`]: this.baseStyle,
    };
    return html` ${!this.sidebar
      ? html` <div class=${classMap(categoryListClass)}>
          ${map(
            this.options,
            ({ label, listHref, showDropdown, options }) => html` <space-sidebar
              label=${label}
              list-href=${listHref}
              ?show-dropdown=${showDropdown}
              .options=${options}
              base-style=${this.baseStyle}
            ></space-sidebar>`
          )}
        </div>`
      : this.renderSidebar()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-category-list': CategoryList;
  }
}
