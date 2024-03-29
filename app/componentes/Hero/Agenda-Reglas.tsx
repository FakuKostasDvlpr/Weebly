"use client"
import { RevealWrapper } from "next-reveal";

export function AgendaRules() {
    return (
        <>
        <RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
            <ul className="py-3 flex m-10 flex-col text-left text-gray-500 dark:text-gray-400">
                <h1 className="text-gray-700 justify-center items-center text-center text-4xl py-4">SOLAMENTE AGENDA SI:</h1>
                <div className="flex flex-col gap-10">
        <RevealWrapper delay={800} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span className="text-gray-600 font-bold">Ya estás cansado de probar múltiples modelos de negocios y no tener resultados contundentes</span>
                </li>
            </RevealWrapper>
            <RevealWrapper delay={900} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span className="text-gray-600 font-bold">Sos un independiente en busca de crecimiento y un vehículo oportunidad de +3kmes</span>
                </li>
            </RevealWrapper>
            <RevealWrapper delay={1100} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span className="text-gray-600 font-bold">SI sos dueño de negocios, infoproductor.</span>
                </li>
            </RevealWrapper>
                </div>
            </ul>
        </RevealWrapper>
        </>
    );
}