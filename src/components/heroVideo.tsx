export default function HeroVideo() {
  return (
    <section className="w-screen bg-gray-400 flex flex-col items-end justify-center relative">
      <div className="w-full h-[70vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover filter contrast-100"
        >
          <source src="/video/las-2.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute bottom-[-1px] left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent grain" /> */}
      </div>
      <p className="text-white z-10 transform -translate-y-2 mr-6 font-the-impressionist md:text-3xl text-xl leading-0 font-normal">
        Psycholog & psychotraumatolog
      </p>
      <div className="bg-[#56471B] w-full h-8 z-1 grain" />
    </section>
  );
}
