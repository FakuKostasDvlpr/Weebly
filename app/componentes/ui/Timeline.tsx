import React from "react";
import Play from "../Icons/Play";

export const TimeLine = () => {
    return (
        <>
        <section>
            <div className="flex items-center justify-center flex-col  mt-5 sm:mb-0">
                <div className="z-10 gap-10 flex flex-col items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 sm:shrink-0 shrink-0">
                    <Play />
                </div>
            <div className="flex flex-col text-white mt-10">
                <h1 className="text-4xl text-gray-900 max-md:px-12">Paso 1: Ver el video</h1>
            </div>
            </div>
        </section>
        </>
    );
};


