import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './TypeFourteen.scss.lit';
import '../../../../01-stars/Link/src/Link';
import '../../../../01-stars/Input/src/Input';
import '../../../../02-Constellations/Navigation/src/Navigation';
import '../../../../01-stars/Image/src/Image';

interface NavigationOptions {
  navigationText: string;
  navigationHref: string;
}

@customElement('space-footer-type-fourteen')
export default class TypeFourteen extends LitElement {
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

  /** @attr input-placeholder */
  @property({ type: String, attribute: 'input-placeholder' })
  inputPlaceholder: string = '';

  /** @attr input-label */
  @property({ type: String, attribute: 'input-label' })
  inputLabel: string = '';

  /** @attr btn-label */
  @property({ type: String, attribute: 'btn-label' })
  btnLabel: string = '';

  @property()
  quickLinks!: NavigationOptions[];

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

    return html`
      <div class=${classMap(footerClass)}>
        <div class="section-link-container">
          <space-image src=${this.logoSrc} alt=${this.logoAlt}></space-image>
          <space-navigation
            navigation-size="small"
            navigation-color=${this.renderLinkColor()}
            .options=${this.quickLinks}
            class="navigation-class"
            orientation="horizontal"
          >
          </space-navigation>
        </div>
        <div class="section">
          <hr class=${classMap(dividerClass)} />
          <div class="footer-container">
            <div class="newsletter">
              <space-input
                class="input-class"
                type="email"
                placeholder=${this.inputPlaceholder}
                label=${this.inputLabel}
              ></space-input>
              <space-button class="btn-class" button-variant="primary"
                >${this.btnLabel}</space-button
              >
            </div>
            <div class=${classMap(footerTextClass)}>${this.footerText}</div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-footer-type-fourteen': TypeFourteen;
  }
}
