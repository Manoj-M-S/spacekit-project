import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Video.scss.lit';

export const videoSize = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type VideoSize = typeof videoSize[number];

@customElement('space-video')
export default class Video extends LitElement {
  static styles = [styles];

  /** @attr src */
  @property({ type: String })
  src: string = '';

  /** @attr alt */
  @property({ type: String })
  size: VideoSize = 'md';

  /** @attr controls */
  @property({ type: Boolean })
  control: boolean = false;

  renderWithControls() {
    const videoClass = {
      video: true,
      [`video-${this.size}`]: this.size,
    };
    return html`
      <video class=${classMap(videoClass)} src=${this.src} controls></video>
    `;
  }

  render() {
    const videoClass = {
      video: true,
      [`video-${this.size}`]: this.size,
    };
    return html`
      <div class="video-container">
        ${this.control
          ? this.renderWithControls()
          : html`
              <video class=${classMap(videoClass)} src=${this.src}></video>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-video': Video;
  }
}
