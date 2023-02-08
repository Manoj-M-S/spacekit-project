import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../01-stars/Link/src/Link';
import styles from './HeaderMenuItem.scss.lit';
import '../Accordion/src/Accordion';

@customElement('space-header-menu-item')
export default class HeaderMenuItem extends LitElement {
  static styles = [styles];

  @queryAssignedElements()
  private slotEls!: HTMLElement[];

  /** @attr label */
  @property()
  label!: string;

  /** @attr href */
  @property()
  href!: string;

  @state()
  slots: HTMLElement[] = [];

  @state()
  isOpen: boolean = false;

  @state()
  isClient = typeof window !== 'undefined';

  @state()
  windowSize: number = 0;

  handleDropDown() {
    this.isOpen = !this.isOpen;
  }

  firstUpdated() {
    this.slots = this.slotEls;
    if (this.isClient) {
      const size = window.innerWidth;
      this.windowSize = size;
    }
  }

  render() {
    return html` <div class="sub-menu">
      <div class="title-container">
        ${this.label && this.slots.length
          ? html`<p
                id=${this.label}
                @click=${this.handleDropDown}
                class="menu-title expanded"
              >
                ${this.label}
                <space-icon
                  class="icon"
                  icon-name=${this.isOpen ? 'chevronUp' : 'chevronDown'}
                ></space-icon>
              </p>
              <space-accordion
                class="accordion"
                icon-side="right"
                heading-text=${this.label}
              >
                ${this.windowSize < 1024 ? html` ${this.slots}` : null}
              </space-accordion> `
          : html`<a class="menu-title" href=${this.href}>${this.label}</a>`}
      </div>

      <div
        class=${classMap({
          'sub-menu-slot': true,
          'hide-slot': !this.isOpen,
        })}
      >
        <slot></slot>
        ${this.windowSize > 1024 ? html` ${this.slots}` : null}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-header-menu-item': HeaderMenuItem;
  }
}
