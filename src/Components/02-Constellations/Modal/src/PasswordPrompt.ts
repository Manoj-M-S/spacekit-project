import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './PasswordPrompt.scss.lit';
import '../../../01-stars/Icon/src/Icon';
import '../../../01-stars/button/src/Button';
import './Modal';
import '../../../01-stars/Input/src/Input';

@customElement('password-prompt-modal')
export class PasswordPrompt extends LitElement {
  static styles = [styles];

  /** @attr featured-icon */
  @property({ type: Boolean, attribute: 'featured-icon' })
  featuredIcon: boolean = false;

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

  /** @attr email-label */
  @property({ type: String, attribute: 'email-label' })
  emailLabel: string = '';

  /** @attr password-label */
  @property({ type: String, attribute: 'password-label' })
  passwordLabel: string = '';

  render() {
    const modalClass = {
      modal: true,
    };
    return html`
      <div class="password-prompt">
        <space-modal
          featured-icon
          icon-name="successTick"
          title=${this.title}
          supportive-text=${this.supportiveText}
          alignment="center"
          primary-btn-text=${this.primaryBtnText}
          secondary-btn-text=${this.secondaryBtnText}
        >
          <div class="input-container">
            <space-input label=${this.emailLabel}></space-input>
            <space-input label=${this.passwordLabel}></space-input>
          </div>
        </space-modal>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'password-prompt-modal': PasswordPrompt;
  }
}
