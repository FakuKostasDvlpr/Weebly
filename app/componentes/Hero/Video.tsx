"use client";
export function PlayVideo() {

    return (
        <div className="">
        <iframe className="w-[300px] sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[400px] xl:w-[800px] xl:h-[500px] lg:w-[900px] lg:h-[600px] rounded-xl" src="/video1.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}
