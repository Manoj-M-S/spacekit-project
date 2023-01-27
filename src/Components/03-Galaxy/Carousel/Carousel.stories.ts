import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/ImageWithAssymmeticTextLayout/ImageWithAssymmeticTextLayout';

export default {
  title: 'Galaxy/Carousel',
  component: 'space-carousel',
} as Meta;

const imageWithAssymmeticTextLayout = ({ options }: any) => {
  return html`
    <space-image-assymmetic-textlayout .options=${options}>
    </space-image-assymmetic-textlayout>
  `;
};

export const ImageWithAssymmeticTextLayout = imageWithAssymmeticTextLayout.bind(
  {}
);

const imageWithAssymmeticTextLayoutOptions = {
  subHeading: 'SCORE',
  heading: 'Accelarate the Way You Work',
  linkText: 'More Details',
  linkHref: '#',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscinelit ut aliquam, purus sit amet luctus venenatis, lectus magna',
  src: 'https://s3-alpha-sig.figma.com/img/264e/657b/0675a2be99a7d10b70f5cf426202ba28?Expires=1675641600&Signature=iGHnj3EvklDwYwhXCgXGDCjIHl9m37lPDUil-nVviktgXdS5lY2GY5GHIsFuwn2-5bhAhSVa1tUnx22hBIYKEXf2jbr0y7-zRRlx2XmsO1KCmmYsT1jNCD-jso8I9uosK5kx8LcwGrrb~eQQAQt84ox~Q9MWdEgyC2y4FMQMVXnWLwM9cNSSOlnrAMRBdsl0t1uuF1vCD55CHYigVZyygcWAepiaN66KDPjJqyTguKXcHBsX33UAhpPhZ5uvuG2oMK4Y0-SbvC1P~lbQUwDskpTUvkBF6wgFM6GAMiU~FXMplRIX8j0mtoSCt0G6QLKAgkoaTETO1QES2oFVYZTnvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  alt: 'Accelarate the Way You Work',
};

ImageWithAssymmeticTextLayout.args = {
  options: [
    { ...imageWithAssymmeticTextLayoutOptions },
    { ...imageWithAssymmeticTextLayoutOptions },
    { ...imageWithAssymmeticTextLayoutOptions },
    { ...imageWithAssymmeticTextLayoutOptions },
    { ...imageWithAssymmeticTextLayoutOptions },
  ],
};
