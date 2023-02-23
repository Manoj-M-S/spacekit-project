import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '../../../01-stars/Icon/src/Icon';
import styles from './Content.scss.lit';

@customElement('space-content')
export default class Content extends LitElement {
  static styles = [styles];

  /** @attr heading */
  @property()
  heading!: string;

  /** @attr description */
  @property()
  description!: string;

  /** @attr options */
  @property()
  options: string[] = [];

  render() {
    return html`
      <section class="container">
        ${this.heading
          ? html` <h1 class="heading-text">${this.heading}</h1> `
          : null}
        ${this.description
          ? html` <p class="description-text">${this.description}</p> `
          : null}
        ${this.options.length
          ? html`
              <ul class="list">
                ${map(
                  this.options,
                  option => html`
                    <li class="list-items">
                      <space-icon icon-name="check" class="icon"></space-icon>
                      <p class="list-item-text">${option}</p>
                    </li>
                  `
                )}
              </ul>
            `
          : null}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-content': Content;
  }
}
