import Footer from "./componentes/Footer/Footer";
import { GlobeDemo } from "./componentes/Hero/Portada";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent w-full max-w-[900px] justify-center items-center text-center m-auto">
      <GlobeDemo/>
      <Footer/>
    </main>
  );
}
