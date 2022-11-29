import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import styles from './Tabs.scss.lit';
import '../../Icon/src/Icon';

export const tabVariant = [
  'underline',
  'underlineFilled',
  'filledLight',
  'filledDark',
  'container1Light',
  'container1Dark',
  'container2',
] as const;

export type TabVariant = typeof tabVariant[number];

export type TabSize = 'default' | 'large';

export type TabOrientation = 'horizontal' | 'vertical';

export interface TabOptions {
  name: string;
  iconName?: string;
}

@customElement('space-tab')
export default class Tab extends LitElement {
  static styles = [styles];

  /** @attr variant */
  @property({ type: String })
  variant: TabVariant = 'underline';

  /** @attr size */
  @property({ type: String })
  size: TabSize = 'default';

  /** @attr options */
  @property({ type: String })
  options: TabOptions[] = [];

  /** @attr orientation */
  @property({ type: String })
  orientation!: TabOrientation;

  /** @attr icon */
  @property({ type: Boolean })
  icon!: boolean;

  @state()
  selectedTab: number | undefined = 0;

  handleSelectTab(event: Event) {
    const tabId = (event.currentTarget as HTMLElement).dataset.tabid;
    this.selectedTab = parseInt(tabId || '0');
  }

  render() {
    const tabClass = {
      tab: true,
      [`size-${this.size}`]: this.size,
      [`variant-${this.variant}`]: this.variant,
      [`tab-${this.orientation}`]:
        this.orientation && this.variant !== 'container2',
    };
    return html`
      <ul role="tablist" class=${classMap(tabClass)}>
        ${map(this.options, ({ name, iconName }, index) => {
          const tabItemClass = {
            'tab-item': true,
            [`active-tab`]: index === this.selectedTab,
          };

          return html`
            <li
              role="tab"
              data-tabid=${index}
              @click=${this.handleSelectTab}
              class=${classMap(tabItemClass)}
            >
              ${iconName && this.icon
                ? html`<space-icon
                    class="tab-icon"
                    icon-name=${iconName}
                  ></space-icon>`
                : null}
              ${name ? html`<p class="tab-content">${name}</p>` : null}
            </li>
          `;
        })}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-tab': Tab;
  }
}
