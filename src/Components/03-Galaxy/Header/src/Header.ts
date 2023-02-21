import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/button';
import '../../../01-stars/Icon';
import '../../../01-stars/Image/src/Image';
import { LinkOptions } from '../TwoColLinks/TwoColLinks';
import styles from './Header.scss.lit';

@customElement('space-header')
export class Header extends LitElement {
  static styles = [styles];

  /** @attr logo-src */
  @property({ attribute: 'logo-src' })
  logoSrc!: string;

  /** @attr logo-alt */
  @property({ attribute: 'logo-alt' })
  logoAlt!: string;

  /** @attr search */
  @property({ type: Boolean })
  search: boolean = false;

  /** @attr cta-text-one */
  @property({ attribute: 'cta-text-one' })
  ctaTextOne!: string;

  /** @attr cta-text-two */
  @property({ attribute: 'cta-text-two' })
  ctaTextTwo!: string;

  /** @attr hamburger */
  @property({ type: Boolean })
  hamburger: boolean = false;

  @property()
  showDropDown: boolean = false;

  /** @attr linkOptions */
  @property()
  linkOptions: LinkOptions[] = [];

  handleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  renderCta() {
    return html`
      ${this.ctaTextOne
        ? html`<space-button
            class="cta-btn"
            button-size="lg"
            button-variant="secondary"
            >${this.ctaTextOne}</space-button
          >`
        : null}
      ${this.ctaTextTwo
        ? html`<space-button
            class="cta-btn"
            button-size="lg"
            button-variant="primary"
            >${this.ctaTextTwo}</space-button
          >`
        : null}
    `;
  }

  handleSearch() {
    const customEvent = new CustomEvent('onSearch');

    this.dispatchEvent(customEvent);
  }

  render() {
    const headerClass = {
      header: true,
    };
    return html`
      <header class=${classMap(headerClass)}>
        ${this.logoSrc && this.logoAlt
          ? html`
              <space-image
                src=${this.logoSrc}
                alt=${this.logoAlt}
              ></space-image>
            `
          : null}

        <div
          class=${classMap({
            'submenu': true,
            'show-menu': this.showDropDown,
          })}
        >
          <slot name="subMenu"></slot>

          ${this.linkOptions.length
            ? html`
                <ul class="footer-links">
                  ${map(
                    this.linkOptions,
                    ({ text, href }) => html`
                      <li class="list-items">
                        ${href && text
                          ? html`<a class="link" href=${href}>${text}</a>`
                          : null}
                      </li>
                    `
                  )}
                </ul>
              `
            : null}
          <div class="cta-container small" ?hidden=${!this.showDropDown}>
            ${this.renderCta()}
          </div>
        </div>

        ${this.search
          ? html`<button @click=${this.handleSearch} class="search">
              <space-icon class="search-icon" icon-name="search"></space-icon>
            </button>`
          : null}

        <button
          @click=${this.handleDropDown}
          class=${classMap({ 'hamburger': true, 'hide-menu': this.hamburger })}
        >
          <space-icon
            class="hamburger-icon"
            icon-name=${this.showDropDown ? 'x' : 'menu'}
          ></space-icon>
        </button>

        <div class="cta-container large">${this.renderCta()}</div>
      </header>

      <div
        class=${classMap({
          'branched-hamburger': true,
          'hide-menu': !this.showDropDown,
        })}
      >
        <slot name="branchedHamburger"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-header': Header;
  }
}
