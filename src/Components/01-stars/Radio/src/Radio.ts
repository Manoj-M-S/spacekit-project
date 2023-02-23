import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { Checkbox, CheckBoxSize } from '../../Checkbox/src/Checkbox';
import radioStyles from './Radio.scss.lit';

@customElement('space-radio')
export class Radio extends LitElement {
  static styles = [Checkbox.styles, radioStyles];

  /** @attr size */
  @property({ type: String })
  size: CheckBoxSize = 'md';

  /** @attr text */
  @property({ type: String })
  text!: string;

  /** @attr name */
  @property({ type: String })
  name!: string;

  /** @attr checked */
  @property({ type: Boolean })
  checked: boolean = false;

  /** @attr value */
  @property({ type: String })
  value!: string;

  /** @attr disabled */
  @property({ type: Boolean })
  disabled: boolean = false;

  onChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;

    const eventData = {
      detail: target,
    };

    const customEvent = new CustomEvent('onchange', eventData);
    this.dispatchEvent(customEvent);
  }

  render() {
    const labelClass = {
      label: true,
      [`label-${this.size}`]: this.size,
    };
    return html`
      <label class=${classMap(labelClass)} aria-disabled=${this.disabled}>
        <input
          type="radio"
          class="input"
          name=${this.name}
          value=${this.value}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          aria-disabled=${this.disabled}
          @change=${this.onChangeHandler}
        />
        <span class="radio">
          <span class="radio-dot"></span>
        </span>
        <span class="label-text">${this.text}</span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-radio': Radio;
  }
}
