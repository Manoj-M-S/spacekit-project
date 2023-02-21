import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import '../../../../01-stars/Avatar/src/Avatar';
import '../../../../01-stars/Image/src/Image';
import '../../../../01-stars/Link/src/Link';
import styles from './PeopleCard.scss.lit';

export const peopleCardTypeList = [
  'testimonyAvatar',
  'testimonyImage',
  'peopleAvatar',
  'peopleAvatarBio',
  'peopleImage',
  'peopleImageBio',
] as const;
export type PeopleCardType = typeof peopleCardTypeList[number];

export type PeopleCardSize = 'sm' | 'md';

export type PeopleCardSocialType = { href: string; iconName: string };

@customElement('space-people-card')
export class PeopleCard extends LitElement {
  static styles = [styles];

  /** @attr type */
  @property()
  type: PeopleCardType = 'testimonyAvatar';

  /** @attr avatar-src */
  @property({ type: String, attribute: 'avatar-src' })
  avatarSrc!: string;

  /** @attr avatar-alt */
  @property({ type: String, attribute: 'avatar-alt' })
  avatarAlt!: string;

  /** @attr image-src */
  @property({ type: String, attribute: 'image-src' })
  imageSrc!: string;

  /** @attr image-alt */
  @property({ type: String, attribute: 'image-alt' })
  imageAlt!: string;

  /** @attr name */
  @property()
  name!: string;

  /** @attr destination */
  @property()
  destination!: string;

  /** @attr description */
  @property()
  description!: string;

  /** @attr size */
  @property()
  size: PeopleCardSize = 'md';

  /** @prop socialLinks */
  @property({ attribute: 'socialLinks' })
  socialLinks!: Array<PeopleCardSocialType>;

  renderDescription() {
    return this.description
      ? html`<p class="people-card-description">${this.description}</p>`
      : null;
  }

  render() {
    const peopleCardClass = {
      'people-card': true,
      [`people-card-type-${this.type}`]: this.type,
      [`people-card-size-${this.size}`]: this.size,
    };

    return html`
      <div class=${classMap(peopleCardClass)}>
        ${this.type.includes('Avatar') && this.avatarSrc
          ? html`
              <space-avatar
                size="2xl"
                src=${this.avatarSrc}
                alt=${this.avatarAlt}
                class="people-card-avatar"
              ></space-avatar>
            `
          : null}
        ${this.type.includes('Image') && this.imageSrc
          ? html`
              <space-image
                src=${this.imageSrc}
                alt=${this.imageAlt}
                class="people-card-image"
              ></space-image>
            `
          : null}
        <div class="people-card-text-container">
          ${this.type.includes('testimony') ? this.renderDescription() : null}
          ${this.name
            ? html`<p class="people-card-name">${this.name}</p>`
            : null}
          ${this.destination
            ? html`<p class="people-card-destination">${this.destination}</p>`
            : null}
          ${this.type.includes('people') ? this.renderDescription() : null}
          ${this.type.includes('Bio') && this.socialLinks
            ? html`
                <ul class="people-card-social-icon-container">
                  ${map(
                    this.socialLinks,
                    ({ iconName, href }) => html`
                      <li class="people-card-social-icons">
                        <space-link
                          class="people-card-social-icons"
                          href=${href}
                          iconname=${iconName}
                        ></space-link>
                      </li>
                    `
                  )}
                </ul>
              `
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-people-card': PeopleCard;
  }
}
