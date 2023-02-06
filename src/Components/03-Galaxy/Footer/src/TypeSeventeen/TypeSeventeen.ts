import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './TypeSeventeen.scss.lit';
import '../../../../01-stars/Link/src/Link';
import '../../../../01-stars/Input/src/Input';
import '../../../../02-Constellations/Navigation/src/Navigation';
import '../../../../01-stars/Image/src/Image';

interface NavigationOptions {
  navigationText: string;
  navigationHref: string;
}

interface FooterLinkOptions {
  linkHref: string;
  linkText: string;
}

@customElement('space-footer-type-seventeen')
export default class TypeSeventeen extends LitElement {
  static styles = [styles];

  /** @attr footer-text */
  @property({ type: String, attribute: 'footer-text' })
  footerText: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr logo-src */
  @property({ type: String, attribute: 'logo-src' })
  logoSrc: string = '';

  /** @attr logo-alt */
  @property({ type: String, attribute: 'logo-alt' })
  logoAlt: string = '';

  /** @attr background */
  @property({ type: Boolean, attribute: 'background' })
  background: boolean = false;

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnTxt: string = '';

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnTxt: string = '';

  @property()
  quickLinks!: NavigationOptions[];

  @property()
  footerLinkOptions!: FooterLinkOptions[];

  renderLinkColor() {
    const linktColor = this.background
      ? 'darkGreyBackground'
      : 'whiteBackground';
    return linktColor;
  }

  render() {
    const footerClass = {
      'footer': true,
      'background-dark': this.background,
    };

    const dividerClass = {
      'divider': true,
      'divider-dark': this.background,
    };

    const footerTextClass = {
      'footer-text': true,
      'text-dark': this.background,
    };

    const linkTextClass = {
      'link': true,
      'link-dark': this.background,
    };

    const titleClass = {
      'title': true,
      'title-dark': this.background,
    };

    const supportiveTextClass = {
      'supportive-text': true,
      'supportive-text-dark': this.background,
    };

    return html`
      <div class=${classMap(footerClass)}>
        <div class="container">
          <div class="content">
            <space-image src=${this.logoSrc} alt=${this.logoAlt}></space-image>
            <div class="text-container">
              <div class=${classMap(titleClass)}>${this.title}</div>
              <div class=${classMap(supportiveTextClass)}>
                ${this.supportiveText}
              </div>
            </div>
            <div class="action">
              <space-button
                class="btn-class"
                iconname="playCircle"
                button-variant="secondary"
                >${this.primaryBtnTxt}</space-button
              >
              <space-button class="btn-class" button-variant="primary"
                >${this.secondaryBtnTxt}</space-button
              >
            </div>
          </div>
        </div>
        <div class="section">
          <hr class=${classMap(dividerClass)} />
          <div class="footer-container">
            <div class=${classMap(footerTextClass)}>${this.footerText}</div>
            <div class="footer-links">
              ${map(
                this.footerLinkOptions,
                ({ linkHref, linkText }) => html`<a
                  class=${classMap(linkTextClass)}
                  href=${linkHref}
                  >${linkText}
                </a>`
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-footer-type-seventeen': TypeSeventeen;
  }
}
