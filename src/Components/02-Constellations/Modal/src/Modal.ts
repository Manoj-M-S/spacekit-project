import { html, LitElement, _$LE } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Modal.scss.lit';
import "../../../01-stars/Icon/src/Icon";
import "../../../01-stars/button/src/Button";
import "../../../01-stars/Checkbox/src/Checkbox";

export type ModalAlignment = 'left' | 'center';

@customElement('space-modal')
export default class Modal extends LitElement {
  static styles = [styles];

  /** @attr featured-icon */
  @property({ type: Boolean, attribute: 'featured-icon' })
  featuredIcon: boolean = false;

  /** @attr horizontal */
  @property({ type: Boolean })
  horizontal: boolean = false;

  /** @attr alignment */
  @property({ type: String })
  alignment: ModalAlignment = 'left';

  /** @attr title */
  @property({ type: String })
  title: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnText: string = '';

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnText: string = '';

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName: string = '';

  /** @attr checkbox-text */
  @property({ type: String, attribute: 'checkbox-text' })
  checkboxText: string = '';

  renderIcon() {
    return html `<space-icon class="icon-class" icon-name=${this.iconName}></space-icon>`;
  }

  renderOnHorizontal() {
    return html `
      <div class="horizontal-container">
        ${this.featuredIcon ? this.renderIcon() : null}
        <div class="horizontal-content">
          <div class="horizontal-text-container">
            <div class="horizontal-title">${this.title}</div>
            <div class="horizontal-supportive-text">${this.supportiveText}</div>
          </div>
          <div class="horizontal-actions">
            <space-checkbox class="checkbox-class" size="sm" text=${this.checkboxText}></space-checkbox>
            <div class="horizontal-btn-container">
                <space-button class="full" button-variant="primary" button-size="lg">${this.primaryBtnText}</space-button>
                <space-button class="full" button-variant="secondary" button-size="lg">${this.secondaryBtnText}</space-button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  render() {
    const modalClass = {
      modal: true,
    };
    const modalAlignment = {
      content: true,
      [`content-${this.alignment}`]: this.alignment,
    }
    const textContent = {
      'text-content': true,
      [`content-${this.alignment}`]: this.alignment,
    }
    return html`
      <div class=${classMap(modalClass)}>
      ${this.horizontal ? this.renderOnHorizontal() : 
      html `
        <div class="modal-container">
          <div class=${classMap(modalAlignment)}>
              ${this.featuredIcon ? this.renderIcon() : null}
              <div class=${classMap(textContent)}>
                  <div class="title">${this.title}</div>
                  <div class="supportive-text">${this.supportiveText}</div>
              </div>
          </div>
          <slot></slot>
          <div class="action-buttons">
              <space-button class="full" button-variant="primary" button-size="lg">${this.primaryBtnText}</space-button>
              <space-button class="full" button-variant="secondary" button-size="lg">${this.secondaryBtnText}</space-button>
          </div>
        </div>`
      }
      
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-modal': Modal;
  }
}
