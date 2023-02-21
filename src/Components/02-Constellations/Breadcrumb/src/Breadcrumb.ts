import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './Breadcrumb.scss.lit';

export interface BreadcrumbOption {
  pageName: string;
  href: string;
}

export type BreadcrumbStyle = 'Collapsed' | 'Expanded';
export type Type = 'slash' | 'chevron';
export type BreadCrumbVariant = 'noFill' | 'primaryFill' | 'edgeFill';

@customElement('space-breadcrumb')
export class Breadcrumb extends LitElement {
  static styles = [styles];

  /** @attr home-page-text */
  @property({ type: String, attribute: 'home-page-text' })
  homePageText: string = '';

  /** @attr breadcrumb-style */
  @property({ type: String, attribute: 'breadcrumb-style' })
  breadcrumbStyle: BreadcrumbStyle = 'Collapsed';

  /** @attr breadcrumb-variant */
  @property({ type: String, attribute: 'breadcrumb-variant' })
  breadcrumbVariant: BreadCrumbVariant = 'noFill';

  /** @attr breadcrumb-type */
  @property({ type: String, attribute: 'breadcrumb-type' })
  breadcrumbType: Type = 'slash';

  /** @attr home-page-href */
  @property({ type: String, attribute: 'home-page-href' })
  homePageHref: string = '';

  /** @attr options */
  @property({ type: Array<BreadcrumbOption> })
  options!: BreadcrumbOption[];

  renderBreadcrumbType() {
    const partiotionIcon =
      this.breadcrumbType === 'chevron' ? 'chevronRight' : 'slashDivider';

    return html`<space-icon
      class="partition-icon"
      icon-name=${partiotionIcon}
    ></space-icon>`;
  }

  renderBreadcrumbBreak() {
    return html`<space-icon
        class="breadcrumb-break"
        icon-name="breadcrumbBreak"
      ></space-icon
      >${this.renderBreadcrumbType()}`;
  }

  renderHome() {
    return html`
      <div class="breadcrumb-base">
        ${this.homePageText
          ? html`<a class="home" href=${this.homePageHref}
              ><space-icon
                class="home-icon"
                icon-name="chevronsLeft"
              ></space-icon
              >${this.homePageText} ${this.renderBreadcrumbType()}
            </a>`
          : html`
              <a class="home" href=${this.homePageHref}
                ><space-icon class="home-icon" icon-name="home"></space-icon
                >${this.homePageText} ${this.renderBreadcrumbType()}
              </a>
            `}
      </div>
    `;
  }

  render() {
    const breadcrumbClass = {
      breadcrumb: true,
      [`breadcrumb-${this.breadcrumbVariant}`]: this.breadcrumbVariant,
    };
    return html`
      <div class=${classMap(breadcrumbClass)}>
        <div class="show-on-mobile">
          ${this.renderHome()}
          ${this.options.length > 1
            ? html`
                <div class="breadcrumb-base break">
                  ${this.renderBreadcrumbBreak()}
                  <ul class="hidden-dropdown">
                    ${map(
                      this.options.slice(0, -1),
                      ({ href, pageName }, key) => html`
                        <li class="dropdown-item">
                          <a class="breadcrumb-base" href=${href}
                            >${pageName}</a
                          >
                        </li>
                      `
                    )}
                  </ul>
                </div>
                <div class="breadcrumb-base">
                  <a class="home" href=${this.homePageHref}>
                    ${map(
                      this.options.slice(-1),
                      ({ href, pageName }, key) => html`
                        <a class="breadcrumb-base" href=${href}
                          >${this.options.length - 1 === key
                            ? pageName
                            : html`<span class="current-page"
                                >${pageName}</span
                              >`}
                        </a>
                      `
                    )}
                  </a>
                </div>
              `
            : html`
                <div class="breadcrumb-base">
                  <a class="home" href=${this.homePageHref}>
                    ${map(
                      this.options,
                      ({ href, pageName }) => html`
                        <a class="breadcrumb-base" href=${href}
                          ><span class="current-page">${pageName}</span>
                        </a>
                      `
                    )}
                  </a>
                </div>
              `}
        </div>
        <div class="show-on-tablet">
          ${this.renderHome()}
          ${this.options.length >= 2
            ? html`
                ${this.options.length > 6 ||
                this.breadcrumbStyle === 'Collapsed'
                  ? html`
                      ${map(
                        this.options.slice(0, 2),
                        ({ href, pageName }, key) => html`
                          <a class="breadcrumb-base" href=${href}
                            >${this.options.length - 1 !== key
                              ? pageName
                              : html`<span class="current-page"
                                  >${pageName}</span
                                >`}
                            ${this.options.length - 1 !== key
                              ? this.renderBreadcrumbType()
                              : null}</a
                          >
                        `
                      )}
                      ${this.options.length > 3
                        ? html`
                            <div class="breadcrumb-base break">
                              ${this.renderBreadcrumbBreak()}
                              <ul class="hidden-dropdown">
                                ${map(
                                  this.options.slice(2, -1),
                                  ({ href, pageName }, key) => html`
                                    <li class="dropdown-item">
                                      <a class="breadcrumb-base" href=${href}
                                        >${pageName}</a
                                      >
                                    </li>
                                  `
                                )}
                              </ul>
                            </div>
                          `
                        : null}
                      ${this.options.length >= 3
                        ? html`
                            <div class="breadcrumb-base">
                              <a class="home" href=${this.homePageHref}>
                                ${map(
                                  this.options.slice(-1),
                                  ({ href, pageName }, key) => html`
                                    <a class="breadcrumb-base" href=${href}
                                      >${this.options.length - 1 === key
                                        ? pageName
                                        : html`<span class="current-page"
                                            >${pageName}</span
                                          >`}
                                    </a>
                                  `
                                )}
                              </a>
                            </div>
                          `
                        : null}
                    `
                  : map(
                      this.options,
                      ({ href, pageName }, key) => html`
                        <a class="breadcrumb-base" href=${href}
                          >${this.options.length - 1 !== key
                            ? pageName
                            : html`<span class="current-page"
                                >${pageName}</span
                              >`}
                          ${this.options.length - 1 !== key
                            ? this.renderBreadcrumbType()
                            : null}</a
                        >
                      `
                    )}
              `
            : html`
                <div class="breadcrumb-base">
                  <a class="home" href=${this.homePageHref}>
                    ${map(
                      this.options,
                      ({ href, pageName }) => html`
                        <a class="breadcrumb-base" href=${href}
                          ><span class="current-page">${pageName}</span>
                        </a>
                      `
                    )}
                  </a>
                </div>
              `}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-breadcrumb': Breadcrumb;
  }
}
