import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './Footer.scss.lit';
import '../../../01-stars/Link/src/Link';
import '../../../01-stars/Image/src/Image';
import '../../../01-stars/Input/src/Input';
import '../../../02-Constellations/Navigation/src/Navigation';

export interface NavigationOptions {
  navigationText: string;
  navigationHref: string;
}

export interface LinkOptions {
  heading: string;
  options: NavigationOptions[];
}

@customElement('space-footer-type-one')
export default class Footer extends LitElement {
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

  /** @attr background */
  @property({ type: Boolean, attribute: 'background' })
  background: boolean = false;

  @property()
  linkOptions!: LinkOptions[];

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

    return html`
      <div class=${classMap(footerClass)}>
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
    'space-footer-type-one': Footer;
  }
}
