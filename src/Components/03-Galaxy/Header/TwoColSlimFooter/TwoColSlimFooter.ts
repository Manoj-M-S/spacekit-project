import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { NavSize, NavState } from '../../../02-Constellations/Menu';
import styles from './TwoColSlimFooter.scss.lit';

export interface TwoColSlimFooterOptions {
  /** title */
  title: string;
  /**  description */
  description: string;
  /** icon name */
  iconName: string;
  /** size */
  size?: NavSize;
  /** state */
  state?: NavState;
}

@customElement('space-twocolslimfooter')
export class TwoColSlimFooter extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options: TwoColSlimFooterOptions[] = [];

  /** @attr footer-text */
  @property({ attribute: 'footer-text' })
  footerText!: string;

  /** @attr footer-href */
  @property({ attribute: 'footer-href' })
  footerHref!: string;

  render() {
    return html`
      <ul class="two-col-slim-footer">
        ${map(
          this.options,
          ({
            title,
            iconName,
            description,
            size = 'small',
            state = 'default',
          }) =>
            html`
              <space-nav-menu-item
                size=${size}
                title=${title}
                state=${state}
                icon-name=${iconName}
                description=${description}
              >
              </space-nav-menu-item>
            `
        )}
      </ul>
      <div class="footer">
        ${this.footerText && this.footerHref
          ? html`<a class="footer-text" href=${this.footerHref}
              >${this.footerText}</a
            >`
          : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-twocolslimfooter': TwoColSlimFooter;
  }
}
