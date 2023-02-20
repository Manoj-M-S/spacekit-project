import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './SimpleIcon04.scss.lit';
import '../../../../02-Constellations/SectionHeading/src/SectionHeading';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';

type SectionHeadingView = 'center' | 'split' | 'default';

export interface AddressCardOption {
  country: string;
  address: string;
}

@customElement('space-contact-section-type4')
export default class SimpleIcon04 extends LitElement {
  static styles = [styles];

  @property()
  addressCardOption!: AddressCardOption[];

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading: string = '';

  /** @attr heading-text */
  @property({ type: String, attribute: 'heading-text' })
  headingText: string = '';

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText: string = '';

  /** @attr orientation */
  @property()
  sectionOrientation!: SectionHeadingView;

  render() {
    const iconCardClass = {
      'icon-card-pattern': true,
    };
    return html`
      <div class="contact-section-type4">
        ${this.headingText || this.subHeading
          ? html`<space-section-heading
              class="section-heading"
              sub-heading=${this.subHeading}
              head-text=${this.headingText}
              support-text=${this.supportText}
              orientation=${this.sectionOrientation}
            ></space-section-heading>`
          : null}
        <div class=${classMap(iconCardClass)}>
          ${map(
            this.addressCardOption,
            ({ country, address }) => html`
              <div class="address-card">
                <div class="country">${country}</div>
                <div class="address">${address}</div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-contact-section-type4': SimpleIcon04;
  }
}
