import { TimeLine } from "@/app/componentes/ui/Timeline";
import { AgendaRules } from "@/app/componentes/Hero/Agenda-Reglas";
import { PlayVideo } from "@/app/componentes/Hero/Video";
import Link from "next/link";

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
                <p className="text-gray-900 mb-10 font-bold tracking-wide text-3xl px-20 max-md:text-[20pt]">
                    CÓMO FACTURAR ENTRE
                </p>
                <p className="text-green-600 mb-10 font-extrabold tracking-wide text-5xl px-20 max-md:text-[20pt]">
                1,3k USD <br /><span className="text-3xl text-gray-700">3 meses</span>
                <span className="text-3xl text-gray-700"> en menos de  en</span>
                <span className="font-bold text-3xl text-pink-500">  Latinoamerica</span>
                </p>
                <TimeLine/>
                <PlayVideo />
            </div>
            <div className="flex  items-center font-semibold">
            <AgendaRules/>
            </div>
            <div className="mb-10">
            <Link href={"/booking"} className="border-2 px-10 py-3 rounded-xl border-gray-800 bg-gray-600 text-white
                    hover:border-dashed hover:border-purple-400 hover:bg-transparent font-bold hover:text-purple-700 duration-200
                    ">
                    Agenda una llamada! 
            </Link>
            </div>
        </div>
        </>

    );
}