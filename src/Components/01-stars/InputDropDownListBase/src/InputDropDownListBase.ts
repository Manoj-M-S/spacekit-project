import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../Avatar/src/Avatar';
import '../../Icon/src/Icon';
import styles from './InputDropDownListBase.scss.lit';

export interface InputDropDownListType {
  id?: string | number;
  name: string;
  iconName?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  isChecked?: boolean;
  disabled?: boolean;
}

@customElement('space-input-dropdownlist-base')
export default class InputDropDownListBase extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property({ type: Array<InputDropDownListType> })
  options: Array<InputDropDownListType> = [];

  /** @attr scrollbar */
  @property({ type: Boolean })
  scrollbar: boolean = false;

  /** @attr check-icon-name */
  @property({ type: String, attribute: 'check-icon-name' })
  checkIconName: string = 'check';

  handleItemSelect(event: PointerEvent) {
    const index = (event?.target as HTMLElement).dataset?.index ?? '0';

    const customEvent = new CustomEvent('onclick', {
      detail: this.options[parseInt(index)],
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  render() {
    const dropDownListClass = {
      'dropdown-list-base': true,
      'dropdown-list-scrollbar': this.scrollbar,
    };

    return html`
      <ul class=${classMap(dropDownListClass)} @click=${this.handleItemSelect}>
        ${map(
          this.options,
          (
            {
              name,
              avatarSrc,
              iconName,
              avatarAlt = name,
              disabled = false,
              isChecked = false,
            },
            index
          ) => html`<li
            data-index=${index}
            aria-disabled=${disabled}
            class=${classMap({
              'dropdown-list-items': true,
              'dropdown-list-items-checked': isChecked,
              'dropdown-list-items-disabled': disabled,
            })}
          >
            ${iconName
              ? html`<space-icon
                  data-index=${index}
                  icon-name=${iconName}
                  class="dropdown-list-item-icon"
                ></space-icon>`
              : null}
            ${avatarSrc && avatarAlt
              ? html`<space-avatar
                  data-index=${index}
                  src=${avatarSrc}
                  alt=${avatarAlt}
                  size="xs"
                  class="dropdown-list-item-avatar"
                ></space-avatar>`
              : null}
            ${name
              ? html`<p data-index=${index} class="dropdown-list-item-name">
                  ${name}
                </p>`
              : null}
            ${isChecked
              ? html`<space-icon
                  data-index=${index}
                  icon-name=${this.checkIconName}
                  class="dropdown-list-item-icon dropdown-list-item-check-icon"
                ></space-icon>`
              : null}
          </li>`
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-input-dropdownlist-base': InputDropDownListBase;
  }
}
