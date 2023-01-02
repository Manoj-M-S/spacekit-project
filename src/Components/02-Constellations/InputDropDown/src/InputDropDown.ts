import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/Avatar/src/Avatar';
import '../../../01-stars/InputDropDownListBase';
import { InputDropDownListType } from '../../../01-stars/InputDropDownListBase';
import styles from './InputDropDown.scss.lit';

@customElement('space-input-dropdown')
export default class InputDropDown extends LitElement {
  static styles = [styles];

  /** @attr avatar-src */
  @property({ type: String, attribute: 'avatar-src' })
  avatarSrc: string | undefined;

  /** @attr avatar-alt */
  @property({ type: String, attribute: 'avatar-alt' })
  avatarAlt: string | undefined;

  /** @attr value */
  @property({ type: String })
  value: string | undefined;

  /** @attr placeholder */
  @property({ type: String })
  placeholder!: string;

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName: string | undefined = 'user';

  /** @attr label */
  @property({ type: String })
  label!: string;

  /** @attr options */
  @property({ type: Array<InputDropDownListType> })
  options: Array<InputDropDownListType> = [];

  /** @attr scrollbar */
  @property({ type: Boolean })
  scrollbar: boolean = false;

  @state()
  isOpen: boolean = false;

  handleOnChange(event: CustomEvent) {
    const { id, name, iconName, avatarAlt, avatarSrc } =
      event.detail as InputDropDownListType;
    this.value = name;
    this.iconName = iconName;
    this.avatarSrc = avatarSrc;
    this.avatarAlt = avatarAlt;

    this.options = this.options?.map(data => {
      if (data.id === id) {
        return {
          ...data,
          isChecked: true,
        };
      }
      return {
        ...data,
        isChecked: false,
      };
    });
  }

  handleDropDown() {
    this.isOpen = !this.isOpen;
  }

  connectedCallback() {
    super.connectedCallback();
    this.options?.map(({ isChecked, name, iconName, avatarAlt, avatarSrc }) => {
      if (isChecked) {
        this.value = name;
        this.iconName = iconName;
        this.avatarSrc = avatarSrc;
        this.avatarAlt = avatarAlt;
      }
    });
  }

  render() {
    const inputDropDownClass = {
      'input-dropdown': true,
      'input-dropdown-list-open': this.isOpen,
    };

    return html`
      <div class=${classMap(inputDropDownClass)}>
        ${this.label
          ? html`<p class="input-dropdown-label">${this.label}</p>`
          : null}
        <button class="input-dropdown-button" @click=${this.handleDropDown}>
          ${this.iconName
            ? html`<space-icon
                class="input-dropdown-icon"
                icon-name=${this.iconName}
              >
              </space-icon>`
            : null}
          ${this.avatarAlt && this.avatarSrc
            ? html`<space-avatar
                size="xs"
                src=${this.avatarSrc}
                alt=${this.avatarAlt}
                class="input-dropdown-avatar"
              >
              </space-avatar>`
            : null}
          ${this.value
            ? html`<span class="input-dropdown-value"> ${this.value}</span>`
            : null}
          ${this.placeholder && !this.value
            ? html`<span class="input-dropdown-placeholder">
                ${this.placeholder}</span
              >`
            : null}

          <space-icon
            class="input-dropdown-icon input-dropdown-chevron-icon"
            icon-name=${this.isOpen ? 'chevronUp' : 'chevronDown'}
          >
          </space-icon>
          ${this.options
            ? html` <space-input-dropdownlist-base
                @onclick=${this.handleOnChange}
                .options=${this.options}
                ?scrollbar=${this.scrollbar}
                class="input-dropdown-list-base"
              ></space-input-dropdownlist-base>`
            : null}
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-input-dropdown': InputDropDown;
  }
}
