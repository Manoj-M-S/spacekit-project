import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../Icon/src/Icon';
import componentStyles from './Button.scss.lit';

export const buttonSize = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
export type ButtonSize = typeof buttonSize[number];
export type ButtonVariant = 'primary' | 'secondary';

@customElement('space-button')
export class Button extends LitElement {
  /** @attr disabled */
  @property({ type: Boolean, attribute: 'disabled' })
  isDisabled = false;

  /** @attr button-size */
  @property({ type: String, attribute: 'button-size' })
  buttonSize: ButtonSize = 'md';

  /** @attr button-variant */
  @property({ type: String, attribute: 'button-variant' })
  buttonVariant!: ButtonVariant;

  /** @attr iconname */
  @property({ type: String })
  iconName?: string = '';

  /** @attr iconaftertext */
  @property({ type: Boolean })
  iconAfterText!: boolean;

  @state()
  onClick!: () => void;

  static styles = [componentStyles];

  renderIcon() {
    const iconClass = {
      'btn-icon': true,
      'right': this.iconAfterText,
      [`icon-size-${this.buttonSize}`]: this.buttonSize ?? '',
    };
    return this.iconName
      ? html` <space-icon
          class=${classMap(iconClass)}
          icon-name=${this.iconName}
        ></space-icon>`
      : '';
  }

  render() {
    const buttonClass = {
      btn: true,
      [`btn-size-${this.buttonSize}`]: this.buttonSize ?? '',
      [`${this.buttonVariant}`]: this.buttonVariant ?? '',
    };
    return html`<button
      ?disabled=${this.isDisabled}
      class=${classMap(buttonClass)}
      @click=${this.onClick}
    >
      ${!this.iconAfterText ? this.renderIcon() : ''}
      <slot></slot>
      ${this.iconAfterText ? this.renderIcon() : ''}
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-button': Button;
  }
}
