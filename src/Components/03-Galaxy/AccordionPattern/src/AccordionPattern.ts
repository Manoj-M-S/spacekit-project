import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/ProgressBase/src/ProgressBase';
import styles from './AccordionPattern.scss.lit';
import '../../../02-Constellations/Accordion';
import { AccordionIconSide } from '../../../02-Constellations/Accordion';

export interface AccordionOption {
  headingText: string;
  divider: boolean;
  content: any;
}

@customElement('space-accordion-pattern')
export class AccordionPattern extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property({ type: Array<AccordionOption> })
  options!: AccordionOption[];

  /** @attr icon-position */
  @property({ type: String })
  iconPosition!: AccordionIconSide;

  render() {
    return html`
      <ul class="accordion-list">
        ${map(
          this.options,
          ({ headingText, divider, content }) => html` <li
            class="list-items ${this.iconPosition}"
          >
            <space-accordion
              heading-text=${headingText}
              ?divider=${divider}
              icon-side=${this.iconPosition}
            >
              ${content}
            </space-accordion>
          </li>`
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-accordion-pattern': AccordionPattern;
  }
}
