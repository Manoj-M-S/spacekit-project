import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Label.scss.lit';
import '../../Icon/src/Icon';

export const labelSize = ['sm', 'md', 'lg'] as const;

export type LabelSize = typeof labelSize[number];

@customElement('space-label')
export class Label extends LitElement {
  static styles = [styles];

  /** @attr label */
  @property({ type: String })
  label: string = 'hello';

  /** @attr size */
  @property({ type: String })
  size: LabelSize = 'md';

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  onCloseHandler() {
    const event = new CustomEvent('onclose');
    this.dispatchEvent(event);
  }

  render() {
    const labelClass = {
      label: true,
      icon: this.size && this.label && this.iconName,
      [`label-${this.size}`]: this.size && this.label,
      [`icon-${this.size}`]: this.size && !this.label,
    };
    return html`
      <button class=${classMap(labelClass)}>
        ${this.label ? html`<span class="label-text">${this.label}</span>` : ''}
        ${this.iconName
          ? html`<space-icon
              @click=${this.onCloseHandler}
              class="label-icon"
              icon-name=${this.iconName}
            ></space-icon>`
          : ''}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-label': Label;
  }
}
