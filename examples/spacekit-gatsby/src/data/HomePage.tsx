import React from "react"
import { SpaceFourColWithFooter } from "../Components/"
import { TestimonialCarousalOptionsType } from "spacekit"

export const headerProps = {
    logoSrc: "https://i.ibb.co/k5sYcwt/logo.png",
    logoAlt: "logo",
    ctaTextOne: "Log in",
    ctaTextTwo: "Sign up",
}

const options = [
    {
        title: "Products",
        description: "Find the best solution for you.",
        iconName: "box",
    },
    {
        title: "Products",
        description: "Find the best solution for you.",
        iconName: "box",
    },
    {
        title: "Products",
        description: "Find the best solution for you.",
        iconName: "box",
    },
    {
        title: "Products",
        description: "Find the best solution for you.",
        iconName: "box",
    },
]

export const headerMenuItemProps = {
    headerMenuItemOptions: [
        {
            slot: "subMenu",
            label: "Home",
        },
        {
            slot: "subMenu",
            label: "Resources",
            children: (
                <>
                    <SpaceFourColWithFooter
                        headingFour="Company"
                        headingTwo="Use cases"
                        headingOne="Resources"
                        headingThree="Company"
                        optionsOne={options}
                        optionsTwo={options}
                        optionsFour={options}
                        optionsThree={options}
                        footerOptions={[
                            {
                                iconName: "dollarSign",
                                text: "Pricing",
                                href: "#",
                            },
                            {
                                iconName: "playCircle",
                                text: "Watch demo",
                                href: "#",
                            },
                            {
                                iconName: "messageCircle",
                                text: "Chat to sales",
                                href: "#",
                            },
                        ]}
                        footer-href="#"
                        footer-text-one="Ready to get started?"
                        footer-text-two="Sign up for free"
                    />
                </>
            ),
        },
        {
            slot: "subMenu",
            label: "Blog",
        },
        {
            slot: "subMenu",
            label: "About",
        },
        {
            slot: "subMenu",
            label: "Contact",
        },
    ],
}

export const logoGridsProps = {
    options: Array(12).fill({
        src: " https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg",
        alt: "Logo Name",
    }),
    type: "logo_6" as const,
    title: "A Fully integrated digital agency",
    description:
        "We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services",
}

export const sectionHeadingProops = {
    size: "default" as const,
    headText: "A Fully integrated digital agency",
    subHeading: "Launch faster",
    supportText:
        "We understand human needs through empathy to design experiences that improve conversion through practical strategies. We create integrated design-driven digital solutions where form follows function across an entire web product or through individual products and services.",
    orientation: "center" as const,
}

export const iconCardProps = {
    iconCardOptions: [...Array(8)].fill({
        iconName: "zap",
        ctaText: "Learn More",
        ctaHref: "#",
        supportText:
            "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        headingText: "Deliver instant answers",
        alignment: "center" as const,
    }),
}

export const testimonyCarouselProps = {
    type: "withCompanyLogo" as const,
    options: [
        {
            iconName: "",
            src: "https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400",
            alt: "Alexander David",
            name: "Alexander David",
            designation: "Head of Digital Transformation, Grofers",
            logoSrc: "https://i.ibb.co/wMY9d3G/logo.png",
            logoAlt: "alt",
            description:
                "Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!",
        },
        {
            src: "https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2NzU2NjI3NTA&force=true&w=2400",
            alt: "Alexander David",
            name: "Alexander David",
            designation: "Head of Digital Transformation, Grofers",
            logoSrc: "https://i.ibb.co/wMY9d3G/logo.png",
            logoAlt: "alt",
            description:
                "Working with the SPACE team has been a great experience. What makes it special is the heart & soul the team puts into every project they work on!",
        },
    ] as Array<TestimonialCarousalOptionsType>,
}

