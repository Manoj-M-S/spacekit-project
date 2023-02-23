import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../Icon/src/Icon';
import styles from './Avatar.scss.lit';

export const avatarSize = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
] as const;

export type AvatarSize = typeof avatarSize[number];

const normalizeInitials = (initials: string) =>
  initials.slice(0, 2).toUpperCase();

@customElement('space-avatar')
export class Avatar extends LitElement {
  static styles = [styles];

  /** @attr src */
  @property({ type: String, attribute: 'src' })
  src!: string;

  /** @attr alt */
  @property({ type: String, attribute: 'alt' })
  alt!: string;

  /** @attr href */
  @property({ type: String, attribute: 'href' })
  href!: string;

  /** @attr size */
  @property({ type: String, attribute: 'size' })
  size: AvatarSize = 'md';

  /** @attr initials */
  @property({ type: String, attribute: 'initials' })
  initials!: string;

  /** @attr icon-name */
  @property({ type: String, attribute: 'icon-name' })
  iconName!: string;

  handleOnClick(event: PointerEvent) {
    event.preventDefault();
  }

  render() {
    const avatarClass = {
      avatar: true,
      [`avatar-${this.size}`]: this.size ?? '',
    };
    return html`
      <a
        @click=${this.handleOnClick}
        class=${classMap(avatarClass)}
        href=${this.href}
      >
        ${this.src && this.alt
          ? html`<img
              class=${classMap(avatarClass)}
              src=${this.src}
              alt=${this.alt}
            />`
          : this.iconName
          ? html`
              <div class="icon-container ${classMap(avatarClass)}">
                <space-icon
                  class="icon"
                  icon-name=${this.iconName}
                ></space-icon>
              </div>
            `
          : html`
              <div>
                <h1 class="initials ${classMap(avatarClass)}">
                  ${normalizeInitials(this.initials)}
                </h1>
              </div>
            `}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-avatar': Avatar;
  }
}
