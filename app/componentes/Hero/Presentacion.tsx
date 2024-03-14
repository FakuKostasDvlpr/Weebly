"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";

export function Presentacion() {
    const words = [
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
        <p className="text-neutral-300 font-medium text-4xl ">
            CÓMO FACTURAR ENTRE
        </p>
            <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Link className="items-center text-center justify-center w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm" href={"/"}>
                <p>Join now</p>
            </Link>
        </div>
    </div>
    );
}
