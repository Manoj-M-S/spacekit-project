import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './ContactSection.scss.lit';
import '../../../01-stars/Link/src/Link';
import '../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../02-Constellations/SectionHeading/src/SectionHeading';

type IconCardAlignment = 'left' | 'center';
type SectionHeadingView = 'center' | 'split' | 'default';

export interface IconCardOption {
  iconName: string;
  ctaText: string;
  ctaHref: string;
  supportText: string;
  headText: string;
  container: boolean;
}

@customElement('space-contact-section')
export default class ContactSection extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property({ type: Array<IconCardOption> })
  options!: IconCardOption[];

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading: string = '';

  /** @attr heading-text */
  @property({ type: String, attribute: 'heading-text' })
  headingText: string = '';

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText: string = '';

  /** @attr icon-card-allignment */
  @property({ type: String, attribute: 'icon-card-allignment' })
  iconCardAllignment!: IconCardAlignment;

  /** @attr orientation */
  @property()
  sectionOrientation!: SectionHeadingView;

  render() {
    const iconCardClass = {
      'icon-card-pattern': true,
    };
    return html`
      <div class="contact-section">
        ${this.headingText || this.subHeading
          ? html`<space-section-heading
              sub-heading=${this.subHeading}
              head-text=${this.headingText}
              support-text=${this.supportText}
              orientation=${this.sectionOrientation}
            ></space-section-heading>`
          : null}
        <div class=${classMap(iconCardClass)}>
          ${map(
            this.options,
            ({
              headText,
              iconName,
              ctaText,
              supportText,
              container,
              ctaHref,
            }) => html` <space-icon-card
              icon-name=${iconName}
              ?container=${container}
              head-text=${headText}
              cta-href=${ctaHref}
              cta-text=${ctaText}
              support-text=${supportText}
              alignment=${this.iconCardAllignment}
            ></space-icon-card>`
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-contact-section': ContactSection;
  }
}
