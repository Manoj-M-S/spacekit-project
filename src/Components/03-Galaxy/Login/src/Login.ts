import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './Login.scss.lit';
import '../../../01-stars/Input/src/Input';
import '../../../01-stars/Image/src/Image';
import '../../../01-stars/Checkbox/src/Checkbox';
import '../../../01-stars/Link/src/Link';

@customElement('space-login')
export class Login extends LitElement {
  static styles = [styles];

  /** @attr title */
  @property({ type: String, attribute: 'title' })
  title!: string;

  /** @attr sub-title */
  @property({ type: String, attribute: 'sub-title' })
  subTitle!: string;

  /** @attr image-src */
  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  /** @attr logo-src */
  @property({ type: String, attribute: 'logo-src' })
  logoSrc: string = '';

  /** @attr forgot-passwrd-href */
  @property({ type: String, attribute: 'forgot-passwrd-href' })
  forgotPasswordHref: string = '';

  /** @attr signup-href */
  @property({ type: String, attribute: 'signup-href' })
  signupHref: string = '';

  /** @attr social-login */
  @property({ type: Boolean, attribute: 'social-login' })
  socialLogin: boolean = false;

  /** @attr split-image */
  @property({ type: Boolean, attribute: 'split-image' })
  splitImage: boolean = false;

  @state()
  googleBtnOnClick!: () => void;

  @state()
  appleBtnOnClick!: () => void;

  @state()
  facebookBtnOnClick!: () => void;

  renderGoogleBtn() {
    return html`
      <button
        class="google-btn google-secondary"
        @click=${this.googleBtnOnClick}
      >
        ${this.renderGoogleIcon()} Sign in with Google
      </button>
    `;
  }

  renderFacebookBtn() {
    return html`
      <button
        class="facebook-btn facebook-primary"
        @click=${this.facebookBtnOnClick}
      >
        ${this.renderFacebookIcon()} Sign in with Facebook
      </button>
    `;
  }

  renderAppleBtn() {
    return html`
      <button class="apple-btn apple-primary" @click=${this.appleBtnOnClick}>
        ${this.renderAppleIcon()} Sign in with Apple
      </button>
    `;
  }

  renderGoogleIcon = () => html`<svg
    class="btn-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_30679_2816)">
      <path
        d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
        fill="#4285F4"
      />
      <path
        d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z"
        fill="#34A853"
      />
      <path
        d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
        fill="#FBBC04"
      />
      <path
        d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z"
        fill="#EA4335"
      />
    </g>
    <defs>
      <clipPath id="clip0_30679_2816">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>`;

  renderFacebookIcon = () => html`
    <svg
      class="btn-icon"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_30679_2998)">
        <path
          d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 17.9895 4.8882 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1576 4.6875C16.4701 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.84 7.875 14.375 8.80008 14.375 9.75V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1118 22.954 24.5 17.9895 24.5 12Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_30679_2998">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  `;

  renderAppleIcon = () => html`
    <svg
      class="btn-icon"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3426 17.1449C21.0099 17.9135 20.6161 18.6211 20.1598 19.2715C19.5379 20.1583 19.0286 20.7721 18.6362 21.113C18.0278 21.6724 17.376 21.959 16.678 21.9753C16.1769 21.9753 15.5726 21.8327 14.8691 21.5434C14.1634 21.2555 13.5148 21.113 12.9218 21.113C12.2998 21.113 11.6328 21.2555 10.9193 21.5434C10.2047 21.8327 9.62909 21.9834 9.18896 21.9984C8.51962 22.0269 7.85244 21.7322 7.18649 21.113C6.76144 20.7422 6.22979 20.1067 5.5929 19.2063C4.90956 18.2449 4.34776 17.13 3.90764 15.8589C3.43629 14.486 3.2 13.1565 3.2 11.8694C3.2 10.3951 3.51858 9.12345 4.15669 8.05784C4.6582 7.20191 5.32537 6.52672 6.1604 6.03105C6.99542 5.53539 7.89766 5.2828 8.8693 5.26664C9.40095 5.26664 10.0981 5.43109 10.9645 5.75429C11.8285 6.07858 12.3832 6.24303 12.6264 6.24303C12.8083 6.24303 13.4245 6.05074 14.4692 5.66738C15.4571 5.31186 16.2909 5.16466 16.974 5.22264C18.8249 5.37202 20.2155 6.10167 21.1403 7.41619C19.4849 8.4192 18.666 9.82403 18.6823 11.6262C18.6973 13.03 19.2065 14.1981 20.2074 15.1256C20.6609 15.5561 21.1674 15.8888 21.731 16.1251C21.6088 16.4795 21.4798 16.819 21.3426 17.1449ZM17.0976 0.440369C17.0976 1.54062 16.6956 2.56792 15.8944 3.51878C14.9275 4.64917 13.758 5.30236 12.4898 5.19929C12.4736 5.06729 12.4643 4.92837 12.4643 4.78239C12.4643 3.72615 12.9241 2.59576 13.7406 1.67152C14.1483 1.20356 14.6668 0.814453 15.2955 0.504058C15.9229 0.198295 16.5164 0.0292007 17.0745 0.000244141C17.0908 0.147331 17.0976 0.294426 17.0976 0.440355V0.440369Z"
        fill="white"
      />
    </svg>
  `;

  render() {
    const loginClass = {
      login: true,
      [`split-image`]: this.splitImage,
    };

    return html`
      <div class=${classMap(loginClass)}>
        <div class="content">
          <div class="header">
            <space-image src=${this.logoSrc}></space-image>
            <div class="text-container">
              <div class="heading">${this.title}</div>
              <div class="sub-text">${this.subTitle}</div>
            </div>
          </div>
          <div class="form-container">
            <space-input
              class="input-class"
              placeholder="enter your email"
              label="Email"
            ></space-input>
            ${!this.socialLogin
              ? html`<space-input
                    class="input-class"
                    placeholder="password"
                    label="Password"
                  ></space-input>
                  <div class="row">
                    <space-checkbox
                      size="sm"
                      text="Remember me"
                    ></space-checkbox>
                    <a href=${this.forgotPasswordHref} class="forgot-link"
                      >Forgot password</a
                    >
                  </div>`
              : null}

            <space-button button-variant="primary" class="btn-class"
              >Sign In</space-button
            >
            ${this.socialLogin ? this.renderGoogleBtn() : null}
            ${this.socialLogin ? this.renderFacebookBtn() : null}
            ${this.socialLogin ? this.renderAppleBtn() : null}
          </div>

          <div class="footer">
            <p class="footer-text">Don't have an account?</p>
            <space-link href=${this.signupHref}>Sign up</space-link>
          </div>
        </div>
        ${this.splitImage
          ? html`<space-image
              class="img-class"
              src=${this.imageSrc}
            ></space-image>`
          : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'space-login': Login;
  }
}
