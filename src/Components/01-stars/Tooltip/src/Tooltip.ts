import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Tooltip.scss.lit';
import '../../Icon/src/Icon';

@customElement('space-tooltip')
export class Tooltip extends LitElement {
  static styles = [styles];

  /** @attr tooltip-text */
  @property({ type: String, attribute: 'tooltip-text' })
  tooltipText: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  render() {
    const tooltipClass = {
      tooltip: true,
    };

    return html`
      <div class=${classMap(tooltipClass)}>
        <span class="tooltip-title">${this.tooltipText}</span>
        ${this.supportiveText
          ? html`<span class="tooltip-desc">${this.supportiveText}</span>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-tooltip': Tooltip;
  }
}
