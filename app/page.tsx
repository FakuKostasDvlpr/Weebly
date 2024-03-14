import { GlobeDemo } from "./componentes/Hero/Portada";
import { Presentacion } from "./componentes/Hero/Presentacion";
import { PlayVideo } from "./componentes/Hero/Video";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent w-full max-w-[1100px] justify-center items-center text-center m-auto">
      <GlobeDemo/>
      <Presentacion/>
    </main>
  );
}
