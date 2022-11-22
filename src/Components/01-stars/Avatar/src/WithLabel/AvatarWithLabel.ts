import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import './../Avatar';
import styles from './AvatarWithLabel.scss.lit';

export const avatarLabelSize = ['sm', 'md', 'lg', 'xl'] as const;

export type AvatarLabelSize = typeof avatarLabelSize[number];

@customElement('space-avatar-label')
export default class AvatarWithLabel extends LitElement {
  static styles = [styles];

  /** @attr src */
  @property({ type: String, attribute: 'src' })
  src!: string;

  /** @attr alt */
  @property({ type: String, attribute: 'alt' })
  alt!: string;

  /** @attr heading */
  @property({ type: String, attribute: 'heading' })
  heading!: string;

  /** @attr sub-heading */
  @property({ type: String, attribute: 'sub-heading' })
  subHeading!: string;

  /** @attr size */
  @property({ type: String, attribute: 'size' })
  size: AvatarLabelSize = 'md';

  render() {
    const avatarClass = {
      avatar: true,
      [`avatar-size-${this.size}`]: this.size ?? '',
    };
    const textClass = {
      'text-container': true,
      [`text-size-${this.size}`]: this.size ?? '',
    };
    return html`
      <div class="avatar-label-container ${classMap(avatarClass)}">
        ${this.src &&
        this.alt &&
        html`<space-avatar
          size=${this.size}
          src=${this.src}
          alt=${this.alt}
          class=${classMap(avatarClass)}
        ></space-avatar>`}
        <div class=${classMap(textClass)}>
          ${this.heading && html` <h5 class="heading">${this.heading}</h5>`}
          ${this.subHeading &&
          html`<p class="sub-heading">${this.subHeading}</p>`}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-avatar-label': AvatarWithLabel;
  }
}
