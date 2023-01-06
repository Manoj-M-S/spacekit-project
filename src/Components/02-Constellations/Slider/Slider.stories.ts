import { html } from 'lit';
import './src/Slider';
import { Meta } from '@storybook/web-components';
import '../Pagination';
import '../Cards/src/IconCard/IconCard';
import { SwiperOptions } from 'swiper';

export default {
  title: 'Constellations/Slider',
  component: 'space-slider',
} as Meta;

const Template = ({ swiperOptions }: any) => {
  return html`
    <div class="flex relative">
      <space-carousel-arrow
        icon-name="chevronLeft"
        class="prev-button absolute left-4 top-1/2 z-[2] -translate-y-1/2"
      ></space-carousel-arrow>

      <space-slider class="w-full" scrollbar .swiperOptions=${swiperOptions}>
        <space-icon-card
          cta-href=""
          cta-text="Learn More"
          head-text="Deliver instant answers"
          icon-name="zap"
          alignment="center"
          support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          container
        ></space-icon-card>
        <space-icon-card
          cta-href=""
          cta-text="Learn More"
          head-text="Deliver instant answers"
          icon-name="zap"
          alignment="center"
          support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          container
        ></space-icon-card>
        <space-icon-card
          cta-href=""
          cta-text="Learn More"
          head-text="Deliver instant answers"
          icon-name="zap"
          alignment="center"
          support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          container
        ></space-icon-card>
        <space-icon-card
          cta-href=""
          cta-text="Learn More"
          head-text="Deliver instant answers"
          icon-name="zap"
          alignment="center"
          support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          container
        ></space-icon-card>
        <space-icon-card
          cta-href=""
          cta-text="Learn More"
          head-text="Deliver instant answers"
          icon-name="zap"
          alignment="center"
          support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          container
        ></space-icon-card>
        <space-icon-card
          cta-href=""
          cta-text="Learn More"
          head-text="Deliver instant answers"
          icon-name="zap"
          alignment="center"
          support-text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          container
        ></space-icon-card>
      </space-slider>

      <space-carousel-arrow
        icon-name="chevronRight"
        class="next-button absolute right-4 top-1/2 z-[2] -translate-y-1/2"
      ></space-carousel-arrow>
    </div>
  `;
};

export const Default = Template.bind({});

Default.args = {
  swiperOptions: {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: '.prev-button',
      nextEl: '.next-button',
    },
  } as SwiperOptions,
};
