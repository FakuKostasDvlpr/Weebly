"use client";
export function PlayVideo() {
   
    return (
        <div className="flex mx-auto" id="videoPlay">
            <iframe src="https://player.vimeo.com/video/898790021?h=b02714ffe4" width="460" height="460" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}