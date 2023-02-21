import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './TypeSeven.scss.lit';
import '../../../../02-Constellations/Navigation/src/Navigation';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/Input/src/Input';

interface NavigationOptions {
  navigationText: string;
  navigationHref: string;
}

interface LinkOptions {
  heading: string;
  options: NavigationOptions[];
}

@customElement('space-footer-type-seven')
export class TypeSeven extends LitElement {
  static styles = [styles];

  /** @attr footer-text */
  @property({ type: String, attribute: 'footer-text' })
  footerText: string = '';

  /** @attr logo-src */
  @property({ type: String, attribute: 'logo-src' })
  logoSrc: string = '';

  /** @attr logo-alt */
  @property({ type: String, attribute: 'logo-alt' })
  logoAlt: string = '';

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr background */
  @property({ type: Boolean, attribute: 'background' })
  background: boolean = false;

  @property()
  linkOptions!: LinkOptions[];

  /** @attr input-placeholder */
  @property({ type: String, attribute: 'input-placeholder' })
  inputPlaceholder: string = '';

  /** @attr btn-label */
  @property({ type: String, attribute: 'btn-label' })
  btnLabel: string = '';

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

    const footerTextClass = {
      'footer-text': true,
      'footer-text-bg': this.background,
    };

    const dividerClass = {
      'divider': true,
      'divider-dark': this.background,
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
        <div class="newsletter">
          <div class="news-content">
            <div class=${classMap(titleClass)}>${this.title}</div>
            <div class=${classMap(supportiveTextClass)}>
              ${this.supportiveText}
            </div>
          </div>
          <div class="form">
            <space-input
              class="input-class"
              type="email"
              placeholder=${this.inputPlaceholder}
            ></space-input>
            <space-button class="btn-class" button-variant="primary"
              >${this.btnLabel}</space-button
            >
          </div>
        </div>
        <hr class=${classMap(dividerClass)} />
        <div class="content content-links">
          ${map(
            this.linkOptions,
            ({ heading, options }) => html`
              <space-navigation
                class="navigation-class"
                navigation-size="small"
                navigation-color=${this.renderLinkColor()}
                .options=${options}
                heading=${heading}
              >
              </space-navigation>
            `
          )}
        </div>
        <div class="container">
          <hr class=${classMap(dividerClass)} />
          <div class="footer-content">
            <space-image src=${this.logoSrc} alt=${this.logoAlt}></space-image>
            <div class=${classMap(footerTextClass)}>${this.footerText}</div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-footer-type-seven': TypeSeven;
  }
}
