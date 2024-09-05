import Image from 'next/image';

const Space = () => {
  return (
    <>
      <section className="relative w-full h-screen mt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 mt-10">
          <Image
            src="/images/earth.jpg"
            alt="Background Image"
            layout="fill"
            style={{ objectFit: 'cover' }} 
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex items-center justify-center w-full h-full px-4">
          <div className="max-w-4xl text-center text-white">
            {/* <h1 className="mb-6 font-mono text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              Welcome to KrishiSat
            </h1> */}

            <p className="mb-8 text-base font-bold leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
              Coming Soon
            </p>

            {/* <button className="px-6 py-3 text-base font-medium text-black transition duration-300 bg-[#C2F0C2] rounded sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl hover:bg-[#A8DFA8]">
              Try it
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Space;
