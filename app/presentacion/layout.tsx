"use client";
import { TypewriterEffectSmooth } from "../componentes/ui/typewriter-effect";
import data from "../componentes/Data/data"

export function Presentacion() {
    const words = [
        {
            text: "Facturar",
        },
        {
            text: "entre",
        },
        {
            text: "1-3k",
            className: "dark:text-green-500",
        },
        {
            text: "USD",
        },
        {
            text: "en",
        },
        {
            text: "menos",
        },
        {
            text: "de",
        },
        {
            text: "3",
        },
        {
            text: "meses",
        },
        {
            text: "en",
        },
        {
            text: "Latinoamérica.",
            className: "dark:text-pink-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                The road to freedom starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div>
        </div>
    );
}
