import { createComponent } from "@lit-labs/react"
import React from "react"
import { Stats } from "spacekit"

const SpaceStats = createComponent({
    react: React,
    elementClass: Stats,
    tagName: "space-stats",
})

export default SpaceStats
