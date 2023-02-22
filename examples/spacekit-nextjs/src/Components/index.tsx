import lazy from 'next/dynamic';

const Stats = lazy(() => import('./Stats'), { ssr: false });
const Image = lazy(() => import('./Image'), { ssr: false });
const Banner = lazy(() => import('./Banner'), { ssr: false });
const Header = lazy(() => import('./Header'), { ssr: false });
const IconCard = lazy(() => import('./IconCard'), { ssr: false });
const LogoGrids = lazy(() => import('./LogoGrids'), { ssr: false });
const FooterTypeSix = lazy(() => import('./FooterTypeSix'), { ssr: false });
const HeaderMenuItem = lazy(() => import('./HeaderMenuItem'), { ssr: false });
const SectionHeading = lazy(() => import('./SectionHeading'), { ssr: false });
const AccordionPattern = lazy(() => import('./AccordionPattern'), {
  ssr: false,
});
const HeroBannerStyle5 = lazy(() => import('./HeroBannerStyle5'), {
  ssr: false,
});
const HeroBannerStyle6 = lazy(() => import('./HeroBannerStyle6'), {
  ssr: false,
});
const TestimonyCarousel = lazy(() => import('./TestimonyCarousel'), {
  ssr: false,
});
const SpaceFourColWithFooter = lazy(() => import('./FourColFooter'), {
  ssr: false,
});

export {
  Stats,
  Image,
  Banner,
  Header,
  IconCard,
  LogoGrids,
  FooterTypeSix,
  SectionHeading,
  HeaderMenuItem,
  HeroBannerStyle6,
  HeroBannerStyle5,
  AccordionPattern,
  TestimonyCarousel,
  SpaceFourColWithFooter,
};
