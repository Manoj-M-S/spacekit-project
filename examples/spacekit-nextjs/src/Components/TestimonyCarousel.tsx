import { createComponent } from "@lit-labs/react"
import React from "react"
import { TestimonyCarousel } from "spacekit"

const SpaceTestimonyCarousel = createComponent({
    react: React,
    tagName: "space-testimony-carousel",
    elementClass: TestimonyCarousel,
})

export default SpaceTestimonyCarousel
