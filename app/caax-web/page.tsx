import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  CAAX - Web Platform
                </h2>
                <div>
                  {/* <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-square w-full sm:aspect-[97/97]">
                      <Image
                        src="/images/blog/temp-image.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div> */}
                  <div className="mb-10 w-3/4 overflow-hidden rounded sm:w-full">
                    <div className="relative aspect-[1/1] w-full sm:aspect-[3/4]">
                      <Image
                        src="/images/blog/caax-web2.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Welcome to our cutting-edge platform, where the future of
                    agriculture meets the power of artificial intelligence. We
                    are dedicated to revolutionizing the agricultural landscape
                    through AI innovation. Our platform serves as a hub for a
                    suite of AI models, each designed to tackle specific
                    challenges in agriculture. From precise plant classification
                    to early disease detection, automated plant counting, and
                    sophisticated agricultural question-answering, our platform
                    is a one-stop destination for farmers, researchers, and
                    anyone passionate about agriculture. Additionally, our
                    Generative AI capabilities harness extensive data collected
                    from reputable agricultural universities in India, enabling
                    our AI models to provide insightful and accurate responses
                    to your agricultural queries.
                  </p>

                  {/* <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Our AI Models:
                  </h3>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <a
                        href="https://tailwindcss.com/docs/align-items"
                        className="inline-flex items-stretch font-bold underline dark:text-white "
                      >
                        Plant Classification Model :
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 underline"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                      Accurate plant identification is at your fingertips. Our
                      model can classify a wide range of plants with precision,
                      making it an indispensable tool for farmers and botanists.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <a
                        href="https://tailwindcss.com/docs/align-items"
                        className="inline-flex items-stretch font-bold underline dark:text-white "
                      >
                        Plant Disease Detection :
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 underline"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                      Early detection is key to preventing crop losses. Our AI
                      model excels at identifying diseases in plants, enabling
                      timely intervention and crop protection.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <a
                        href="https://tailwindcss.com/docs/align-items"
                        className="inline-flex items-stretch font-bold underline dark:text-white "
                      >
                        Plant Counting :
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 underline"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                      Automate the labor-intensive task of plant counting. Our
                      model efficiently counts plants in images, saving time and
                      effort in crop management.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <a
                        href="https://tailwindcss.com/docs/align-items"
                        className="inline-flex items-stretch font-bold underline dark:text-white "
                      >
                        Agricultural QA Answering:
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 underline"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                      Have questions about agriculture? Ask our AI model. It
                      leverages generative AI and extensive agricultural data to
                      provide informative and contextually relevant answers to
                      your queries.
                    </li>
                  </ul> */}

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Explore our platform and unlock the potential of AI in
                    agriculture. We're committed to driving innovation and
                    efficiency in farming practices, empowering you with the
                    tools you need for a thriving agricultural future.
                  </p>

                  <Link
                    href="http://caax-website.42web.io/frontend_caax/caax_template/index.html"
                    target="_blank"
                    className="rounded-md bg-primary py-3 px-8 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                  >
                    Checkout our AI Platform 🚀
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
