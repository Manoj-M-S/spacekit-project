import {
    headerProps,
    headerMenuItemProps,
    logoGridsProps,
    sectionHeadingProops,
    iconCardProps,
    testimonyCarouselProps,
    statsProps,
    bannerProps,
    accordionPatternProps,
    footerProps,
    heroBannerStyle6Props,
    heroBannerStyle5Props,
} from "@/data/HomePage"
import {
    AccordionPattern,
    Banner,
    FooterTypeSix,
    Header,
    HeaderMenuItem,
    HeroBannerStyle5,
    HeroBannerStyle6,
    IconCard,
    Image,
    LogoGrids,
    SectionHeading,
    Stats,
    TestimonyCarousel,
} from "@/Components"

const Index = () => {
    const { headerMenuItemOptions } = headerMenuItemProps
    const { iconCardOptions } = iconCardProps
    const { statsOptions } = statsProps

    return (
        <>
            <Header {...headerProps}>
                {headerMenuItemOptions?.map((items) => (
                    <HeaderMenuItem key={items.label} {...items} />
                ))}
            </Header>
            <main className="xxl:container xxl:mx-auto">
                <section className="px-4 lg:px-28">
                    <HeroBannerStyle6 className="hidden lg:block" {...heroBannerStyle6Props} />
                    <HeroBannerStyle5 className="lg:hidden" {...heroBannerStyle5Props} />
                </section>

                <section className="mt-20 lg:mt-30">
                    <LogoGrids {...logoGridsProps} className="hidden lg:block" />
                    <LogoGrids {...logoGridsProps} type="logo_4" className="lg:hidden" />
                </section>
                <section className="px-4 lg:px-28 mt-20 lg:mt-30">
                    <SectionHeading {...sectionHeadingProops} />

                    <ul className="grid justify-center lg:justify-between gap-8 lg:gap-x-8 lg:gap-y-16 lg:grid-cols-[repeat(4,1fr)] mt-12 lg:mt-16 list-none">
                        {iconCardOptions?.map((items) => (
                            <li className="flex-shrink" key={items.headingText}>
                                <IconCard {...items} />
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="px-4 lg:px-28 mt-20 lg:mt-30">
                    <TestimonyCarousel {...testimonyCarouselProps} />
                </section>
                <section className="px-4 lg:px-28 mt-20 lg:mt-30">
                    <SectionHeading {...sectionHeadingProops} />

                    <div className="flex items-center flex-col-reverse lg:flex-row gap-12 lg:gap-[136px] mt-20 lg:mt-16">
                        <ul className="grid grid-cols-2 list-none gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-16">
                            {statsOptions?.map((item) => (
                                <li key={item.headingText}>
                                    <Stats {...item} orientation="default" />
                                </li>
                            ))}
                        </ul>
                        <Image
                            className="w-full max-h-64 lg:max-h-[564px] lg:max-w-[592px] lg:aspect-square object-cover"
                            alt="A Fully integrated digital agency"
                            src="https://s3-alpha-sig.figma.com/img/6a7d/4961/2c2d31c5592a945a1858e36acdd32017?Expires=1677456000&Signature=nTAC60h~xd~t4UGy-WfCSX7pXJ1j~OyfbJOsyNfDtxPKQKK0NkEt~pEul92kSwjLB58BipyDBct4BmPlNv0qMLUadFzOtPu28T2GIJj5~9G6LLdAfSVkteoWl3yk4AeeInf1A~pLl1fEa3-RRAOvLLjuuSBNEN4LKaPiJZYNnQrZ0ElPTXFiMMJK4XV3qI08pr6SEL143u9vRMumxnZAHWZrhkpUKfKwgEHo0gr3q~0AOYAYa8NkwkLWe5qEnuf7TA7ADZQPOQOevxGIrZsnIZeZkhhxMSq1aKkKvmuaRSGMfAvc-9Dr36vje4XC09AB5XvDYAZvHtvcaP~aN9ADfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Image>
                    </div>
                </section>
                <div className="flex flex-col-reverse lg:flex-col">
                    <section className="px-4 lg:px-28 mt-20 lg:mt-30">
                        <Banner {...bannerProps} />
                    </section>
                    <section className="px-4 lg:px-28 py-20 lg:py-30 flex flex-col items-center">
                        <SectionHeading {...sectionHeadingProops} />
                        <AccordionPattern className="mt-16 block lg:max-w-4xl" {...accordionPatternProps} />
                    </section>
                </div>
            </main>
            <FooterTypeSix className="mt-20 lg:mt-30 block" {...footerProps} />
        </>
    )
}

export default Index
