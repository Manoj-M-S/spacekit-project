import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './NotificationBanner.scss.lit';
import '../../../01-stars/Link/src/Link';

export type Background = 'primaryDark' | 'neutralMedium' | 'neutralExtraDark';
export type Size = 'small' | 'large';

@customElement('space-notification')
export class NotificationBanner extends LitElement {
  static styles = [styles];

  /** @attr show-icon */
  @property({ type: Boolean, attribute: 'show-icon' })
  showIcon: boolean = false;

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName: string = '';

  /** @attr background */
  @property({ type: String, attribute: 'background' })
  background: Background = 'primaryDark';

  /** @attr size */
  @property({ type: String, attribute: 'size' })
  size: Size = 'small';

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr link-text */
  @property({ type: String, attribute: 'link-text' })
  linkText: string = '';

  /** @attr link-href */
  @property({ type: String, attribute: 'link-href' })
  linkHref: string = '';

  @state()
  onClick!: () => void;

  renderLinkIcon() {
    const iconClass = {
      'link-icon': true,
      'right': true,
      [`icon-${this.background}`]: this.background,
    };
    return html` <space-icon
      class=${classMap(iconClass)}
      icon-name="arrowRight"
    ></space-icon>`;
  }

  render() {
    const bannerClass = {
      'notification-banner': true,
      [`background-bg-${this.background}`]: this.background,
    };

    const iconClass = {
      icon: true,
      [`icon-${this.background}`]: this.background,
    };

    const titleClass = {
      title: true,
      [`title-${this.background}`]: this.background,
    };

    const linkClass = {
      link: true,
      [`link-${this.background}`]: this.background,
    };

    const bannerSize = {
      [`banner-${this.size}`]: this.size,
    };
    return html`
      <div class=${classMap(bannerClass)}>
        <div class=${classMap(bannerSize)}>
          <div class="main">
            ${this.showIcon
              ? html`<space-icon
                  icon-name="globe"
                  class=${classMap(iconClass)}
                ></space-icon>`
              : null}
            <div class=${classMap(titleClass)}>${this.title}</div>
          </div>
          <a class=${classMap(linkClass)} href=${this.linkHref}
            >${this.linkText} ${this.renderLinkIcon()}</a
          >
        </div>
        <a href="#" @click=${this.onClick}
          ><space-icon class=${classMap(iconClass)} icon-name="x"></space-icon
        ></a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-notification': NotificationBanner;
  }
}
