import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './TextArea.scss.lit';

@customElement('space-textarea')
export default class TextArea extends LitElement {
  static styles = [styles];

  /** @attr disabled */
  @property({ type: Boolean })
  disabled: boolean = false;

  /** @attr hide-label */
  @property({ type: Boolean, attribute: 'hide-label' })
  hideLabel: boolean = false;

  /** @attr label */
  @property({ type: String })
  label!: string;

  /** @attr placeholder */
  @property({ type: String })
  placeholder!: string;

  /** @attr hint */
  @property({ type: String, attribute: 'hint' })
  hintText!: string;

  /** @attr is-error */
  @property({ type: Boolean, attribute: 'is-error' })
  isError!: boolean;

  /** @attr error-hint */
  @property({ type: String, attribute: 'error-hint' })
  errorHint!: string;

  /** @attr value */
  @property({ type: String })
  value!: string;

  renderHint(text?: string) {
    return html`<p class="hint">${text}</p>`;
  }

  inputChange(event: Event) {
    const data = {
      detail: event.target,
    };
    const customEvent = new CustomEvent('onchange', data);
    this.dispatchEvent(customEvent);
  }

  render() {
    const textAreaClass = {
      'text-area': true,
      'error': this.isError && this.errorHint,
    };
    return html`
      <label class="label">
        ${this.label && !this.hideLabel
          ? html`<p class="label-text">${this.label}</p>`
          : ''}
        <textarea
          @change=${this.inputChange}
          @keyup=${this.inputChange}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          class=${classMap(textAreaClass)}
          aria-disabled=${ifDefined(this.disabled)}
        >
${this.value ?? ''}</textarea
        >
        ${this.hintText && !this.isError ? this.renderHint(this.hintText) : ''}
        ${this.isError ? this.renderHint(this.errorHint) : ''}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-textarea': TextArea;
  }
}
