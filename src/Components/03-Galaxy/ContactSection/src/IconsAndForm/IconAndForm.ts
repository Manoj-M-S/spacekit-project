import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './IconAndForm.scss.lit';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../02-Constellations/Form/src/Form';

type IconCardAlignment = 'left' | 'center';
type SectionHeadingView = 'center' | 'split' | 'default';

interface IconCardOption {
  iconName: string;
  ctaText: string;
  ctaHref: string;
  supportText: string;
  headText: string;
  container: boolean;
}

@customElement('space-icon-and-form')
export default class IconAndForm extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property({ type: Array<IconCardOption> })
  options!: IconCardOption[];

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading: string = '';

  /** @attr heading-text */
  @property({ type: String, attribute: 'heading-text' })
  headingText: string = '';

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText: string = '';

  /** @attr icon-card-allignment */
  @property({ type: String, attribute: 'icon-card-allignment' })
  iconCardAllignment!: IconCardAlignment;

  /** @attr orientation */
  @property()
  sectionOrientation!: SectionHeadingView;

  /** @attr first-name-label */
  @property({ type: String, attribute: 'first-name-label' })
  firstNameLabel: string = '';

  /** @attr first-name-value */
  @property({ type: String, attribute: 'first-name-value' })
  firstNameValue: string = '';

  /** @attr first-name-placeholder */
  @property({ type: String, attribute: 'first-name-placeholder' })
  firstNamePlaceholder: string = '';

  /** @attr first-name-error */
  @property({ type: Boolean, attribute: 'first-name-error' })
  firstNameError: boolean = false;

  /** @attr first-name-errorhint */
  @property({ type: String, attribute: 'first-name-errorhint' })
  firstNameErrorHint: string = '';

  /** @attr last-name-label */
  @property({ type: String, attribute: 'last-name-label' })
  lastNameLabel: string = '';

  /** @attr last-name-value */
  @property({ type: String, attribute: 'last-name-value' })
  lastNameValue: string = '';

  /** @attr first-name-placeholder */
  @property({ type: String, attribute: 'last-name-placeholder' })
  lastNamePlaceholder: string = '';

  /** @attr last-name-error */
  @property({ type: Boolean, attribute: 'last-name-error' })
  lastNameError: boolean = false;

  /** @attr last-name-errorhint */
  @property({ type: String, attribute: 'last-name-errorhint' })
  lastNameErrorHint: string = '';

  /** @attr email-label */
  @property({ type: String, attribute: 'email-label' })
  emailLabel: string = '';

  /** @attr email-value */
  @property({ type: String, attribute: 'email-value' })
  emailValue: string = '';

  /** @attr email-placeholder */
  @property({ type: String, attribute: 'email-placeholder' })
  emailPlaceholder: string = '';

  /** @attr email-error */
  @property({ type: Boolean, attribute: 'email-error' })
  emailError: boolean = false;

  /** @attr email-errorhint */
  @property({ type: String, attribute: 'email-errorhint' })
  emailErrorHint: string = '';

  /** @attr phone-label */
  @property({ type: String, attribute: 'phone-label' })
  phoneLabel: string = '';

  /** @attr phone-value */
  @property({ type: String, attribute: 'phone-value' })
  phoneValue: string = '';

  /** @attr phone-placeholder */
  @property({ type: String, attribute: 'phone-placeholder' })
  phonePlaceholder: string = '';

  /** @attr phone-error */
  @property({ type: Boolean, attribute: 'phone-error' })
  phoneError: boolean = false;

  /** @attr phone-errorhint */
  @property({ type: String, attribute: 'phone-errorhint' })
  phoneErrorHint: string = '';

  /** @attr message-label */
  @property({ type: String, attribute: 'message-label' })
  messageLabel: string = '';

  /** @attr message-value */
  @property({ type: String, attribute: 'message-value' })
  messageValue: string = '';

  /** @attr message-placeholder */
  @property({ type: String, attribute: 'message-placeholder' })
  messagePlaceholder: string = '';

  /** @attr message-error */
  @property({ type: Boolean, attribute: 'message-error' })
  messageError: boolean = false;

  /** @attr message-errorhint */
  @property({ type: String, attribute: 'message-errorhint' })
  messageErrorHint: string = '';

  /** @attr button-text */
  @property({ type: String, attribute: 'button-text' })
  buttonText: string = '';

  render() {
    return html`
      <div class="contact-section-icon-form">
        ${this.headingText || this.subHeading
          ? html`<space-section-heading
              class="section-heading"
              sub-heading=${this.subHeading}
              head-text=${this.headingText}
              support-text=${this.supportText}
              orientation=${this.sectionOrientation}
            ></space-section-heading>`
          : null}
        <div class="icon-form-container">
          <div class="icon-card-pattern">
            ${map(
              this.options,
              ({
                headText,
                iconName,
                ctaText,
                supportText,
                container,
                ctaHref,
              }) => html` <space-icon-card
                icon-name=${iconName}
                ?container=${container}
                head-text=${headText}
                cta-href=${ctaHref}
                cta-text=${ctaText}
                support-text=${supportText}
                alignment=${this.iconCardAllignment}
              ></space-icon-card>`
            )}
          </div>
          <div class="form-container">
            <space-form
              ?heading=${false}
              ?background=${false}
              first-name-label=${this.firstNameLabel}
              first-name-value=${this.firstNameValue}
              first-name-placeholder=${this.firstNamePlaceholder}
              ?first-name-error=${this.firstNameError}
              first-name-errorhint=${this.firstNameErrorHint}
              last-name-label=${this.lastNameLabel}
              last-name-value=${this.lastNameValue}
              last-name-placeholder=${this.lastNamePlaceholder}
              ?last-name-error=${this.lastNameError}
              last-name-errorhint=${this.lastNameErrorHint}
              email-label=${this.emailLabel}
              email-value=${this.emailValue}
              ?email-error=${this.emailError}
              email-errorhint=${this.emailErrorHint}
              email-placeholder=${this.emailPlaceholder}
              phone-label=${this.phoneLabel}
              phone-value=${this.phoneValue}
              ?phone-error=${this.phoneError}
              phone-errorhint=${this.phoneErrorHint}
              phone-placeholder=${this.phonePlaceholder}
              message-label=${this.messageLabel}
              ?message-error=${this.messageError}
              message-errorhint=${this.messageErrorHint}
              message-placeholder=${this.messagePlaceholder}
              message-value=${this.messageValue}
              button-text=${this.buttonText}
            ></space-form>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-icon-and-form': IconAndForm;
  }
}
