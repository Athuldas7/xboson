import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="absolute inset-0 z-0 flex justify-left items-left">
      <img
        src="/images/toy.png"
        alt="Product 1"
        className="object-contain opacity-100 h-65 w-60 product1 flying-toy"
        style={{ height: '400px', width: '400px' }}
    
      />
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center ">
      <  img
          src="/images/product1.png"
          alt="Product 2"
          className="object-contain mr-2 opacity-100 w-60 h-100 product2"
        />
      </div>
    
        <div className="container relative">
          
          
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Creating Safe and Sustainable AI Agri-Food models.
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Your source for AI models revolutionizing agriculture,
                  empowering users to build sustainable applications and
                  fostering a vibrant community.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="http://caax-website.42web.io/frontend_caax/caax_template/index.html"
                    target="_blank"
                    className="px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out rounded-md bg-primary hover:bg-primary/80"
                  >
                    Try our CAAX AI Models for free🚀
                  </Link>
                  <Link
                    href="https://github.com/X-Boson-AI"
                    target="_blank"
                    className="px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out rounded-md bg-black/20 hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Follow us on GitHub 🌟
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            /> */}
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.908 148.37 113.84C206.306 173.34 265.682 165.813 298.904 150.097C332.126 134.382 341.184 109.421 348.11 96.3389C353.462 85.8226 374.337 65.2328 395.329 79.2151C416.32 93.1974 396.548 125.448 388.728 138.004C380.907 150.561 362.177 176.522 320.329 189.404C278.482 202.286 204.962 204.509 137.191 143.128C93.4594 104.765 35.163 115.049 11.7918 119.046C-6.14998 122.225 -22.1293 108.228 -6.86668 94.9534C0.146742 89.1821 4.39962 73.8915 5.88928 72.3303Z"
              fill="url(#paint0_linear_25:218)"
            />
            <path
              d="M200.886 37.282C184.8 30.7636 148.213 39.6121 132.749 65.4859C131.54 67.5455 129.612 66.4846 130.607 64.3268C146.902 28.5283 189.626 18.4733 202.358 24.0056C204.597 24.9895 203.948 36.0581 200.886 37.282Z"
              fill="url(#paint1_radial_25:218)"
            />
            <path
              opacity="0.6"
              d="M106.857 95.5871C112.835 87.375 136.855 75.056 160.692 96.3385"
              stroke="url(#paint2_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="129.521"
              cy="116.521"
              r="59.8622"
              transform="rotate(114.874 129.521 116.521)"
              stroke="url(#paint3_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="305.5"
                y1="15"
                x2="74.5"
                y2="220.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(194 31) rotate(25.6539) scale(29.3045)"
              >
                <stop stopColor="#3056D3" />
                <stop offset="1" stopColor="#3056D3" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="106.857"
                y1="86.5997"
                x2="159.377"
                y2="92.9632"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0" />
                <stop offset="1" stopColor="#97ABFF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="129.521"
                y1="56.1588"
                x2="129.521"
                y2="176.883"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
