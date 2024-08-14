"use client";

import Image from "next/image";
import React, { useRef } from "react";

const ProductDetails: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const product = {
    title: "CAAX - Mobile Farm",
    description:
      "CAAX is a pioneering aeroponics-based modular farming product that redefines plant cultivation. Powered by the STM32MP1 series development board and custom-built embedded Linux, CAAX represents a leap forward in agriculture. At its core, it relies on a state-of-the-art electronics control unit, backed by precision control and scalability, to revolutionize the way we nurture and grow plants. CAAX represents a groundbreaking solution in the world of agriculture. Powered by the STM32MP1 series development board and custom-built embedded Linux, our aeroponics-based modular farming system offers a host of advantages. With precision control at its core, it ensures optimal plant health and growth, while being inherently resource-efficient. Scalability is a key feature, allowing for seamless expansion and integration of new modules. Data monitoring and analysis capabilities provide valuable insights, and the system can be customized to meet specific crop and environmental needs. CAAX also boasts optimal nutrient delivery, water efficiency, space-saving vertical configurations, year-round cultivation, and the precision control of critical growth parameters. With CAAX, you're not just farming; you're pioneering a sustainable, high-yield agricultural future.",
    imageSrc: "https://raw.githubusercontent.com/X-Boson-AI/Web-Assets/main/c2.png",
    features: [
      {
        title: "Optimal Nutrient Delivery",
        description:
          "CAAX employs aeroponics to provide plants, particularly nutrient-rich leafy greens, with a highly oxygenated nutrient mist. This ensures efficient nutrient uptake by plant roots, promoting faster growth and higher yields.",
      },
      {
        title: "Water Efficiency",
        description:
          "Aeroponics significantly reduces water usage compared to traditional soil-based farming, as nutrient solutions are recirculated, reducing water waste.",
      },
      {
        title: "Space Efficiency",
        description:
          "Our modular systems can be configured vertically, making efficient use of space. This is especially valuable for urban and indoor farming, where space is limited.",
      },
      {
        title: "Year-Round Cultivation",
        description:
          "Controlled environments in aeroponics systems enable year-round crop production, independent of external weather conditions, providing a continuous supply of immune-boosting leafy greens.",
      },
      {
        title: "Precision Control",
        description:
          "Parameters like temperature, humidity, nutrient concentration, and light can be precisely controlled, creating ideal growing conditions for your crops.",
      },
      {
        title: "Enhancing Immune Health",
        description:
          "Immunocompromised individuals have weakened immune systems, leaving them susceptible to infections and less responsive to vaccines. CAAX provides a valuable solution by enabling the cultivation of nutrient-rich leafy vegetables, essential for bolstering the immune system of these individuals.",
      },
    ],
  };

  return (
    <section className="flex flex-col lg:flex-row items-start pt-[150px] pb-[120px] lg:mx-20 xl:mx-24">
      <div
        className="lg:w-2/3 overflow-y-auto max-h-[80vh] pr-8"
        ref={scrollRef}
      >
        <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          {product.title}
        </h2>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
          {product.description}
        </p>
        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Key Features of CAAX - Polyhouse Hardware:
        </h3>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
          CAAX not only revolutionizes agriculture but also contributes to the
          well-being of individuals, especially those with compromised immune
          systems. By providing a consistent supply of leafy greens, CAAX plays
          a crucial role in creating a healthier and more resilient society.
        </p>
        <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
          <p className="text-center text-base font-medium italic text-body-color">
            Join us in this journey towards a more sustainable and
            technologically advanced agricultural future.
          </p>
        </div>
        <ul className="mb-10 list-inside list-disc text-body-color px-6 lg:px-10 xl:px-12">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
            >
              <span className="font-bold dark:text-white">
                {feature.title}:{" "}
              </span>
              {feature.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/3 flex-shrink-0 mt-10 lg:mt-40 lg:ml-10 xl:ml-30">
        <Image
          src={product.imageSrc}
          alt="Product Image"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ProductDetails;
