import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './Button.css.lit';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary';

@customElement('space-button')
export class Button extends LitElement {
  /** @attr is-disabled */
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled = false;

  /** @attr button-size */
  @property({ type: String, attribute: 'button-size' })
  buttonSize: ButtonSize = 'md';

  /** @attr button-variant */
  @property({ type: String, attribute: 'button-variant' })
  buttonVariant!: ButtonVariant;

  @property()
  onClick!: () => void;

  /** @attr button-url */
  @property({ type: String, attribute: 'button-url' })
  buttonUrl!: string;

  static styles = [componentStyles];

  render() {
    return this.buttonUrl
      ? html`
          <a
            aria-disabled=${this.isDisabled}
            class="btn ${this.buttonVariant} ${this.buttonSize}"
            @click=${this.onClick}
            href=${this.buttonUrl}
          >
            <slot></slot>
          </a>
        `
      : html`<button
          ?disabled=${this.isDisabled}
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          @click=${this.onClick}
        >
          <slot></slot>
        </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-button': Button;
  }
}
