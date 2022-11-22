import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../Icon/src/Icon';
import styles from './Input.scss.lit';

export const inputTypes = [
  'text',
  'textarea',
  'password',
  'datetime',
  'datetime-local',
  'number',
  'email',
  'search',
  'tel',
  'file',
] as const;

export type InputTypes = typeof inputTypes[number] | any;

@customElement('space-input')
export default class Input extends LitElement {
  static styles = [styles];

  /** @attr label */
  @property({ type: String })
  label!: string;

  /** @attr hint */
  @property({ type: String, attribute: 'hint' })
  hintText!: string;

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  /** @attr placeholder */
  @property({ type: String })
  placeholder!: string;

  /** @attr tooltip */
  @property({ type: String, attribute: 'tool-tip' })
  tooltip!: string;

  /** @attr error-hint */
  @property({ type: String, attribute: 'error-hint' })
  errorHint!: string;

  /** @attr is-error */
  @property({ type: Boolean, attribute: 'is-error' })
  isError!: boolean;

  /** @attr type */
  @property({ type: String, attribute: 'type' })
  type!: InputTypes;

  /** @attr disabled */
  @property({ type: Boolean })
  disabled: boolean = false;

  /** @attr value */
  @property({ type: String })
  value!: string;

  /** @attr hide-label */
  @property({ type: Boolean, attribute: 'hide-label' })
  hideLabel: boolean = false;

  /** @attr tooltip-icon */
  @property({ type: String, attribute: 'tooltip-icon' })
  toolTipIcon: string = 'info';

  inputChange(event: Event) {
    const data = {
      detail: event.target,
    };
    const customEvent = new CustomEvent('onchange', data);
    this.dispatchEvent(customEvent);
  }

  renderHint(text?: string) {
    return html`<p class="hint">${text}</p>`;
  }

  renderIcon(className: string, icon: string) {
    return icon
      ? html` <space-icon class=${className} icon-name=${icon}></space-icon> `
      : '';
  }

  render() {
    const inputClass = {
      input: true,
      error: this.isError,
    };
    const labelClass = {
      'label': true,
      'hide-label': this.hideLabel,
    };
    return html`
      <label class=${classMap(labelClass)}>
        ${this.label && !this.hideLabel
          ? html`<p class="label-text">${this.label}</p>`
          : ''}
        ${this.renderIcon('icon', this.iconName)}
        ${this.isError ? this.renderIcon('error-icon', this.toolTipIcon) : ''}
        <input
          class=${classMap(inputClass)}
          @keyup=${this.inputChange}
          @change=${this.inputChange}
          ?disabled=${this.disabled}
          placeholder=${ifDefined(this.placeholder)}
          value=${ifDefined(this.value)}
          type=${this.type}
        />
        ${this.hintText && !this.isError ? this.renderHint(this.hintText) : ''}
        ${this.isError ? this.renderHint(this.errorHint) : ''}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-input': Input;
  }
}
