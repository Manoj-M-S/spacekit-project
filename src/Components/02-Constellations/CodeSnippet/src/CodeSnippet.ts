import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './CodeSnippet.scss.lit';

@customElement('space-code-snippet')
export class CodeSnippet extends LitElement {
  @property() code = '';
  @property() theme = ['dark', 'light', 'color'];

  static styles = [styles];

  render() {
    return html`
      <div class=${this.theme}>
        <div class="Code">${this.code}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-code-snippet': CodeSnippet;
  }
}
