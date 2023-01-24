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
export default class CategoryList extends LitElement {
  static styles = [styles];

  /** @attr base-style */
  @property({ type: String, attribute: 'base-style' })
  baseStyle: BaseStyle = 'simple';

  /** @attr options */
  @property({ type: Array<CategoryListOptions> })
  options!: CategoryListOptions[];

  render() {
    const categoryListClass = {
      'category-list': true,
      [`variant-${this.baseStyle}`]: this.baseStyle,
    };
    return html`
      <div class=${classMap(categoryListClass)}>
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
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-category-list': CategoryList;
  }
}
