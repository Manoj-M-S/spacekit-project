import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../../01-stars/button/src/Button';
import styles from './Banner.scss.lit';
import '../../../01-stars/Link/src/Link';
import '../../../01-stars/Image/src/Image';
import '../../../01-stars/Input/src/Input';

export type CTAType = 'button' | 'email';
export type BannerWidth = 'full' | 'tillMargin';
export type CTAImageType = 'noImage' | 'normal';

@customElement('space-banner')
export class Banner extends LitElement {
  static styles = [styles];

  /** @attr show-sub-heading */
  @property({ type: Boolean, attribute: 'show-sub-heading' })
  showSubHeading: boolean = false;

  /** @attr heading */
  @property({ type: String, attribute: 'heading' })
  heading: string = '';

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading: string = '';

  /** @attr cta-type */
  @property({ type: String, attribute: 'cta-type' })
  ctaType: CTAType = 'button';

  /** @attr center */
  @property({ type: Boolean, attribute: 'center' })
  center: boolean = false;

  /** @attr banner-width */
  @property({ type: String, attribute: 'banner-width' })
  bannerWidth: BannerWidth = 'full';

  /** @attr banner-image-src */
  @property({ type: String, attribute: 'banner-image-src' })
  bannerImageSrc: string = '';

  /** @attr banner-image-alt */
  @property({ type: String, attribute: 'banner-image-alt' })
  bannerImageAlt: string = '';

  /** @attr primary-btn-text */
  @property({ type: String, attribute: 'primary-btn-text' })
  primaryBtnText: string = '';

  /** @attr secondary-btn-text */
  @property({ type: String, attribute: 'secondary-btn-text' })
  secondaryBtnText: string = '';

  /** @attr show-hint */
  @property({ type: Boolean, attribute: 'show-hint' })
  showHint: boolean = false;

  /** @attr input-hint-text */
  @property({ type: String, attribute: 'input-hint-text' })
  inputHintText: string = '';

  /** @attr cta-image-type */
  @property({ type: String, attribute: 'cta-image-type' })
  ctaImageType: CTAImageType = 'noImage';

  /** @attr show-input-icon */
  @property({ type: Boolean, attribute: 'show-input-icon' })
  showInputIcon: boolean = false;

  renderCtaType() {
    if (this.ctaType === 'button') {
      return html`<space-button class="button-class" button-variant="primary"
          >${this.primaryBtnText}</space-button
        >
        <space-button class="button-class" button-variant="secondary"
          >${this.secondaryBtnText}</space-button
        >`;
    } else {
      return this.showInputIcon
        ? html`
            <space-input
              class="input-class"
              icon-name="mail"
              type="text"
              placeholder="Enter your email"
              hint=${this.inputHintText}
            ></space-input>
            <space-button class="button-class" button-variant="primary"
              >${this.primaryBtnText}</space-button
            >
          `
        : html`
            <space-input
              class="input-class"
              type="text"
              placeholder="Enter your email"
              hint="We care about your data in our privacy & policy"
            ></space-input>
            <space-button class="button-class" button-variant="primary"
              >${this.primaryBtnText}</space-button
            >
          `;
    }
  }

  render() {
    const bannerClass = {
      'banner-container': true,
      'center': this.center,
      [`banner-${this.bannerWidth}`]: true,
    };
    const bannerTextAllignment = {
      'head-text': true,
      [`head-text-center`]: this.center,
    };
    const bannerActionAllignment = {
      'action-container': true,
      [`action-container-center`]: this.center,
      [`cta-${this.ctaType}`]: this.ctaType,
    };

    const bannerSubHeading = {
      'sub-heading': true,
      [`sub-heading-center`]: this.center,
    };

    return html`
      ${this.ctaImageType === 'noImage'
        ? html`<div class="banner">
            <div class=${classMap(bannerClass)}>
              <div class=${classMap(bannerTextAllignment)}>
                <div class="heading">${this.heading}</div>
                ${this.showSubHeading
                  ? html`<div class=${classMap(bannerSubHeading)}>
                      ${this.subHeading}
                    </div>`
                  : null}
              </div>
              <div class=${classMap(bannerActionAllignment)}>
                ${this.renderCtaType()}
              </div>
            </div>
          </div>`
        : html`<div class="cta-banner-image">
            <div class="cta-container">
              <div class="head-text">
                <div class="heading">${this.heading}</div>
                ${this.showSubHeading
                  ? html`<div class="sub-heading">${this.subHeading}</div>`
                  : null}
              </div>
              <space-image
                class="banner-image-sm"
                src=${this.bannerImageSrc}
                alt=${this.bannerImageAlt}
              ></space-image>
              <div class="image-action-container">${this.renderCtaType()}</div>
            </div>
            <div class="cta-img">
              <space-image
                class="banner-image-lg"
                src=${this.bannerImageSrc}
                alt=${this.bannerImageAlt}
              ></space-image>
            </div>
          </div>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-banner': Banner;
  }
}
