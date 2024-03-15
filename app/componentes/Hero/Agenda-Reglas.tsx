import { CircleCheckBig } from "lucide";
import Check from "../Icons/Check";

export function AgendaRules() {
    return (
        <>
        <div className="flex flex-col w-full gap-5 max-w-[700px]">
            <div className="flex items-center text-center justify-center text-4xl text-gray-800">
                <h3 className="font-bold "> SOLAMENTE AGENDA SI</h3>
            </div>
            <ul className="flex items-center justify-center flex-col gap-5 text-black ">
                <li>Ya estás cansado de probar múltiples modelos de negocios y no tener resultados contundentes</li>
                <li>SI sos dueño de negocios, infoproductor</li>
                <li>simplemente queres mejorar tus habilidades de ventas</li>
            </ul>
        </div>
        </>
    );
}