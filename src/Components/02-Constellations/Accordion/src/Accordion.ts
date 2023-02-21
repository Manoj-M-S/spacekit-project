import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './Accordion.scss.lit';

export type AccordionIconSide = 'left' | 'right';

@customElement('space-accordion')
export class Accordion extends LitElement {
  static styles = [styles];

  /** @attr divider */
  @property({ type: Boolean })
  divider: boolean = false;

  /** @attr icon-side */
  @property({ type: String, attribute: 'icon-side' })
  iconSide: AccordionIconSide = 'left';

  @state()
  isExpanded: boolean = false;

  /** @attr heading-text */
  @property({
    type: String,
    attribute: 'heading-text',
  })
  headingText!: string;

  renderIcon() {
    const defaultIcon = this.iconSide === 'left' ? 'plusCircle' : 'chevronDown';
    const expandedIcon = this.iconSide === 'left' ? 'minusCircle' : 'chevronUp';

    return html`<space-icon
      class="accordion-icon"
      icon-name=${this.isExpanded ? expandedIcon : defaultIcon}
    ></space-icon>`;
  }

  handleButtonClick() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    const accordionClass = {
      accordion: true,
      divider: this.divider,
      [`icon-side-${this.iconSide}`]: this.iconSide,
      [`show-accordion`]: this.isExpanded,
    };
    return html`
      <div class=${classMap(accordionClass)}>
        <button
          class="accordion-heading"
          aria-expanded=${this.isExpanded}
          @click=${this.handleButtonClick}
        >
          ${this.iconSide === 'left' ? this.renderIcon() : null}
          ${this.headingText}
          ${this.iconSide === 'right' ? this.renderIcon() : null}
        </button>
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-accordion': Accordion;
  }
}