export const statsProps = {
    statsOptions: [
        {
            subHeading: "Global customers",
            headingText: "4,000+",
            supportText: "We’ve helped build over 400 projects and have worked with some amazing companies.",
        },
        {
            subHeading: "Return on investment",
            headingText: "600%",
            supportText: "Our customers have reported an average of ~600% ROI.",
        },
        {
            subHeading: "Global downloads",
            headingText: "10k",
            supportText: "Our app has been downloaded over 10k times.",
        },
        {
            subHeading: "5-star reviews",
            headingText: "200+",
            supportText: "We’re proud of our 5-star rating with over 200 reviews.",
        },
    ],
}

export const bannerProps = {
    heading: "Join our newsletter",
    subHeading: "Sign up for the very best tutorials and the latest news.",
    ctaType: "button" as const,
    bannerWidth: "full" as const,
    bannerImageAlt: "image",
    bannerImageSrc: "https://www.lotame.com/wp-content/uploads/2021/08/About-Team.png",
    showSubHeading: true,
    primaryBtnText: "Get started",
    secondaryBtnText: "Learn more",
    ctaImageType: "normal" as const,
    inputHintText: "We care about your data in our privacy policy",
}

export const accordionPatternProps = {
    options: [
        {
            headingText: "Is there a free trial available?",
            content:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
            divider: true,
        },
        {
            headingText: "Is there a free trial available?",
            content:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
            divider: true,
        },
        {
            headingText: "Is there a free trial available?",
            content:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
            divider: true,
        },
        {
            headingText: "Is there a free trial available?",
            content:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
            divider: true,
        },
    ],
}

export const footerProps = {
    footerText: "© 2021 SPACE. All rights reserved.",
    title: "Serve. Preserve. Innovate.",
    linkOptions: [
        {
            heading: "Our Services",
            options: [
                {
                    navigationText: "Overview",
                    navigationHref: "#",
                },
                {
                    navigationText: "Overview",
                    navigationHref: "#",
                },
                {
                    navigationText: "Overview",
                    navigationHref: "#",
                },
            ],
        },
        {
            heading: "Our services",
            options: [
                {
                    navigationText: "Overview",
                    navigationHref: "#",
                },
                {
                    navigationText: "Overview",
                    navigationHref: "#",
                },
            ],
        },
    ],
    socialLinkOptions: [
        {
            linkHref: "#",
            linkIcon: "twitter",
        },
        {
            linkHref: "#",
            linkIcon: "linkedin",
        },
        {
            linkHref: "#",
            linkIcon: "facebook",
        },
        {
            linkHref: "#",
            linkIcon: "github",
        },
    ],
    footerLinkOptions: [
        {
            linkHref: "#",
            linkText: "Terms",
        },
        {
            linkHref: "#",
            linkText: "Privacy",
        },
        {
            linkHref: "#",
            linkText: "Cookies",
        },
    ],
    locationOptions: [
        {
            location: "Canada",
            address: "2433 29St SW Calgary, Alberta T3E2K3, Canada",
            phone: "+1 4034000849",
        },
        {
            location: "Canada",
            address: "2433 29St SW Calgary, Alberta T3E2K3, Canada",
            phone: "+1 4034000849",
        },
        {
            location: "Canada",
            address: "2433 29St SW Calgary, Alberta T3E2K3, Canada",
            phone: "+1 4034000849",
        },
    ],
    quickLinks: [
        {
            navigationText: "Contact",
            navigationHref: "#",
        },
        {
            navigationText: "Careers",
            navigationHref: "#",
        },
        {
            navigationText: "Login",
            navigationHref: "#",
        },
    ],
}

export const heroBannerStyle6Props = {
    title: "Beautiful analytics to grow smarter",
    supportiveText:
        "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
    imageAlt: "image",
    imageSrc: "https://i.ibb.co/ChDbcNW/image-3.png",
}

export const heroBannerStyle5Props = {
    title: "Beautiful analytics to grow smarter",
    supportiveText:
        "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
    imageAlt: "image",
    primaryBtnText: "Signup",
    secondaryBtnText: "Demo",
    imageSrc: "https://i.ibb.co/YRTGY6b/image-2.png",
}
