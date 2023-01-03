import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Map.scss.lit';

@customElement('space-map')
export default class Map extends LitElement {
  static styles = [styles];

  /** @attr map-source */
  @property({ type: String, attribute: 'map-source' })
  mapSource: string = '';

  render() {
    const mapClass = {
      map: true,
    };

    return html`
      <div class=${classMap(mapClass)}>
        <iframe
          src=${this.mapSource}
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          data-loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-map': Map;
  }
}
