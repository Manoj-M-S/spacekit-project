import { html, LitElement, svg } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './ProgressBase.scss.lit';

export type ProgressStage = 'current' | 'completed';
export type ProgressOrientation = 'horizontal' | 'vertical';

@customElement('space-progress-base')
export default class ProgressBase extends LitElement {
  static styles = [styles];

  /** @attr orientation */
  @property({ type: String })
  orientation: ProgressOrientation = 'horizontal';

  /** @attr stage */
  @property({ type: String })
  stage!: ProgressStage;

  /** @attr text */
  @property({ type: String })
  text!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  renderCheckLine() {
    return svg`<svg class="progress-check" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"/>
		</svg>`;
  }

  render() {
    const progressClass = {
      'progress-container': true,
      [`progress-${this.orientation}`]: this.orientation,
      [`progress-${this.stage}`]: this.stage,
    };
    return html`
      <div class=${classMap(progressClass)}>
        <span class="progress-base">
          ${this.stage !== 'completed'
            ? html`<span class="progress-dot"></span>`
            : this.renderCheckLine()}
        </span>

        ${this.text || this.supportText
          ? html`<div class="text-container">
              ${this.text ? html`<h3 class="text">${this.text}</h3>` : ''}
              ${this.supportText
                ? html`<p class="support-text">${this.supportText}</p>`
                : ''}
            </div>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-progress-base': ProgressBase;
  }
}
