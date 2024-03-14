// data.ts

// Define la interfaz para la información de la página
interface PageData {
    title: string;
    subtitle: string;
    agenda: string[];
    comparison: string;
    // Puedes agregar más propiedades según sea necesario para la página
}

// Datos de la página
export const pageData: PageData = {
    title: "Mi Portafolio",
    subtitle: "¡Bienvenido a mi portafolio!",
    agenda: [
        "Ya estás cansado de probar múltiples modelos de negocios y no tener resultados contundentes",
        " sos un independiente en busca de crecimiento y un vehículo oportunidad de +3kmes",
        " Si sos dueño de negocios, infoproductor.",
        " O simplemente querés mejorar tus habilidades de ventas"
    ],
    comparison: " En comparación al trabajo que tenía antes, me lleva mucho menos tiempo y el ingreso es 4 veces más.",
};

// Exporta los datos de la página para que puedan ser utilizados en otros archivos
export default pageData;

// data.ts

// Define la interfaz para otra información
interface InfoData {
    title: string;
    description: string;
    // Agrega cualquier otra propiedad que desees
}

// Datos adicionales
export const infoData: InfoData[] = [
    {
        title: "Estás a un paso de tu sesión..",
        description: "En esta sesión estratégica vamos a sentarnos a analizar tu situación actual para darte claridad en qué estás fallando para cumplir tus objetivos, y te vamos a dar el plan de acción para resolverlo y definir si podemos ayudarte a llegar a tu meta de facturación, con mentoría grupal, 1-a-1 e Inserción laboral ASEGURADA. NO TE OBLIGAREMOS NI TE PRESIONAREMOS A NADA. No tenemos ningún incentivo para venderte si no estamos 110% seguros de que podemos darte resultados fácil y rápido, ya que ponemos en juego nuestro tiempo, dinero y energía. Selecciona un día y un horario para tener la reunión."
    }
    // Puedes agregar más elementos según sea necesario
];
