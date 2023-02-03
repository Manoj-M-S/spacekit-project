import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/button';
import '../../../01-stars/Icon';
import '../../../01-stars/Image/src/Image';
import styles from './Header.scss.lit';

@customElement('space-header')
export default class Header extends LitElement {
  static styles = [styles];

  /** @attr logo-src */
  @property({ attribute: 'logo-src' })
  logoSrc!: string;

  /** @attr logo-alt */
  @property({ attribute: 'logo-alt' })
  logoAlt!: string;

  /** @attr search */
  @property()
  search: boolean = false;

  /** @attr cta-text-one */
  @property({ attribute: 'cta-text-one' })
  ctaTextOne!: string;

  /** @attr cta-text-two */
  @property({ attribute: 'cta-text-two' })
  ctaTextTwo!: string;

  @property()
  showDropDown: boolean = false;

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
            ?hidden=${!this.showDropDown}
            >${this.ctaTextOne}</space-button
          >`
        : null}
      ${this.ctaTextTwo
        ? html`<space-button
            class="cta-btn"
            button-size="lg"
            button-variant="primary"
            ?hidden=${!this.showDropDown}
            >${this.ctaTextTwo}</space-button
          >`
        : null}
    `;
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

          <div class="cta-container small">${this.renderCta()}</div>
        </div>

        ${this.search
          ? html`<button class="search">
              <space-icon class="search-icon" icon-name="search"></space-icon>
            </button>`
          : null}

        <div @click=${this.handleDropDown} class="hamburger">
          <space-icon class="hamburger-icon" icon-name="menu"></space-icon>
        </div>

        <div class="cta-container large">${this.renderCta()}</div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-header': Header;
  }
}
