export default function HeroVideo() {
  return (
    <section className="w-screen bg-gray-400 flex flex-col items-center justify-center relative">
      <div className="w-full h-[50vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/video/main-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-[-1px] left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent grain" />
      </div>
      <div className="bg-[#56471B] w-full h-12 z-1 grain" />
    </section>
  );
}
