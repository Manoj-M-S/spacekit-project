import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './ImagesAndColourBlockedBackground.scss.lit';

@customElement('space-ImagesAndColourBlockedBackground')
export default class ImagesAndColourBlockedBackground extends LitElement {
  static styles = [styles];

  render() {
    return html` <div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-ImagesAndColourBlockedBackground': ImagesAndColourBlockedBackground;
  }
}
