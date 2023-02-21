import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Stats.scss.lit';
import '../../../01-stars/Icon';

export type Statsview = 'center' | 'default';
@customElement('space-stats')
export default class Stats extends LitElement {
  static styles = [styles];

  /** @attr action */
  @property({ type: Boolean })
  action!: Boolean;

  /** @attr orientation */
  @property()
  orientation!: Statsview;

  /** @attr heading-text */
  @property({ type: String, attribute: 'heading-text' })
  headingText!: string;

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText!: string;

  /** @attr cta-href */
  @property({ type: String, attribute: 'cta-href' })
  ctaHref!: string;

  /** @attr container */
  @property({ type: Boolean })
  container!: boolean;

  @property({ type: Boolean })
  isBorder!: boolean;

  render() {
    const statClass = {
      stat: true,
      [`stat-orientation-${this.orientation}`]: this.orientation,
    };
    return html`
      <div class=${classMap(statClass)}>
        <div class="${this.container ? 'stat-container' : ''} ">
          <div class="${this.isBorder ? 'stat-border' : ''}">
            <div class="stat-content">
              <div class="stat-icon">
                <h1 class="stat-heading-text">${this.headingText}</h1>
                <p class="stat-subheading">${this.subHeading}</p>
                <p class="stat-supportive-text">${this.supportText}</p>

                <div class="stat-arrow">
                  ${this.action
                    ? html`
                        <space-link
                          class="icon-card-cta"
                          href=${this.ctaHref}
                          iconaftertext
                          iconname="arrowRight"
                          >${'Learn More'}</space-link
                        >
                      `
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-stats': Stats;
  }
}
