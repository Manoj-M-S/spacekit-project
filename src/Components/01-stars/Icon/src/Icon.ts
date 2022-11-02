import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { icons } from '../../../../icons';
import styles from './Icon.css.lit';

@customElement('space-icon')
export default class Icon extends LitElement {
  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName: string = '';

  static styles = [styles];

  render() {
    return icons[this.iconName];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-icon': Icon;
  }
}
