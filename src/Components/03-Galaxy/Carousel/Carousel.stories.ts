import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/ImageWithAssymmeticTextLayout/ImageWithAssymmeticTextLayout';
import './src/ImageWithTitleAndDescription/ImageWithTitleAndDescription';

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

const imageWithTitleAndDescription = ({ options }: any) => {
  return html`
    <space-image-title-description .options=${options}>
    </space-image-title-description>
  `;
};

export const ImageWithAssymmeticTextLayout = imageWithAssymmeticTextLayout.bind(
  {}
);

export const ImageWithTitleAndDescription = imageWithTitleAndDescription.bind(
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

const imageWithTitleAndDescriptionOptions = {
  alt: 'Beautiful Collections of Book Mockups',
  src: 'https://s3-alpha-sig.figma.com/img/3634/edf7/8027d38234ea7bfc85ac532f1e673545?Expires=1675641600&Signature=cu9b5FRuASrkOONX~EiJwGjzsqeeHd6VtzOlsW6ASSvR~bw3cXlEU9vbMyqnQ2tfvMEyrPKDIVA937X9-MXeCIi2DRly75chHLKC-yY6APFKvxMu3zR8UG4Ow60~5uqqMvFukRy-KhFS7ebQbnzhG~YxxUFkJzILT-b-uCsGXFvNQ4SiMVtVGsWkC~Ted-fk3zTMexVOMxb~2Lega-HKklgk0MN6cgE5AW7rhsh-N6vpBPZ-Hl8n90D5h0w5A7a8hr5pCRs8cp6stXP--Vhfth7rCmjOiSzl8TQoj9JncCGiryz~y0IpNSf3BF9NfT6AqMS0W94S28d~OWTKFVbGrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  heading: 'Beautiful Collections of Book Mockups',
  descriptionOne:
    'amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices ',
  descriptionTwo:
    'amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices ',
  descriptionHeadingOne: 'about',
  descriptionHeadingTwo: 'features',
};

ImageWithTitleAndDescription.args = {
  options: [
    { ...imageWithTitleAndDescriptionOptions },
    { ...imageWithTitleAndDescriptionOptions },
    { ...imageWithTitleAndDescriptionOptions },
    { ...imageWithTitleAndDescriptionOptions },
    { ...imageWithTitleAndDescriptionOptions },
    { ...imageWithTitleAndDescriptionOptions },
  ],
};
