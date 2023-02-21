import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Style1.scss.lit';
import '../../../../01-stars/Link/src/Link';
import '../../../../01-stars/Input/src/Input';
import '../../../../02-Constellations/Navigation/src/Navigation';
import '../../../../01-stars/Image/src/Image';
import '../../../../02-Constellations/Stats/src/Stats';

interface StatsOption {
  heading: string;
  linkText: string;
  linkHref: string;
}

@customElement('space-herobanner-style1')
export class Style1 extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr supportive-text */
  @property({ type: String, attribute: 'supportive-text' })
  supportiveText: string = '';

  /** @attr input-placeholder */
  @property({ type: String, attribute: 'input-placeholder' })
  inputPlaceholder: string = '';

  /** @attr btn-text */
  @property({ type: String, attribute: 'btn-text' })
  btnText: string = '';

  @property()
  statsOption!: StatsOption[];

  render() {
    return html`
      <div class="hero-banner-style1">
        <div class="content">
          <div class="text-content">
            <div class="title">${this.title}</div>
            <div class="support-text">${this.supportiveText}</div>
          </div>
          <div class="newsletter">
            <space-input
              class="input-class"
              type="email"
              icon-name="mail"
              placeholder=${this.inputPlaceholder}
              ?hide-label=${true}
            ></space-input>
            <space-button class="btn-class" button-variant="primary"
              >${this.btnText}</space-button
            >
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-herobanner-style1': Style1;
  }
}
