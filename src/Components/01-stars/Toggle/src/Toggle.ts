import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Toggle.scss.lit';
import '../../Icon/src/Icon';

@customElement('space-toggle')
export default class Toggle extends LitElement {
  static styles = [styles];

  /** @attr checked */
  @property({ type: Boolean, attribute: 'checked' })
  checked: boolean = false;

  @state()
  onClick!: () => void;

  /** @attr label */
  @property({ type: String, attribute: 'label' })
  label: string = '';

  /** @attr togggle-id */
  @property({ type: String, attribute: 'toggle-id' })
  toggleId: string = '';

  /** @attr hide-label */
  @property({ type: Boolean, attribute: 'hide-label' })
  hideLabel: boolean = false;

  render() {
    const toggleActive = {
      'toggle-checkbox': true,
      [`toggle-checkbox-active`]: this.checked,
    };

    return html`
      <div class="toggle">
        <input
          type="checkbox"
          class="hidden-checkbox"
          id=${this.toggleId}
          ?checked=${this.checked}
          @click=${this.toggleSwitch}
        />
        <label
          class=${classMap(toggleActive)}
          ?checked=${this.checked}
          @click=${this.onClick}
        ></label>
        ${!this.hideLabel
          ? html`<label id=${this.toggleId}>${this.label}</label>`
          : null}
      </div>
    `;
  }

  toggleSwitch() {
    this.checked = this.checked ? false : true;
    this.onClick;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-toggle': Toggle;
  }
}
