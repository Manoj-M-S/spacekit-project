import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/ContactHeader';
import './src/SimpleLink01/SimpleLink01';

export default {
  title: 'Galaxy/ContactHeader',
  component: 'space-contact-header',
} as Meta;

const Template = ({
  title,
  subTitle,
  supportText,
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
  center,
  heading,
  headingText,
  subHeading,
  emailText,
  imageSrc,
  imageVariant,
}: any) => {
  return html`
    <space-contact-header
      title=${title}
      support-text=${supportText}
      sub-title=${subTitle}
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
      ?center=${center}
      ?heading=${heading}
      heading-text=${headingText}
      sub-heading=${subHeading}
      email-text=${emailText}
      image-src=${imageSrc}
      image-variant=${imageVariant}
    >
    </space-contact-header>
  `;
};

const simpleLink01 = ({
  title,
  subTitle,
  supportText,
  allignment,
  options,
  container,
  mapSource,
}: any) => {
  return html`
    <space-contact-header-simplelink
      title=${title}
      support-text=${supportText}
      sub-title=${subTitle}
      allignment=${allignment}
      .options=${options}
      ?container=${container}
      map-source=${mapSource}
    >
    </space-contact-header-simplelink>
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

export const SimpleForm = Template.bind({});
export const FormAndImage01 = Template.bind({});
export const FormAndImage02 = Template.bind({});
export const SimpleLink01 = simpleLink01.bind({});
export const SimpleLink02 = simpleLink01.bind({});
export const Map = simpleLink01.bind({});

SimpleForm.args = {
  title: 'Contact us',
  subTitle: 'Get in touch',
  supportText: 'We’d love to hear from you. Please fill out this form.',
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
  center: true,
  heading: false,
};

FormAndImage01.args = {
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
  center: true,
  heading: true,
  headingText: "Let's make something great together.",
  subHeading: 'You can reach us anytime via',
  emailText: 'hi@space.com',
  imageSrc: 'https://i.ibb.co/VvvBzjz/image.png',
  imageVariant: 'right',
};

FormAndImage02.args = {
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
  center: true,
  heading: true,
  headingText: "Let's make something great together.",
  subHeading: 'You can reach us anytime via',
  emailText: 'hi@space.com',
  imageSrc: 'https://i.ibb.co/VvvBzjz/image.png',
  imageVariant: 'left',
};

FormAndImage01.argTypes = {
  imageVariant: {
    options: ['left', 'right'],
    control: {
      type: 'radio',
    },
  },
};

FormAndImage02.argTypes = {
  imageVariant: {
    options: ['left', 'right'],
    control: {
      type: 'radio',
    },
  },
};

SimpleLink01.args = {
  title: 'Contact us',
  subTitle: 'We’d love to hear from you',
  supportText: 'Our friendly team is always here to chat.',
  options,
  container: true,
  allignment: 'left',
};

SimpleLink01.argTypes = {
  allignment: {
    options: ['left', 'center'],
    control: {
      type: 'radio',
    },
  },
};

SimpleLink02.args = {
  ...SimpleLink01.args,
  allignment: 'center',
};

SimpleLink02.argTypes = {
  ...SimpleLink01.argTypes,
};

Map.args = {
  ...SimpleLink01.args,
  allignment: 'center',
  subTitle: 'Our locations',
  supportText: 'Come visit our friendly team at one of our offices.',
  mapSource:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5096084154!2d144.49268362290942!3d-37.97015407090076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1672663059428!5m2!1sen!2sin',
};

Map.argTypes = {
  ...SimpleLink01.argTypes,
};
