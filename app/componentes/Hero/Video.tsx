"use client";

import { RevealWrapper } from "next-reveal";

export function PlayVideo() {

    return (
        <div className="">
    <RevealWrapper delay={600} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="top" reset={true} >
        <iframe className="w-[300px] sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[400px] xl:w-[800px] xl:h-[500px] lg:w-[900px] lg:h-[600px] rounded-xl" src="https://player.vimeo.com/video/898790021?h=b02714ffe4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </RevealWrapper>
        </div>
    );
}
