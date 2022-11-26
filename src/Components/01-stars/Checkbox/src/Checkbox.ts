import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Checkbox.scss.lit';

export type CheckBoxSize = 'sm' | 'md';

@customElement('space-checkbox')
export default class Checkbox extends LitElement {
  static styles = [styles];

  /** @attr size */
  @property({ type: String })
  size: CheckBoxSize = 'md';

  /** @attr text */
  @property({ type: String })
  text!: string;

  /** @attr checked */
  @property({ type: Boolean })
  checked: boolean = false;

  /** @attr value */
  @property({ type: String })
  value!: string;

  /** @attr name */
  @property({ type: String })
  name!: string;

  /** @attr disabled */
  @property({ type: Boolean })
  disabled: boolean = false;

  onChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const eventData = { detail: target };
    const customEvent = new CustomEvent('onchange', eventData);
    this.dispatchEvent(customEvent);
  }

  renderCheckLine() {
    return html`<svg
      class="svg"
      viewBox="0 0 10 ${this.size === 'sm' ? '9.5' : '7.5'}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L3.5 6.5L1 4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> `;
  }

  render() {
    const labelClass = {
      label: true,
      [`label-${this.size}`]: this.size,
    };
    return html`
      <label class=${classMap(labelClass)} aria-disabled=${this.disabled}>
        <input
          class="input"
          type="checkbox"
          name=${this.name}
          value=${this.value}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          aria-disabled=${this.disabled}
          @change=${this.onChangeHandler}
        />
        <span class="checkbox">${this.renderCheckLine()} </span>
        <span class="label-text">${this.text}</span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-checkbox': Checkbox;
  }
}
