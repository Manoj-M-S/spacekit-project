import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import styles from './PaginationIndicatorBase.scss.lit';

export type PaginationIndicatorBaseStyleType =
  | 'dot'
  | 'line'
  | 'dash'
  | 'fraction';

export type PaginationIndicatorBaseColor =
  | 'primaryLight'
  | 'primaryDark'
  | 'greyLight'
  | 'greyDark';

const formatNumber = (value: number) => (value < 10 ? `0${value}` : value);

@customElement('space-pagination-indicator')
export default class PaginationIndicatorBase extends LitElement {
  static styles = [styles];

  /** @attr style */
  @property({ attribute: 'style' })
  paginationStyle: PaginationIndicatorBaseStyleType = 'dot';

  /** @attr colour */
  @property()
  colour: PaginationIndicatorBaseColor = 'primaryLight';

  /** @attr total */
  @property({ type: Number, attribute: 'total', reflect: true })
  totalPage: number = 0;

  /** @attr page-size */
  @property({ type: Number, attribute: 'page-size' })
  pageSize: number = 0;

  /** @attr current-page */
  @property({ type: Number, attribute: 'current-page' })
  currentPageNumber: number = 1;

  @state()
  paginationRange: Array<any> = [];

  @state()
  lastPageNumber: number = 0;

  calculation() {
    const totalPageCount = Math.ceil(this.totalPage / this.pageSize);

    this.paginationRange = [...Array(totalPageCount)].map((_, i) => i + 1);

    if (this.paginationRange) {
      this.lastPageNumber =
        this.paginationRange[this.paginationRange.length - 1];
    }
  }

  firstUpdated() {
    this.calculation();
  }

  onPageChangeHandle = (pageNumber: number) => () => {
    this.currentPageNumber = pageNumber;

    const detail = { pageNumber };

    const customEvent = new CustomEvent('onPageChange', {
      detail,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  };

  render() {
    if (this.paginationRange?.length < 1) {
      return null;
    }

    const pageIndicatorClass = {
      'pagination-indicator': true,
      [`pagination-indicator-colour-${this.colour}`]: this.colour,
      [`pagination-indicator-style-${this.paginationStyle}`]:
        this.paginationStyle,
    };

    return html`
      <div class=${classMap(pageIndicatorClass)}>
        ${this.paginationStyle !== 'fraction'
          ? html` <ul class="pagination-indicator-list">
              ${map(this.paginationRange, pageNumber => {
                const pageNumberClass = {
                  'pagination-indicator-list-item': true,
                  'pagination-indicator-current-page-number':
                    this.currentPageNumber === pageNumber,
                  'pagination-indicator-last-page-number':
                    this.lastPageNumber === pageNumber,
                  [`pagination-indicator-style-${this.paginationStyle}`]:
                    this.paginationStyle,
                  [`pagination-indicator-colour-${this.colour}`]: this.colour,
                };
                return html`<li
                  class=${classMap(pageNumberClass)}
                  @click=${this.onPageChangeHandle(pageNumber)}
                >
                  ${this.paginationStyle === 'dash'
                    ? html`
                        <p class="pagination-indicator-dash-text">
                          ${formatNumber(pageNumber)}
                        </p>
                        ${this.currentPageNumber === pageNumber
                          ? html` <span
                              class="pagination-indicator-dash"
                            ></span>`
                          : null}
                      `
                    : null}
                </li>`;
              })}
            </ul>`
          : html`
              <span
                class="pagination-indicator-number-text pagination-indicator-current-page-text"
              >
                ${formatNumber(this.currentPageNumber)}
              </span>
              <span
                class="pagination-indicator-number-text pagination-indicator-last-page-text"
              >
                / ${formatNumber(this.lastPageNumber)}
              </span>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-pagination-indicator': PaginationIndicatorBase;
  }
}
