import { html, LitElement, TemplateResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../button/src/Button';
import '../../Avatar/src/Avatar';
import componentStyles from './Dropdown.scss.lit';
import '../../Icon/src/Icon';
import { ButtonVariant } from '../../button/src/Button';

@customElement('space-dropdown')
export class Dropdown extends LitElement {
  @property({ type: Boolean, attribute: 'is-disabled' })
  isDisabled = false;

  @property({ type: Boolean, attribute: 'is-open' })
  isOpen = false;

  /** @attr trigger-text */
  @property({ type: String, attribute: 'trigger-text' })
  triggerText: string | undefined;

  /** @attr trigger-varaint */
  @property({ type: String, attribute: 'trigger-variant' })
  triggerVariant: ButtonVariant | undefined;

  /** @attr iconname */
  @property({ type: String, attribute: 'icon-name' })
  iconName: string = 'chevronUp';

  static styles = [componentStyles];

  /** @attr button-url */
  @property({ type: String, attribute: 'button-url' })
  buttonUrl!: string;
  onClick() {
    //.log(this.isOpen);
    this.isOpen = !this.isOpen;
    if (this.isDisabled) {
      this.isOpen = true;
    }
  }

  render(): TemplateResult {
    return html`
      <div class="dropdown">
        ${this.buttonTemplate()} ${this.dropdownTemplate()}
      </div>
    `;
  }

  buttonTemplate(): TemplateResult | null {
    return html`
      <space-button
        ?is-disabled=${this.isDisabled}
        @click=${this.onClick}
        iconname=${this.isOpen ? 'chevronUp' : 'chevronDown'}
        button-variant="secondary"
        ?iconaftertext=${true}
      >
        <span>${this.triggerText} </span>
      </space-button>
    `;
  }

  dropdownTemplate(): TemplateResult | null {
    return html`
      <div class="action">
        <div class=${this.isOpen ? 'menu active' : 'menu'}>
          <space-avatar-label
            size="md"
            heading="Diana Prince"
            sub-heading="diana@space.com"
            src="https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY4NTE1MDg0&force=true&w=1920"
            alt="user"
          >
          </space-avatar-label>
          <ul>
            <li>
              <space-link iconname="user" href="#">View profile</space-link>
            </li>
            <li>
              <space-link iconname="settings" href="#">Setting</space-link>
            </li>
            <li>
              <space-link iconname="zap" href="#"
                >Keyboard shortcuts</space-link
              >
            </li>
            <li>
              <space-link iconname="home" href="#">Company profile</space-link>
            </li>

            <li>
              <space-link iconname="users" href="#">Team</space-link>
            </li>
            <li>
              <space-link iconname="userPlus" href="#"
                >Invite colleagues</space-link
              >
            </li>
            <li>
              <space-link iconname="twoLayers" href="#">Changelog</space-link>
            </li>
            <li>
              <space-link iconname="slack" href="#">Slack Community</space-link>
            </li>
            <li>
              <space-link iconname="helpCircle" href="#">Support</space-link>
            </li>
            <li>
              <space-link iconname="code" href="#">API</space-link>
            </li>
            <li>
              <space-link iconname="logout" href="#">Logout</space-link>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-dropdown': Dropdown;
  }
}
