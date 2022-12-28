import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import './src/Modal';
import './src/PasswordPrompt';

export default {
  title: 'Constellations/Modal',
  component: 'space-modal',
} as Meta;

const Modal: Story<any> = ({ featuredIcon, alignment, checkboxText, iconName, title, horizontal, supportiveText, primaryBtnText, secondaryBtnText }: any) => {
  return html`
    <space-modal 
      ?featured-icon=${featuredIcon} 
      checkbox-text=${checkboxText} 
      icon-name=${iconName} 
      ?horizontal=${horizontal} 
      alignment=${alignment} 
      title=${title} 
      supportive-text=${supportiveText} 
      primary-btn-text=${primaryBtnText} 
      secondary-btn-text=${secondaryBtnText}
    > 
    </space-modal> `;
};

const modalPasswordPrompt: Story<any> = ({ primaryBtnText, secondaryBtnText, title, supportiveText, emailLabel, passwordLabel }) => {
  return html`
    <password-prompt-modal 
      primary-btn-text=${primaryBtnText}
      secondary-btn-text=${secondaryBtnText}
      title=${title}
      supportive-text=${supportiveText}
      email-label=${emailLabel}
      password-label=${passwordLabel}
    > 
    </password-prompt-modal>
  `;
};

export const Default = Modal.bind({});
export const PasswordPrompt = modalPasswordPrompt.bind({});

Default.args = {
  title: 'Blog post published',
  supportiveText: 'This blog post has been published. Team members will be able to edit this post.',
  primaryBtnText: 'Confirm',
  secondaryBtnText: 'Cancel',
  alignment: 'left',
  featuredIcon: true,
  horizontal: true,
  iconName: 'successTick',
  checkboxText: 'Don’t show again',
};

PasswordPrompt.args = {
  title: 'Please enter your password',
  supportiveText: 'Enter your password to make this change.',
  primaryBtnText: 'Cancel',
  secondaryBtnText: 'Sign in',
  passwordLabel: 'Password',
  emailLabel: 'Email or username',
};

Default.argTypes = {
  alignment: {
    options: ['left', 'center'],
    control: {
      type: 'radio',
    },
  },
};
