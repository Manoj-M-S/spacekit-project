import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './SimpleLink01.scss.lit';
import '../../../../02-Constellations/Cards/src/IconCard/IconCard';
import '../../../../02-Constellations/Map/src/Map';

type Alignment = 'left' | 'center';

interface IconCardOption {
  iconName: string;
  ctaText: string;
  ctaHref: string;
  supportText: string;
  headText: string;
}

@customElement('space-contact-header-simplelink')
export class SimpleLink01 extends LitElement {
  static styles = [styles];

  /** @attr container */
  @property({ type: Boolean, attribute: 'container' })
  container: boolean = false;

  /** @attr options */
  @property({ type: Array<IconCardOption> })
  options!: IconCardOption[];

  /** @attr allignment */
  @property({ type: String, attribute: 'allignment' })
  allignment!: Alignment;

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title: string = '';

  /** @attr sub-title */
  @property({ type: String, attribute: 'sub-title' })
  subTitle: string = '';

  /** @attr support-text */
  @property({ type: String, attribute: 'support-text' })
  supportText: string = '';

  /** @attr map-source */
  @property({ type: String, attribute: 'map-source' })
  mapSource: string = '';

  render() {
    const contentClass = {
      content: true,
      [`content-${this.allignment}`]: this.allignment,
    };
    return html`
      <div class="contact-header-simple-link01">
        ${this.title || this.subTitle || this.supportText
          ? html`<div class=${classMap(contentClass)}>
              ${this.title
                ? html`<div class="title">${this.title}</div>`
                : null}
              ${this.subTitle
                ? html`<div class="sub-title">${this.subTitle}</div>`
                : null}
              ${this.supportText
                ? html`<div class="support-text">${this.supportText}</div>`
                : null}
            </div>`
          : null}
        ${this.mapSource
          ? html`<div class="map">
              <space-map map-source=${this.mapSource}></space-map>
            </div>`
          : null}

        <div class="icon-pattern">
          ${map(
            this.options,
            ({
              headText,
              iconName,
              ctaText,
              supportText,
              ctaHref,
            }) => html` <space-icon-card
              icon-name=${iconName}
              ?icon-container=${true}
              ?container=${this.container}
              head-text=${headText}
              cta-href=${ctaHref}
              cta-text=${ctaText}
              support-text=${supportText}
              alignment=${this.allignment}
            ></space-icon-card>`
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-contact-header-simplelink': SimpleLink01;
  }
}
