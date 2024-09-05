import Image from "next/image";

const Earth = () => {
  return (
    <>
      <section className="relative w-full h-screen mt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 mt-10">
          <Image
            src="/images/plant.jpg"
            alt="Background Image"
            fill
            style={{ objectFit: 'cover' }} 
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> 
        </div>

        {/* Content */}
        <div className="relative flex items-center justify-center w-full h-full px-4">
          <div className="max-w-4xl text-center text-white">
            {/* Title */}
            {/* <h1 className="mb-6 font-mono text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              Welcome to KrishiSat
            </h1> */}

            {/* Summary */}
            <p className="mb-8 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
              In today's world, many people struggle to access fresh, chemical-free vegetables. Conventional farming methods often rely heavily on chemical fertilizers and pesticides, compromising the quality and safety of the produce. This is where Caax steps in. Caax introduces a hydroponics-based farming method designed to provide users with fresh, healthy, and chemical-free vegetables.

              Join the Caax revolution and work towards a future where fresh, healthy vegetables are available to all, free from the dangers of chemical farming.
            </p>

            {/* Try it Button */}
            {/* <button className="px-6 py-3 text-base font-medium text-black transition duration-300 bg-[#C2F0C2] rounded sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl hover:bg-[#A8DFA8]">
              Try it
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Earth;
