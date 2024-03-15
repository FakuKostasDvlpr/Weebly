"use client";

import Script from "next/script";

export default function booking() {
    return (
        <div className=" m-10  flex gap-16 flex-col items-center justify-center mt-10">
            <div className="flex flex-col gap-10 items-center justify-center">
                 <h3 className="text-4xl md:text-6xl font-bold text-violet-500">Estás a un paso de tu sesión..</h3>
           <div className="w-full max-w-[600px]">
            <p className="text-1xl font-bold text-gray-600">
            En esta sesión estrategia vamos a sentarnos a analizar tu situación actual para darte claridad en qué estás fallando para cumplir tus objetivos, y te vamos a dar el plan de acción para resolverlo y definir si podemos ayudarte a llegar a tu meta de facturación, con mentoría grupal,  1-a-1 e Inserción laboral ASEGURADA
            </p>
           </div>
            </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h4 className="text-4xl md:text-6xl font-bold text-violet-500">NO TE OBLIGAREMOS NI TE PRESIONAREMOS A</h4>
            <div >
            <span className="bg-pink-400 text-4xl font-bold  text-white px-1 rounded-xl">NADA</span>
            </div>
            <div className="w-full max-w-[600px]">
                <p className="text-1xl font-bold text-gray-600">
                No tenemos ningún incentivo para venderte si no estamos 110% seguros de que podemos darte resultados fácil y rápido, ya que ponemos en juego nuestro tiempo, dinero y energía. Selecciona un dia y un horario para tener la reunion
                </p>
            </div>
          </div>
          <div>
          <div className="calendly-inline-widget w-[450px] md:w-[1300px] h-screen"
                data-url="https://calendly.com/codeamosparavos-dev/entrevista-calificacion-programa-closer-remoto-15m?background_color=000000&text_color=FFFFFF&primary_color=94d75d"></div>
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
          </div>
        </div>
    );
}


