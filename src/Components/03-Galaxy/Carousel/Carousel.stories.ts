import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './src/Images&VideosSlideshow/Images&VideosSlideshow';
import './src/ImageWithAssymmeticTextLayout/ImageWithAssymmeticTextLayout';
import './src/ImageWithTitleAndCTA/ImageWithTitleAndCTA';
import './src/ImagesAndVideoWithDescription/ImagesAndVideoWithDescription';
import './src/TextOnly/TextOnly';
import './src/ImageFullWidthCentreAligned/ImageFullWidthCentreAligned';

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

const imageWithTitleAndCTA = ({ options }: any) => {
  return html`
    <space-image-title-cta .options=${options}> </space-image-title-cta>
  `;
};

const imagesAndVideoWithDescription = ({ options }: any) => {
  return html`
    <space-images-video-description .options=${options}>
    </space-images-video-description>
  `;
};

const textOnly = ({ options }: any) => {
  return html` <space-text-only .options=${options}> </space-text-only> `;
};

const imageFullWidthCentreAligned = ({ options }: any) => {
  return html`
    <space-image-fullwidth-centre .options=${options}>
    </space-image-fullwidth-centre>
  `;
};

export const ImageWithAssymmeticTextLayout = imageWithAssymmeticTextLayout.bind(
  {}
);

export const ImageWithTitleAndDescription = imageWithTitleAndDescription.bind(
  {}
);

export const ImageWithTitleAndCTA = imageWithTitleAndCTA.bind({});

export const TextOnly = textOnly.bind({});

export const ImagesAndVideoWithDescription = imagesAndVideoWithDescription.bind(
  {}
);

export const ImageFullWidthCentreAligned = imageFullWidthCentreAligned.bind({});

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

const imageWithTitleAndCTAOption = {
  alt: 'WORK WITH US',
  src: 'https://s3-alpha-sig.figma.com/img/e938/b1bb/6b7cfe0177b086e6d95550aa9d6cfcae?Expires=1675641600&Signature=PB6Ejqf-QmFVxb3iUAK4Lz-vRc5NVZXLsQNGX6uMa7jvwDPnXNZcpju9DtnG63ocsYBW9CESAbv176aYa8oDEtLT-w56OoxP793oYk0p4Q7Lgd2M8VHgPbLxjKGFTUgq~vkXkklqJvcILw4TLJGCLQiAgLr~3c-8BX0YJBpGE62I7QxVZfuHsHOfVRNck6yxA-qdO1KqOOkXqqRSd3bqr8N~SKtLHZ~sAXIdv3VHByRhp5-DhSLSL0ipwBJZpV6Zzuxh26pQwJgQ-B7u1ixsuhWzdnWzDkUSklewsefRIBTQOXKJdBi2eWns9RVREw1VQm~OILa6VSitj7U8eX5eOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  heading: 'WORK WITH US',
  ctaText: 'See Career Opportunities',
  description:
    'amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices ',
};

ImageWithTitleAndCTA.args = {
  options: [
    { ...imageWithTitleAndCTAOption },
    { ...imageWithTitleAndCTAOption },
    { ...imageWithTitleAndCTAOption },
    { ...imageWithTitleAndCTAOption },
    { ...imageWithTitleAndCTAOption },
    { ...imageWithTitleAndCTAOption },
  ],
};

const textOnlyOptions = {
  heading: 'We are a global creative collective',
  description: 'We shape the future of brands through craft & curosity',
};

TextOnly.args = {
  options: [
    { ...textOnlyOptions },
    { ...textOnlyOptions },
    { ...textOnlyOptions },
    { ...textOnlyOptions },
    { ...textOnlyOptions },
    { ...textOnlyOptions },
  ],
};

const imagesAndVideoWithDescriptionOptions = {
  heading: 'A fully integrated digital agency',
  linkText: 'Explore More',
  linkHref: '#',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscinelit ut aliquam, purus sit amet luctus venenatis, lectus magna',
  src: 'https://s3-alpha-sig.figma.com/img/1ccd/3401/d8124a72b6e722aae638feb9d8e7e4c6?Expires=1675641600&Signature=gtS2jLy5En5a8rmfcov75hZfTfJlNNNrLDtCYLudFKPn1tGGRJkia7GX6mmeTueuRexjriNlsnHu74Gh0QJuFuEdgHBUnd3QfNhvUVg~gx78yfwJ3K5P9PlKyQGfgiAWBSi6I1Hb~U6i12M4DoKcrK2ewZB9Tgf3n433errM60hqh~3VAAVn-H8JtoiYVWlCaEr3KgQH~fo79Y8aXVvgLl7K7vToDonzdrP5uzvM9V2LzgIjY1M4RrIEo9LN4Tkm6VOybvXpZ7dVtKmpVW0sldrEj-FEZo0G-I9EIMO-Tc~pCH4SPDPM8EAj5OMzx1UGUGwrldgpamwDCeD1-Y0ZZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  alt: 'A fully integrated digital agency',
};

ImagesAndVideoWithDescription.args = {
  options: [
    { ...imagesAndVideoWithDescriptionOptions },
    { ...imagesAndVideoWithDescriptionOptions },
    { ...imagesAndVideoWithDescriptionOptions },
    { ...imagesAndVideoWithDescriptionOptions },
    { ...imagesAndVideoWithDescriptionOptions },
    { ...imagesAndVideoWithDescriptionOptions },
  ],
};

const imageFullWidthCentreAlignedOptions = {
  src: 'https://s3-alpha-sig.figma.com/img/35fa/525f/b695a1daba2f26ce4c525a34bce79a6e?Expires=1675641600&Signature=psQQSIgXuR6EUb4fv2mQvzbV0K2EWX2nUinH2~iVZt-UAyif3gk34Y4xpqRQAF1F-Fb383C9q~0RVk7DBfNpm5lk9phR82jyijyWcBWMRve05j1hKlpFgPaPTJdeYi-uPBrswusE4STCuCLYZaidCfS8BxwLu7Z3S3pHYoHkWUjpcSflLcto6eI3I5BbRUFVsGj1c11aLgfKZyWN3NETAXql-mGMZVxeSQfRXNgrwMqibuISs8OVUWxVnsxfonS4wbnYYgylyrQ7DPlmzHL5g2Ha4H4nKQ7MlwlGE0zWRgdqdJY0X6nnJMmZoZNh-3HI1bvCe6XGywq-HBlvFfZguw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  alt: 'Become Part of a Greater Story',
  heading: 'Become Part of a Greater Story',
  ctaTextOne: 'Learn More',
  ctaTextTwo: 'Get Started',
  description:
    'Connect with us to learn how we can improve your digital presence with our expertise and experience throught hundreds of digital experiences.',
};

ImageFullWidthCentreAligned.args = {
  options: [
    { ...imageFullWidthCentreAlignedOptions },
    { ...imageFullWidthCentreAlignedOptions },
    { ...imageFullWidthCentreAlignedOptions },
    { ...imageFullWidthCentreAlignedOptions },
    { ...imageFullWidthCentreAlignedOptions },
    { ...imageFullWidthCentreAlignedOptions },
  ],
};
