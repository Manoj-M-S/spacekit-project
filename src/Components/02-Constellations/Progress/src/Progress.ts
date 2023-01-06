import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/ProgressBase/src/ProgressBase';
import { ProgressStage } from '../../../01-stars/ProgressBase/src/ProgressBase';
import styles from './Progress.scss.lit';

export interface ProgressOption {
  stage: ProgressStage;
  text?: string;
  supportText?: string;
}

@customElement('space-progress')
export default class Progress extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property({ type: Array<ProgressOption> })
  options!: ProgressOption[];

  render() {
    return html`
      <ul class="list">
        ${map(
          this.options,
          ({ stage, text, supportText }) => html` <li
            class="list-items ${stage}"
          >
            <space-progress-base
              stage=${stage}
              text=${ifDefined(text)}
              support-text=${ifDefined(supportText)}
            >
            </space-progress-base>
          </li>`
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-progress': Progress;
  }
}
