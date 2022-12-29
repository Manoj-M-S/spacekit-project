import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../Avatar/src/WithLabel/AvatarWithLabel';
import '../../Checkbox/src/Checkbox';
import { CheckBoxSize } from '../../Checkbox/src/Checkbox';
import styles from './DropDownListBase.scss.lit';

export type DropDownListBaseType = {
  name: string;
  checkbox?: boolean;
  iconName?: string;
  showBorder?: boolean;
  disabled?: boolean;
  checkBoxChecked?: boolean;
};

@customElement('space-dropdown-list-base')
export default class DropDownListBase extends LitElement {
  static styles = [styles];

  /** @attr show-header */
  @property({ type: Boolean, attribute: 'show-header' })
  showHeader: boolean = false;

  /** @attr avatar-src */
  @property({ type: String, attribute: 'avatar-src' })
  avatarSrc!: string;

  /** @attr avatar-alt */
  @property({ type: String, attribute: 'avatar-alt' })
  avatarAlt!: string;

  /** @attr header-text */
  @property({ type: String, attribute: 'header-text' })
  headerText!: string;

  /** @attr avatar-heading */
  @property({ type: String, attribute: 'avatar-heading' })
  avatarHeading!: string;

  /** @attr avatar-subheading */
  @property({ type: String, attribute: 'avatar-subheading' })
  avatarSubHeading!: string;

  /** @attr dropDownOptions */
  @property({ type: Array<DropDownListBaseType> })
  dropDownOptions: Array<DropDownListBaseType> = [];

  /** @attr checkbox-size */
  @property({ type: String, attribute: 'checkbox-size' })
  checkBoxSize: CheckBoxSize = 'sm';

  render() {
    return html`
      <ul class="dropdown-list-base">
        ${this.showHeader
          ? html`${this.headerText
              ? html`<li class="dropdown-list-items-header">
                  <h6 class="dropdown-list-base-header">${this.headerText}</h6>
                </li>`
              : null}
            ${this.avatarSrc && this.avatarAlt
              ? html`<li class="dropdown-list-items-avatar">
                  <space-avatar-label
                    class="dropdown-list-base-avatar"
                    src=${this.avatarSrc}
                    alt=${this.avatarAlt}
                    heading=${this.avatarHeading}
                    sub-heading=${this.avatarSubHeading}
                  ></space-avatar-label>
                </li>`
              : null}`
          : null}
        ${map(
          this.dropDownOptions,
          ({
            name,
            checkbox,
            iconName,
            disabled = false,
            checkBoxChecked,
            showBorder = false,
          }) => {
            const listClass = {
              'dropdown-list-items': true,
              'dropdown-list-items-border': showBorder,
              'dropdown-list-items-disabled': disabled,
            };

            return html`
              <li aria-disabled=${disabled} class=${classMap(listClass)}>
                ${checkbox
                  ? html`
                      <space-checkbox
                        name=${name}
                        size=${this.checkBoxSize}
                        ?checked=${checkBoxChecked}
                        ?disabled=${disabled}
                        class="dropdown-list-base-checkbox"
                      ></space-checkbox>
                    `
                  : html`
                      ${iconName
                        ? html`
                            <space-icon
                              class="dropdown-list-base-icon"
                              icon-name=${iconName}
                            ></space-icon>
                          `
                        : null}
                    `}
                ${name
                  ? html` <h6 class="dropdown-list-base-name">${name}</h6> `
                  : null}
              </li>
            `;
          }
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-dropdown-list-base': DropDownListBase;
  }
}
