import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import './../Avatar';
import styles from './AvatarGroup.scss.lit';

export const avatarGroupSize = ['xs', 'sm', 'md'] as const;

export type AvatarGroupSize = typeof avatarGroupSize[number];

@customElement('space-avatar-group')
export default class AvatarGroup extends LitElement {
  static styles = [styles];

  /** @attr size */
  @property({ type: String, attribute: 'size' })
  size: AvatarGroupSize = 'md';

  /** @attr options */
  @property({ attribute: 'options' })
  options!: { src: string; alt: string; href?: string }[];

  render() {
    const avatarClass = {
      avatar: true,
      [`avatar-${this.size}`]: this.size ?? '',
    };
    return html`
      <ul class="list ${classMap(avatarClass)}">
        ${map(
          this.options.slice(4),
          ({ src, alt, href }) => html`
            <li class="list-item">
              <space-avatar
                src=${src}
                alt=${alt}
                href=${ifDefined(href)}
                size=${this.size}
              ></space-avatar>
            </li>
          `
        )}
        ${this.options.length > 10 &&
        html` <li class="list-item ${classMap(avatarClass)}">
          <p class="counter">+${this.options.slice(10).length}</p>
        </li>`}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-avatar-group': AvatarGroup;
  }
}
