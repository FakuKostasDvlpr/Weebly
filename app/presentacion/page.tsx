import { TimeLine } from "@/app/componentes/ui/Timeline";
import { TypewriterEffectSmooth } from "@/app/componentes/ui/typewriter-effect";
import { AgendaRules } from "@/app/componentes/Hero/Agenda-Reglas";
import { PlayVideo } from "@/app/componentes/Hero/Video";

export default function Presentacion() {
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
        <>
        <div className="flex flex-col w-full items-center justify-center h-screen mt-20">
            <div className="flex items-center text-center justify-center flex-col">
                <p className="text-gray-900 mb-10 font-bold tracking-widest text-3xl md:text-4xl">
                    CÓMO FACTURAR ENTRE
                </p>
                <TypewriterEffectSmooth words={words} />
                <TimeLine/>
            <PlayVideo />
            </div>
        </div>
        <div className="flex flex-col items-center">
            <AgendaRules/>
        </div>
        </>

    );
}