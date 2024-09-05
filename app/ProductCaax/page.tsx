import Link from "next/link";

const ProductCaax = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="absolute inset-0 z-0 flex flex-col justify-left items-left">
          <img
            src="/images/product1.png"
            alt="Product 1"
            className="object-contain h-auto max-w-xs opacity-100 product1 sm:max-w-sm md:max-w-md lg:max-w-lg"
            style={{ height: 'auto', width: '100%', maxWidth: '450px' }}
          />
          <h2 className="subhead drop-shadow-sm">Personal Food Computer-CAAX</h2>

        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/images/toy.png"
            alt="Product 2"
            className="object-contain w-[60%] toy h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
        </div>

        
        <div className="container relative">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h2 className="mb-5 mr-3.5 text-3xl leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Grow your plant digitally with zero pesticides
                </h2>
                {/* <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Grow your plant digitally with zero pesticides
                </p> */}
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <p className="flex items-center px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out rounded-md bg-primary hover:bg-primary/80">
                    Ready to cultivate the future? Connect with us today at
                    <Link href="tel:+917034930530" className="ml-1 underline">
                      +91 7034930530 
                    </Link>
                    <a
                      href="mailto:info@xbosonai.in"
                      aria-label="Gmail"
                      className="ml-2 text-[#CED3F6] hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        className="fill-current"
                      >
                        <path d="M18.5 0H1.5C0.675 0 0 0.675 0 1.5V14.5C0 15.325 0.675 16 1.5 16H18.5C19.325 16 20 15.325 20 14.5V1.5C20 0.675 19.325 0 18.5 0ZM18.5 2L10 8.25L1.5 2H18.5ZM1.5 14.5V4.25L10 10.5L18.5 4.25V14.5H1.5Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/caax_ai/"
                      aria-label="Instagram"
                      className="ml-2 text-[#CED3F6] hover:text-primary"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current"
                      >
                        <path d="M9 3.3C6.24 3.3 4 5.54 4 8.3c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.76-2.24-5-5-5zm0 8.5c-1.95 0-3.5-1.55-3.5-3.5s1.55-3.5 3.5-3.5 3.5 1.55 3.5 3.5-1.55 3.5-3.5 3.5zM15.5 2H2.5C1.12 2 0 3.12 0 4.5v11C0 16.88 1.12 18 2.5 18h13c1.38 0 2.5-1.12 2.5-2.5V4.5C18 3.12 16.88 2 15.5 2zm0 15h-13v-11h13v11z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/x-boson-ai/"
                      aria-label="LinkedIn"
                      className="ml-2 text-[#CED3F6] hover:text-primary"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        className="fill-current"
                      >
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </p>
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
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
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
              cx="191"
              cy="302"
              r="133"
              transform="rotate(114.874 191 302)"
              fill="url(#paint6_linear_25:217)"
            />
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
                y1="-66.1545"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="49.5088"
                y1="257.044"
                x2="181.038"
                y2="387.51"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="211.5"
                y1="230.5"
                x2="286.698"
                y2="503.354"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="113.5"
                y1="180.5"
                x2="174.773"
                y2="471.956"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default ProductCaax;