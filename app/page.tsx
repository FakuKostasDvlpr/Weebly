import { GlobeDemo } from "./componentes/Hero/Portada";
import { SpotlightPreview } from "./componentes/Hero/Portada-extra";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent w-full  max-w-[900px] mx-auto">
      <GlobeDemo/>
    </main>
  );
}
