import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import styles from './Search.scss.lit';
import '../../../01-stars/Tabs/src/Tab';
import '../../Cards/src/MediaCard/MediaCard';
import '../../../01-stars/Link/src/Link';

export interface SearchModalTabOption {
  /** name */
  name: string;
  /** href */
  href: string;
}

@customElement('space-search-modal')
export class Search extends LitElement {
  static styles = [styles];

  /** @attr tabOptions */
  @property()
  tabOptions: SearchModalTabOption[] = [];

  /** @attr cardOptions */
  @property()
  cardOptions: any[] = [];

  /** @attr suggestionOptions */
  @property()
  suggestionOptions: any[] = [];

  /** @attr placeholder */
  @property()
  placeholder!: string;

  /** @attr value */
  @property()
  value: string = '';

  @state()
  searchText!: string;

  handleOnChange(event: KeyboardEvent) {
    this.value = (event.target as HTMLInputElement).value;

    const data = {
      detail: event.target,
      bubbles: true,
      composed: true,
    };

    const customEvent = new CustomEvent('onSearch', data);
    this.dispatchEvent(customEvent);
  }
  handleOnClose() {
    const customEvent = new CustomEvent('onSearch');
    this.dispatchEvent(customEvent);
  }

  render() {
    return html`
      <div class="search">
        <div class="close-btn-container">
          <button @click=${this.handleOnClose} class="close-button">
            <space-icon class="close-icon" icon-name="x"></space-icon>
          </button>
        </div>

        <div class="input-container">
          <label class="search-label">
            <space-icon class="search-icon" icon-name="search"></space-icon>
            <input
              value=${this.value}
              class="search-input"
              @change=${this.handleOnChange}
              @keyup=${this.handleOnChange}
              placeholder=${this.placeholder}
            />
          </label>

          ${this.value !== ''
            ? html`<ul class="suggestion-list">
                ${map(
                  this.suggestionOptions,
                  ({ name, href }) => html`
                    ${name.toLowerCase().includes(this.value.toLowerCase())
                      ? html` <li class="suggestion-item">
                          <a class="link" href=${href}>${name}</a>
                        </li>`
                      : null}
                  `
                )}
              </ul>`
            : null}
        </div>

        ${this.tabOptions
          ? html`
              <space-tab
                size="default"
                class="search-tab"
                variant="underline"
                orientation="horizontal"
                .options=${this.tabOptions}
              >
              </space-tab>
            `
          : null}

        <ul class="search-media-list">
          ${map(
            this.cardOptions,
            ({
              href,
              src,
              alt,
              size,
              container,
              mediaFirst,
              headingText,
              supportText,
              orientation,
              subHeadingText,
            }) => html`
              <li>
                <a href=${href}>
                  <space-media-card
                    src=${src}
                    alt=${alt}
                    size=${size}
                    ?container=${container}
                    ?media-first=${mediaFirst}
                    head-text=${headingText}
                    support-text=${supportText}
                    sub-heading=${subHeadingText}
                    orientation=${orientation}
                  ></space-media-card>
                </a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-search-modal': Search;
  }
}
