"use client"

import SectionHeading from "@/components/shared/SectionHeading"
import React from "react"
import AccordinCard from "./AccordinCard"

export default function Accordin() {
    return (
        <div className="container">
            <div>
                <SectionHeading
                heading="Frequently Asked Questions"
                subHeading="The most common question people ask us about the Dream Finder"
                />
                <AccordinCard></AccordinCard>
            </div>

        </div>
    )
}