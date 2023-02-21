import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './Dropdown.scss.lit';
import { AvatarSize } from '../../../01-stars/Avatar/src/Avatar';

export type DropDownType = 'button' | 'avatar';
@customElement('space-dropdown')
export class Dropdown extends LitElement {
  static styles = [styles];

  /** @attr type */
  @property({ type: String, attribute: 'type' })
  type: DropDownType = 'button';

  /** @attr button-text */
  @property({ type: String, attribute: 'button-text' })
  buttonText!: string;

  @state()
  isOpen: boolean = false;

  /** @attr avatar-src */
  @property({ type: String, attribute: 'avatar-src' })
  avatarSrc!: string;

  /** @attr avatar-alt */
  @property({ type: String, attribute: 'avatar-alt' })
  avatarAlt!: string;

  /** @attr avatar-size */
  @property({ type: String, attribute: 'avatar-size' })
  avatarSize: AvatarSize = 'md';

  toggleDropDown = () => (this.isOpen = !this.isOpen);

  render() {
    const dropDownClass = {
      'dropdown': true,
      'dropdown-open': this.isOpen,
    };
    return html`
      <div class=${classMap(dropDownClass)}>
        ${this.type === 'button' && this.buttonText
          ? html`<space-button
              iconaftertext
              button-size="md"
              class="dropdown-button"
              button-variant="secondary"
              @click=${this.toggleDropDown}
              iconname=${this.isOpen ? 'chevronUp' : 'chevronDown'}
            >
              ${this.buttonText}
            </space-button>`
          : null}
        ${this.type === 'avatar' && this.avatarSrc && this.avatarAlt
          ? html`<space-avatar
              src=${this.avatarSrc}
              alt=${this.avatarAlt}
              size=${this.avatarSize}
              @click=${this.toggleDropDown}
            >
              ${this.buttonText}
            </space-avatar>`
          : null}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-dropdown': Dropdown;
  }
}
