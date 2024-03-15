export default function CardResult() {
  return (
    <section className="flex flex-col xl:flex-col lg:flex-col sm:flex-col  md:flex-col  mt-10 gap-10">
      <div className="embed-responsive">
        <iframe className="w-[300px] sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[400px] xl:w-[800px] xl:h-[500px] lg:w-[900px] lg:h-[600px] rounded-xl" src="/video1.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="embed-responsive">
        <iframe className="w-full sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[400px] xl:w-[800px] xl:h-[500px] lg:w-[900px] lg:h-[600px] rounded-xl" src="https://player.vimeo.com/video/871518630?h=0f02d0ef32" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>


  );
}