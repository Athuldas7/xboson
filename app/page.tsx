import { Inter } from "@next/font/google";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import ProductD from "@/components/ProductD/ProductDetails";
import Blog from "@/components/Blog"; 
import Contact from "@/components/Contact";

// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import ProductCaax from "@/app/ProductCaax/page";
import Caax from "@/components/Caaxx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Caax/>
      {/* <ProductCaax/> */}
      {/* <Hero /> */}
      {/* Add back or remove components as necessary */}
      {/* <Features /> */}
      <Video />
      {/* <ProductD /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* Website by Euhid Aman */}
      {/* <Pricing /> */}
      <Blog /> 
      {/* <Team/> */}

      
      <Contact />
    </>
  );
}
