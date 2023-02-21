import { lazy } from "react"

const Stats = lazy(() => import("./Stats"))
const Image = lazy(() => import("./Image"))
const Banner = lazy(() => import("./Banner"))
const Header = lazy(() => import("./Header"))
const IconCard = lazy(() => import("./IconCard"))
const LogoGrids = lazy(() => import("./LogoGrids"))
const FooterTypeSix = lazy(() => import("./FooterTypeSix"))
const HeaderMenuItem = lazy(() => import("./HeaderMenuItem"))
const SectionHeading = lazy(() => import("./SectionHeading"))
const AccordionPattern = lazy(() => import("./AccordionPattern"))
const HeroBannerStyle5 = lazy(() => import("./HeroBannerStyle5"))
const HeroBannerStyle6 = lazy(() => import("./HeroBannerStyle6"))
const TestimonyCarousel = lazy(() => import("./TestimonyCarousel"))
const SpaceFourColWithFooter = lazy(() => import("./FourColFooter"))

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
}
