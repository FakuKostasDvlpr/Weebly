"use client";
export function PlayVideo() {
   
    return (
        <div className="flex mx-auto h-fit w-fit " id="videoPlay">
            <iframe src="https://player.vimeo.com/video/898790021?h=b02714ffe4" 
            className="grow w-[700px] h-[700px] max-md:w-[500px] rounded-xl"
             allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}
