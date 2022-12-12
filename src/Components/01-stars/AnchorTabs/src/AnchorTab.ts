import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import styles from './AnchorTab.scss.lit';
import '../../Tabs/src/Tab';
import { TabOptions, TabOrientation } from '../../Tabs/src/Tab';

@customElement('space-anchortab')
export default class AnchorTab extends LitElement {
  static styles = [styles];

  /** @attr options */
  @property()
  options!: TabOptions[];

  /** @attr orientation */
  @property({ type: String })
  orientation!: TabOrientation;

  render() {
    return html`
      <space-tab
        size="default"
        variant=${this.orientation === 'vertical' ? 'container2' : 'underline'}
        orientation=${this.orientation}
        .options=${this.options}
      >
      </space-tab>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-anchortab': AnchorTab;
  }
}
