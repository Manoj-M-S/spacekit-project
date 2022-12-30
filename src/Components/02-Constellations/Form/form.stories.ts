import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import './src/Form';

export default {
  title: 'Constellations/Form',
  component: 'space-form',
} as Meta;

const Template: Story<any> = ({
  heading,
  headingText,
  subHeading,
  emailText,
  firstNameLabel,
  firstNameValue,
  firstNamePlaceholder,
  firstNameError,
  firstNameErrorHint,
  lastNameLabel,
  lastNameValue,
  lastNamePlaceholder,
  lastNameError,
  lastNameErrorHint,
  emailLabel,
  emailValue,
  emailPlaceholder,
  emailError,
  emailErrorHint,
  phoneLabel,
  phoneValue,
  phonePlaceholder,
  phoneError,
  phoneErrorHint,
  messageLabel,
  messageValue,
  messagePlaceholder,
  messageError,
  messageErrorHint,
  buttonText,
  conditionCheckbox,
  conditionCheckboxText,
  background,
  uploadFile,
  uploadFileLabel,
  fileError,
  fileErrorHint,
  options,
  selectionHeading,
}: any) => {
  return html`
    <space-form
      ?heading=${heading}
      heading-text=${headingText}
      sub-heading=${subHeading}
      email-text=${emailText}
      first-name-label=${firstNameLabel}
      first-name-value=${firstNameValue}
      first-name-placeholder=${firstNamePlaceholder}
      ?first-name-error=${firstNameError}
      first-name-errorhint=${firstNameErrorHint}
      last-name-label=${lastNameLabel}
      last-name-value=${lastNameValue}
      last-name-placeholder=${lastNamePlaceholder}
      ?last-name-error=${lastNameError}
      last-name-errorhint=${lastNameErrorHint}
      email-label=${emailLabel}
      email-value=${emailValue}
      email-placeholder=${emailPlaceholder}
      ?email-error=${emailError}
      email-errorhint=${emailErrorHint}
      phone-label=${phoneLabel}
      phone-value=${phoneValue}
      phone-placeholder=${phonePlaceholder}
      ?phone-error=${phoneError}
      phone-errorhint=${phoneErrorHint}
      message-label=${messageLabel}
      message-value=${messageValue}
      message-placeholder=${messagePlaceholder}
      ?message-error=${messageError}
      message-errorhint=${messageErrorHint}
      button-text=${buttonText}
      ?condition-checkbox=${conditionCheckbox}
      condition-checkbox-text=${conditionCheckboxText}
      ?background=${background}
      ?upload-file=${uploadFile}
      upload-file-label=${uploadFileLabel}
      ?file-error=${fileError}
      file-error-hint=${fileErrorHint}
      .options=${options}
      selection-heading=${selectionHeading}
    >
    </space-form>
  `;
};

export const Default = Template.bind({});
export const ConditionalCheckbox = Template.bind({});
export const UploadButton = Template.bind({});
export const SelectionCheckbox = Template.bind({});

Default.args = {
  heading: true,
  headingText: "Let's make something great together.",
  subHeading: 'You can reach us anytime via',
  emailText: 'hi@space.com',
  firstNameLabel: 'First name',
  firstNamePlaceholder: 'First name',
  lastNameLabel: 'Last name',
  lastNamePlaceholder: 'Last name',
  emailLabel: 'Email',
  emailPlaceholder: 'you@company.com',
  phoneLabel: 'Phone Number',
  phonePlaceholder: 'Enter your phone number here',
  messageLabel: 'Message',
  messagePlaceholder: 'Include a message',
  buttonText: 'Send Message',
  background: true,
};

ConditionalCheckbox.args = {
  ...Default.args,
  conditionCheckbox: true,
  conditionCheckboxText: 'You agree to receive our monthly newsletters',
};

UploadButton.args = {
  ...Default.args,
  uploadFile: true,
  uploadFileLabel: 'Upload your resume here',
  fileError: false,
  fileErrorHint: 'Please select file',
};

const checkboxLabel = [
  'You agree to receive our monthly newsletters',
  'You agree to receive our monthly newsletters',
];
SelectionCheckbox.args = {
  ...Default.args,
  selectionHeading: 'Services',
  options: [
    {
      text: 'Website design',
    },
    {
      text: 'Content creation',
    },
    {
      text: 'UX design',
    },
    {
      text: 'Strategy & consulting',
    },
    {
      text: 'User research',
    },
    {
      text: 'Other',
    },
  ],
};
