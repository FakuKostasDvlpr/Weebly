import { TimeLine } from "@/app/componentes/ui/Timeline";
import { TypewriterEffectSmooth } from "@/app/componentes/ui/typewriter-effect";
import { AgendaRules } from "@/app/componentes/Hero/Agenda-Reglas";
import { PlayVideo } from "@/app/componentes/Hero/Video";

export default function Presentacion() {
    const words = [
        {
            text: "1-3k",
            className: "dark:text-green-500 text-3xl",
        },
        {
            text: "USD",
            className: "dark:text-green-500 text-3xl",
        },
        {
            text: "en menos de 3 meses 🕛",
            className: "text-3xl",

        },
    ];

    return (
        <>
        <div className="flex flex-col w-full items-center justify-center mt-10">
            <div className="flex items-center text-center justify-center flex-col">
                <p className="text-gray-900 mb-10 font-bold tracking-wide text-4xl px-20 max-md:text-[20pt]">
                    CÓMO FACTURAR ENTRE
                </p>
                <TypewriterEffectSmooth words={words} />
                <p className="text-gray-900 mb-10 font-bold tracking-wide text-4xl px-20 max-md:text-[20pt]">
                    En <span className="font-bold text-3xl text-pink-500">Latinoamerica</span>
                </p>
                <TimeLine/>
                <PlayVideo />
            </div>
            <div className="flex flex-col items-center">
                <AgendaRules/>
            </div>
            <div>
                <p>RESULTADOS DE NUESTROS ALUMNOS</p>
            </div>
        </div>
        </>

    );
}