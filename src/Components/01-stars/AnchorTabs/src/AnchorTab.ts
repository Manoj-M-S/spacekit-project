import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../Tabs/src/Tab';
import { TabOptions, TabOrientation } from '../../Tabs/src/Tab';

@customElement('space-anchortab')
export class AnchorTab extends LitElement {
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
