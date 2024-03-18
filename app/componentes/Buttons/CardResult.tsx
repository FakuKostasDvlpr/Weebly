"use client"
import { RevealWrapper } from "next-reveal";

export default function CardResult() {
  return (
    <section className="flex items-center justify-center mx-auto flex-col xl:flex-col lg:flex-col sm:flex-col  md:flex-col  mt-10 gap-10">
      <p className="text-[18px] font-semibold text-purple-600">&quot;Ganaba aproximadamente 250 USD mensuales como setter y uber. Pasé a 1.700 USD en el primer mes&quot;</p>
      <RevealWrapper delay={500} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="left" reset={true} >
        <div className="embed-responsive">
          <iframe className="w-[300px] sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[400px] xl:w-[800px] xl:h-[500px] lg:w-[900px] lg:h-[600px] rounded-xl" src="/video1.mp4" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={800} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
        <div>
          <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
      </RevealWrapper>

      <RevealWrapper delay={600} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="rigth" reset={true} >
        <div className="embed-responsive">
          <iframe className="w-full sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[400px] xl:w-[800px] xl:h-[500px] lg:w-[900px] lg:h-[600px] rounded-xl" src="https://player.vimeo.com/video/871518630?h=0f02d0ef32" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p className="text-[18px] font-semibold text-purple-600">&quot;En comparación al trabajo que tenía antes, me lleva mucho menos tiempo y el ingreso es 4 veces más&quot;</p>
        </div>
      </RevealWrapper>

    </section>
  );
}
