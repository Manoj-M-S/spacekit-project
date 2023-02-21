import { html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../../01-stars/Icon/src/Icon';
import styles from './Pagination.scss.lit';

export type PaginationShapeType = 'circle' | 'square';
export type PaginationColorType = 'light' | 'dark';
export type PaginationCardType = 'default' | 'minimal';

const rangeSelector = (start: number, end: number): Array<number> => {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => index + start);
};

@customElement('space-pagination-number')
export class PaginationNumberBase extends LitElement {
  static styles = [styles];

  /** @attr shape */
  @property()
  shape: PaginationShapeType = 'circle';

  /** @attr color */
  @property()
  color: PaginationColorType = 'light';

  /** @attr type */
  @property()
  type: PaginationCardType = 'minimal';

  /** @attr current-page */
  @property({ type: Number, attribute: 'current-page' })
  currentPageNumber: number = 1;

  /** @attr total */
  @property({ type: Number, attribute: 'total' })
  totalPage: number = 0;

  /** @attr page-size */
  @property({ type: Number, attribute: 'page-size' })
  pageSize: number = 0;

  /** @attr btn-left-text */
  @property({ attribute: 'btn-left-text' })
  buttonLeftText: string = 'Previous';

  /** @attr btn-right-text */
  @property({ attribute: 'btn-right-text' })
  buttonRightText: string = 'Next';

  /** @attr seperator */
  @property()
  seperator: string = '...';

  /** @attr siblings-count */
  @property({ type: Number, attribute: 'siblings-count' })
  siblingsCount: number = 1;

  @state()
  paginationRange: any[] = [];

  @state()
  lastPageNumber: number = 0;

  calculations() {
    const totalPageCount = Math.ceil(this.totalPage / this.pageSize);
    const totalPageNumbers = this.siblingsCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return rangeSelector(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(this.currentPageNumber - 1, 1);
    const rightSiblingIndex = Math.min(
      this.currentPageNumber + this.siblingsCount,
      totalPageCount
    );

    const showLeftDots = leftSiblingIndex > 1;
    const showRightDots = rightSiblingIndex < totalPageCount - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * this.siblingsCount;
      const leftRange = rangeSelector(1, leftItemCount);
      this.paginationRange = [...leftRange, this.seperator, totalPageCount];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = rangeSelector(leftSiblingIndex, rightSiblingIndex);
      this.paginationRange = [
        firstPageIndex,
        this.seperator,
        ...middleRange,
        this.seperator,
        lastPageIndex,
      ];
    }

    if (!showRightDots && showLeftDots) {
      const rightItemCount = 3 + 2 * this.siblingsCount;
      const rightRange = rangeSelector(
        totalPageCount - rightItemCount,
        totalPageCount
      );
      this.paginationRange = [firstPageIndex, this.seperator, ...rightRange];
    }

    if (this.paginationRange) {
      this.lastPageNumber = this.paginationRange[
        this.paginationRange.length - 1
      ] as number;
    }

    const detail = { pageNumber: this.currentPageNumber };

    const customEvent = new CustomEvent('onPageChange', { detail });

    this.dispatchEvent(customEvent);
  }

  protected firstUpdated(): void {
    this.calculations();
  }

  renderMinimalText() {
    return html`<p class="pagination-number-minimal-text">
      Page
      <span class="pagination-minimal-number-text"
        >${this.currentPageNumber}</span
      >
      of
      <span class="pagination-minimal-number-text">${this.lastPageNumber}</span>
    </p>`;
  }

  handlePreviousPage() {
    if (this.currentPageNumber !== 1) {
      const pageNumber = this.currentPageNumber - 1;

      this.currentPageNumber = pageNumber;
    }
    this.calculations();
  }

  handleNextPage() {
    if (this.lastPageNumber !== this.currentPageNumber) {
      const pageNumber = this.currentPageNumber + 1;

      this.currentPageNumber = pageNumber;
    }
    this.calculations();
  }

  onPageNumberHandle = (pageNumber: number) => () => {
    this.currentPageNumber = pageNumber;
    this.calculations();
  };

  render() {
    if (this.paginationRange?.length < 2) {
      return null;
    }

    const paginationClass = {
      'pagination-number': true,
      [`pagination-number-type-${this.type}`]: this.type,
      [`pagination-number-color-${this.color}`]: this.color,
      [`pagination-number-shape-${this.shape}`]: this.shape,
    };

    return html`
      <div class=${classMap(paginationClass)}>
        ${this.type === 'minimal'
          ? html`
              <div class="pagination-minimal-text-left">
                ${this.renderMinimalText()}
              </div>
            `
          : null}

        <button
          @click=${this.handlePreviousPage}
          ?disabled=${this.currentPageNumber === 1}
          class="pagination-prev-btn pagination-number-nav-button"
        >
          <space-icon
            icon-name="arrowLeft"
            class="pagination-number-nav-icon"
          ></space-icon>
          <span class="pagination-btn-text"> ${this.buttonLeftText} </span>
        </button>

        <ul class="pagination-number-list">
          ${map(this.paginationRange, pageNumber => {
            const pageNumberClass = {
              'pagination-number-list-item': true,
              'pagination-current-page': this.currentPageNumber === pageNumber,
            };
            return html` <li
              tabindex=${0}
              title="page ${pageNumber}"
              @click=${this.onPageNumberHandle(pageNumber)}
              class=${classMap(pageNumberClass)}
            >
              <p class="pagination-page-number">${pageNumber}</p>
            </li>`;
          })}
        </ul>

        <div class="pagination-minimal-text-center">
          ${this.renderMinimalText()}
        </div>

        <button
          @click=${this.handleNextPage}
          ?disabled=${this.currentPageNumber === this.lastPageNumber}
          class="pagination-next-btn pagination-number-nav-button"
        >
          <span class="pagination-btn-text"> ${this.buttonRightText}</span>
          <space-icon
            icon-name="arrowRight"
            class="pagination-number-nav-icon"
          ></space-icon>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-pagination-number': PaginationNumberBase;
  }
}
