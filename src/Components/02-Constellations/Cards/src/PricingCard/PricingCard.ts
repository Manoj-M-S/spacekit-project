import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../../01-stars/Icon/src/Icon';
import styles from './PricingCard.scss.lit';
import '../../../../01-stars/button/src/Button';
import '../../../../01-stars/Label/src/Label';

export type PricingCardType = 'icon' | 'withoutIcon' | 'longFeatureList';
export type PricingCardColorType = 'light' | 'primary';
export type PriceOptionsType = {
  features: String;
  iconName?: String;
};

@customElement('space-pricing-card')
export default class PricingCard extends LitElement {
  static styles = [styles];

  /** @attr card-type */
  @property({ type: String, attribute: 'card-type' })
  cardType: PricingCardType = 'icon';

  /** @attr colour */
  @property()
  colour: PricingCardColorType = 'light';

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  /** @attr plan-name */
  @property({ type: String, attribute: 'plan-name' })
  planName!: string;

  /** @attr label */
  @property()
  label!: string;

  /** @attr price */
  @property()
  price!: string;

  /** @attr heading-one */
  @property({ type: String, attribute: 'heading-one' })
  headingOne!: string;

  /** @attr heading-two */
  @property({ type: String, attribute: 'heading-two' })
  headingTwo!: string;

  /** @attr price-description */
  @property({ type: String, attribute: 'price-description' })
  priceDescription!: string;

  @property()
  featuresList!: PriceOptionsType[];

  /** @attr button-text */
  @property({ type: String, attribute: 'button-text' })
  buttonText!: string;

  priceText = () =>
    this.price
      ? html`<h1 class="pricing-card-price-text">${this.price}</h1>`
      : null;

  priceDescriptionText = () =>
    this.priceDescription
      ? html`<p class="pricing-card-price-description-text">
          ${this.priceDescription}
        </p>`
      : null;

  renderCheck = () => html`<svg
    width="13"
    height="11"
    viewBox="0 0 13 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.098 0.390159L3.93797 7.30016L2.03797 5.27016C1.68797 4.94016 1.13797 4.92016 0.737968 5.20016C0.347968 5.49016 0.237968 6.00016 0.477968 6.41016L2.72797 10.0702C2.94797 10.4102 3.32797 10.6202 3.75797 10.6202C4.16797 10.6202 4.55797 10.4102 4.77797 10.0702C5.13797 9.60016 12.008 1.41016 12.008 1.41016C12.908 0.490159 11.818 -0.31984 11.098 0.38016V0.390159Z"
      fill="#038153"
    />
  </svg>`;

  render() {
    const pricingCardClass = {
      'pricing-card': true,
      [`pricing-card-${this.cardType}`]: this.cardType,
      [`pricing-card-color-${this.colour}`]: this.colour,
    };

    return html`
      <div class=${classMap(pricingCardClass)}>
        <div class="pricing-card-text-container">
          <div class="pricing-card-text-inner-container">
            ${this.iconName && this.cardType === 'icon'
              ? html`
                  <space-icon
                    class="pricing-card-icon"
                    icon-name=${this.iconName}
                  ></space-icon>
                `
              : null}
            <div
              class=${classMap({
                [`pricing-card-long-features-text-container`]:
                  this.cardType === 'longFeatureList',
              })}
            >
              ${this.planName
                ? html`<p class="pricing-card-plan-text">${this.planName}</p>`
                : null}
              ${this.label
                ? html`<space-label
                    class="pricing-card-long-features-label"
                    label=${this.label}
                  ></space-label>`
                : null}
            </div>
            ${this.cardType === 'longFeatureList'
              ? this.priceDescriptionText()
              : html`${this.cardType === 'withoutIcon'
                  ? this.priceDescriptionText()
                  : this.priceText()}
                ${this.cardType === 'withoutIcon'
                  ? this.priceText()
                  : this.priceDescriptionText()}`}
          </div>
          ${this.cardType === 'longFeatureList'
            ? html` <div>
                ${this.price
                  ? html`<h1 class="pricing-card-price-text">
                      ${this.price}
                      <sub class="pricing-card-price-text-sub">per month</sub>
                    </h1> `
                  : null}
              </div>`
            : null}
        </div>

        ${this.cardType === 'longFeatureList'
          ? html` <div
              class="pricing-card-long-features-heading-text-container"
            >
              ${this.headingOne
                ? html`
                    <h4 class="pricing-card-long-features-head-text-one">
                      ${this.headingOne}
                    </h4>
                  `
                : null}
              ${this.headingTwo
                ? html`
                    <p class="pricing-card-long-features-head-text-two">
                      ${this.headingTwo}
                    </p>
                  `
                : null}
            </div>`
          : null}
        <ul
          class=${classMap({
            'pricing-card-features-container': true,
            [`pricing-card-features-${this.cardType}`]: this.cardType,
          })}
        >
          ${this.cardType === 'longFeatureList'
            ? html`
                ${map(this.featuresList, ({ features, iconName = '' }) => {
                  return html`
                    <li class="pricing-card-features-inner-container">
                      ${iconName
                        ? html` <space-icon
                            class="pricing-card-features-icon"
                            icon-name=${iconName}
                          ></space-icon>`
                        : html`<span class="pricing-card-features-icon">
                            ${this.renderCheck()}
                          </span>`}
                      <p class="pricing-card-features-text">${features}</p>
                    </li>
                  `;
                })}
              `
            : html`
                ${map(
                  this.featuresList.slice(0, 4),
                  ({ features, iconName = '' }) => {
                    return html`
                      <li class="pricing-card-features-inner-container">
                        ${iconName
                          ? html` <space-icon
                              class="pricing-card-features-icon"
                              icon-name=${iconName}
                            ></space-icon>`
                          : html`<span class="pricing-card-features-icon"
                              >${this.renderCheck()}</span
                            >`}
                        <p class="pricing-card-features-text">${features}</p>
                      </li>
                    `;
                  }
                )}
              `}
        </ul>
        <div class="pricing-card-cta-container">
          <space-button
            button-size="xl"
            class="pricing-card-cta"
            button-variant="primary"
          >
            ${this.buttonText}
          </space-button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-pricing-card': PricingCard;
  }
}
