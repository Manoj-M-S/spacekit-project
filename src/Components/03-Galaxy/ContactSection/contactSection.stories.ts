import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/ContactSection';
import './src/SimpleIcon04/SimpleIcon04';
import './src/IconsAndForm/IconAndForm';
import './src/IconAndMap01/IconAndMap01';
import './src/IconAndMap02/IconAndMap02';
import './src/SimpleForm/SimpleForm';

export default {
  title: 'Galaxy/ContactSection',
  component: 'space-contact-section',
  argTypes: {
    iconCardAllignment: {
      options: ['center', 'left'],
      defaultValue: 'center',
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = ({
  options,
  headingText,
  supportText,
  subHeadingText,
  sectionOrientation,
  iconCardAllignment,
}: any) => {
  return html`
    <space-contact-section
      icon-card-allignment=${iconCardAllignment}
      .options=${options}
      heading-text=${headingText}
      support-text=${supportText}
      sub-heading=${subHeadingText}
      sectionOrientation=${sectionOrientation}
    >
    </space-contact-section>
  `;
};

const simpleIcon04 = ({
  addressCardOption,
  headingText,
  supportText,
  subHeadingText,
  sectionOrientation,
}: any) => {
  return html`
    <space-contact-section-type4
      .addressCardOption=${addressCardOption}
      heading-text=${headingText}
      support-text=${supportText}
      sub-heading=${subHeadingText}
      sectionOrientation=${sectionOrientation}
    >
    </space-contact-section-type4>
  `;
};

const iconAndForm = ({
  options,
  headingText,
  supportText,
  subHeadingText,
  sectionOrientation,
  iconCardAllignment,
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
}: any) => {
  return html`
    <space-icon-and-form
      icon-card-allignment=${iconCardAllignment}
      .options=${options}
      heading-text=${headingText}
      support-text=${supportText}
      sub-heading=${subHeadingText}
      sectionOrientation=${sectionOrientation}
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
    >
    </space-icon-and-form>
  `;
};

const iconAndMap01 = ({
  headingText,
  supportText,
  subHeadingText,
  sectionOrientation,
  iconCardAllignment,
  options,
  mapSource,
}: any) => {
  return html`
    <space-icon-and-map-01
      icon-card-allignment=${iconCardAllignment}
      .options=${options}
      heading-text=${headingText}
      support-text=${supportText}
      sub-heading=${subHeadingText}
      sectionOrientation=${sectionOrientation}
      map-source=${mapSource}
    >
    </space-icon-and-map-01>
  `;
};

const iconAndMap02 = ({
  headingText,
  supportText,
  subHeadingText,
  sectionOrientation,
  iconCardAllignment,
  options,
  mapSource,
}: any) => {
  return html`
    <space-icon-and-map-02
      icon-card-allignment=${iconCardAllignment}
      .options=${options}
      heading-text=${headingText}
      support-text=${supportText}
      sub-heading=${subHeadingText}
      sectionOrientation=${sectionOrientation}
      map-source=${mapSource}
    >
    </space-icon-and-map-02>
  `;
};

const simpleForm = ({
  options,
  headingText,
  supportText,
  sectionOrientation,
  iconCardAllignment,
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
}: any) => {
  return html`
    <space-simple-icon-form
      icon-card-allignment=${iconCardAllignment}
      .options=${options}
      heading-text=${headingText}
      support-text=${supportText}
      sectionOrientation=${sectionOrientation}
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
    >
    </space-simple-icon-form>
  `;
};

const options = [
  {
    iconName: 'mail',
    container: false,
    headText: 'Deliver instant answers',
    ctaHref: '',
    ctaText: 'hi@space.com',
    supportText:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    iconName: 'mapPin',
    container: false,
    headText: 'Deliver instant answers',
    ctaHref: '',
    ctaText:
      '203, 2nd Floor, "B" Wing, Nyati Tech Park, Wadgaon Sheri, Pune, 411014, India',
    supportText:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    iconName: 'phone',
    container: false,
    headText: 'Deliver instant answers',
    ctaHref: '',
    ctaText: '+91 7767815999',
    supportText:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
];

export const SimpleIcon01 = Template.bind({});
export const SimpleIcon02 = Template.bind({});
export const SimpleIcon03 = Template.bind({});
export const SimpleIcon04 = simpleIcon04.bind({});
export const IconAndForm = iconAndForm.bind({});
export const IconAndMap01 = iconAndMap01.bind({});
export const IconAndMap02 = iconAndMap02.bind({});
export const SimpleForm = simpleForm.bind({});

SimpleIcon01.args = {
  options,
  iconCardAllignment: 'center',
};

SimpleIcon02.args = {
  options,
  subHeadingText: 'Launch faster',
  headingText: 'A Fully integrated digital agency',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
  sectionOrientation: 'center',
};

SimpleIcon02.argTypes = {
  orientation: {
    options: ['center', 'split', 'default'],
    defaultValue: 'center',
    control: { type: 'radio' },
  },
};

SimpleIcon03.args = {
  ...SimpleIcon02.args,
  iconCardAllignment: 'left',
};

SimpleIcon03.argTypes = {
  orientation: {
    options: ['center', 'split', 'default'],
    defaultValue: 'default',
    control: { type: 'radio' },
  },
};

SimpleIcon04.args = {
  subHeadingText: 'Launch faster',
  headingText: 'A Fully integrated digital agency',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
  addressCardOption: [
    {
      country: 'Byron Bay',
      address: '100 Flinders Street Melbourne VIC 3000 AU',
    },
    {
      country: 'Sydney',
      address: '100 George StreetSydney NSW 2000 AU',
    },
    {
      country: 'Melbourne',
      address: '100 Market Street San Francisco, CA 94105 USA',
    },
  ],
};

IconAndForm.args = {
  options,
  iconCardAllignment: 'left',
  subHeadingText: 'Launch faster',
  headingText: 'A Fully integrated digital agency',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
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
};

IconAndMap01.args = {
  subHeadingText: 'Launch faster',
  headingText: 'A Fully integrated digital agency',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
  options,
  mapSource:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5096084154!2d144.49268362290942!3d-37.97015407090076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1672663059428!5m2!1sen!2sin',
  iconCardAllignment: 'left',
};

IconAndMap02.args = {
  subHeadingText: 'Launch faster',
  headingText: 'A Fully integrated digital agency',
  supportText:
    'We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.',
  options,
  mapSource:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5096084154!2d144.49268362290942!3d-37.97015407090076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1672663059428!5m2!1sen!2sin',
  iconCardAllignment: 'left',
};

SimpleForm.args = {
  options,
  iconCardAllignment: 'left',
  headingText: 'Get in Touch',
  supportText:
    'We’ love to hear from you. Our friendly team is always here to chat.',
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
};
