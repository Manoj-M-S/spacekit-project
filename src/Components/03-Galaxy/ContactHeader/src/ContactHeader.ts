import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './ContactHeader.scss.lit';
import '../../../02-Constellations/Form/src/Form';

type ImageVariant = 'left' | 'right';

@customElement('space-contact-header')
export default class ContactHeader extends LitElement {
  static styles = [styles];

  /** @attr center */
  @property({ type: Boolean, attribute: 'center' })
  center: boolean = false;

  /** @attr heading */
  @property({ type: Boolean, attribute: 'heading' })
  heading: boolean = false;

  /** @attr heading-text */
  @property({ type: String, attribute: 'heading-text' })
  headingText: string = '';

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading: string = '';

  /** @attr email-text */
  @property({ type: String, attribute: 'email-text' })
  emailText: string = '';

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr sub-title */
  @property({ type: String, attribute: 'sub-title' })
  subTitle: string = '';

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText: string = '';

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

  /** @attr image-src */
  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  /** @attr image-variant */
  @property({ type: String, attribute: 'image-variant' })
  imageVariant: string = '';

  render() {
    const contactFormClass = {
      'contact-form-container': true,
      [`contact-center`]: this.center,
    };
    const contactImageClass = {
      'contact-image': true,
      [`image-${this.imageVariant}`]: this.imageVariant,
    };

    return html`
      <div class="contact-header">
        ${this.title || this.subTitle || this.supportText
          ? html`<div class="content">
              ${this.title
                ? html`<div class="title">${this.title}</div>`
                : null}
              ${this.subTitle
                ? html`<div class="sub-title">${this.subTitle}</div>`
                : null}
              ${this.supportText
                ? html`<div class="support-text">${this.supportText}</div>`
                : null}
            </div>`
          : null}

        <div class=${classMap(contactFormClass)}>
          <space-form
            class="space-form-class"
            ?heading=${this.heading}
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
            heading-text=${this.headingText}
            sub-heading=${this.subHeading}
            email-text=${this.emailText}
          ></space-form>

          <img class=${classMap(contactImageClass)} src=${this.imageSrc} />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-contact-header': ContactHeader;
  }
}
