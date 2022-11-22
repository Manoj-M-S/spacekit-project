import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ButtonSize } from '../../button/';
import '../../Icon';
import styles from './Link.scss.lit';

export type LinkTargetType = '_blank' | '_self' | '_parent' | '_top';
export type LinkRelType =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag';

@customElement('space-link')
export default class Link extends LitElement {
  static styles = [styles];

  /** @attr disabled */
  @property({ type: Boolean, attribute: 'disabled' })
  isDisabled = false;

  /** @attr link-size */
  @property({ type: String, attribute: 'link-size' })
  linkSize: ButtonSize = 'md';

  /** @attr iconname */
  @property({ type: String })
  iconName?: string = '';

  /** @attr iconaftertext */
  @property({ type: Boolean })
  iconAfterText!: boolean;

  @state()
  onClick!: () => void;

  /** @attr href */
  @property({ type: String, attribute: 'href' })
  href!: string;

  /** @attr rel */
  @property({ type: String, attribute: 'rel' })
  linkRel!: LinkRelType;

  /** @attr target */
  @property({ type: String, attribute: 'target' })
  linkTarget!: LinkTargetType;

  renderIcon() {
    const iconClass = {
      'link-icon': true,
      'right': this.iconAfterText,
      [`icon-size-${this.linkSize}`]: this.linkSize ?? '',
    };
    return this.iconName
      ? html` <space-icon
          class=${classMap(iconClass)}
          icon-name=${this.iconName}
        ></space-icon>`
      : '';
  }
  render() {
    const linkClass = {
      link: true,
      [`link-size-${this.linkSize}`]: this.linkSize ?? '',
      [`disable-link`]: this.isDisabled && this.href,
    };
    return html`
      <a
        tabindex=${this.isDisabled ? -1 : 0}
        rel=${ifDefined(this.linkRel)}
        target=${ifDefined(this.linkTarget)}
        aria-disabled=${ifDefined(this.isDisabled)}
        class=${classMap(linkClass)}
        @click=${this.onClick}
        href=${this.href}
      >
        ${!this.iconAfterText ? this.renderIcon() : ''}
        <slot></slot>
        ${this.iconAfterText ? this.renderIcon() : ''}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-link': Link;
  }
}
