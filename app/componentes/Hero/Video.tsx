"use client";
export function PlayVideo() {

    return (
        <div className="flex mx-auto h-fit w-fit">
            <iframe src="https://player.vimeo.com/video/898790021?h=b02714ffe4"
                className="grow w-[950px] h-[950px] max-lg:w-[540px] max-sm:w-[300px] rounded-xl"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}
