import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Form.scss.lit';
import '../../../01-stars/Input/src/Input';
import '../../../01-stars/button/src/Button';
import '../../../01-stars/Input/src/TextArea/TextArea';
import '../../../01-stars/Checkbox/src/Checkbox';

@customElement('space-form')
export default class Form extends LitElement {
  static styles = [styles];

  /** @attr heading-text */
  @property({ type: String, attribute: 'heading-text' })
  headingText: string = '';

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading: string = '';

  /** @attr email-text */
  @property({ type: String, attribute: 'email-text' })
  emailText: string = '';

  /** @attr heading */
  @property({ type: Boolean })
  heading: boolean = false;

  /** @attr background */
  @property({ type: Boolean })
  background: boolean = false;

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

  /** @attr condition-checkbox */
  @property({ type: Boolean, attribute: 'condition-checkbox' })
  conditionCheckbox: boolean = false;

  /** @attr condition-checkbox-text */
  @property({ type: String, attribute: 'condition-checkbox-text' })
  conditionCheckboxText: string = '';

  /** @attr upload-file */
  @property({ type: Boolean, attribute: 'upload-file' })
  uploadFile: boolean = false;

  /** @attr upload-file-label */
  @property({ type: String, attribute: 'upload-file-label' })
  uploadFileLabel: string = '';

  /** @attr file-error */
  @property({ type: Boolean, attribute: 'file-error' })
  fileError: boolean = false;

  /** @attr file-error-hint */
  @property({ type: String, attribute: 'file-error-hint' })
  fileErrorHint: string = '';

  /** @attr options */
  @property({ attribute: 'options' })
  options!: { text: string }[];

  /** @attr selection-heading */
  @property({ type: String, attribute: 'selection-heading' })
  selectionHeading: string = '';

  render() {
    const formClass = {
      'form-container': true,
      'bg-container': this.background ? true : false,
    };
    return html`
      <div class=${classMap(formClass)}>
        ${(this.headingText || this.subHeading) && this.heading
          ? html`
              <div class="heading">
                <div class="title">${this.headingText}</div>
                <div class="sub-text">
                  ${this.subHeading}<span class="email-text-lg"
                    >&nbsp;${this.emailText}</span
                  >
                </div>
                <div class="email-text-sm">${this.emailText}</div>
              </div>
            `
          : null}
        <form class="form">
          <fieldset class="fieldset">
            <space-input
              class="container-width"
              type="text"
              label=${this.firstNameLabel}
              value=${this.firstNameValue}
              placeholder=${this.firstNamePlaceholder}
              ?is-error=${this.firstNameError}
              error-hint=${this.firstNameErrorHint}
            >
            </space-input>
            <space-input
              class="container-width"
              type="text"
              label=${this.lastNameLabel}
              value=${this.lastNameValue}
              placeholder=${this.lastNamePlaceholder}
              ?is-error=${this.lastNameError}
              error-hint=${this.lastNameErrorHint}
            >
            </space-input>
          </fieldset>
          <space-input
            class="container-width"
            type="email"
            label=${this.emailLabel}
            value=${this.emailValue}
            placeholder=${this.emailPlaceholder}
            ?is-error=${this.emailError}
            error-hint=${this.emailErrorHint}
          >
          </space-input>
          <space-input
            class="container-width"
            type="number"
            label=${this.phoneLabel}
            value=${this.phoneValue}
            placeholder=${this.phonePlaceholder}
            ?is-error=${this.phoneError}
            error-hint=${this.phoneErrorHint}
          >
          </space-input>
          <space-textarea
            class="container-width"
            label=${this.messageLabel}
            value=${this.messageValue}
            placeholder=${this.messagePlaceholder}
            ?is-error=${this.messageError}
            error-hint=${this.messageErrorHint}
          >
          </space-textarea>
          ${this.conditionCheckbox && this.conditionCheckboxText
            ? html`
                <space-checkbox
                  size="sm"
                  text=${this.conditionCheckboxText}
                ></space-checkbox>
              `
            : null}
          ${this.uploadFile
            ? html`
                <space-input
                  type="file"
                  label=${this.uploadFileLabel}
                  value=${this.phoneValue}
                  ?is-error=${this.fileError}
                  error-hint=${this.fileErrorHint}
                >
                </space-input>
              `
            : null}
          ${this.options
            ? html`
                <div class="selection-heading">${this.selectionHeading}</div>
                <div class="selection-checkbox">
                  ${map(
                    this.options,
                    ({ text }) => html`
                      <space-checkbox
                        class="sp-checkbox"
                        size="sm"
                        text=${text}
                      ></space-checkbox>
                    `
                  )}
                </div>
              `
            : null}
          <slot></slot>
          <space-button
            class="submit-button"
            button-size="xl"
            button-variant="primary"
            >${this.buttonText}</space-button
          >
        </form>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-form': Form;
  }
}
