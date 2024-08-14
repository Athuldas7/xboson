import { Inter } from "@next/font/google";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import ProductD from "@/components/ProductD/ProductDetails";
import Blog from "@/components/Blog"; // Ensure this component links correctly to blog details
import Contact from "@/components/Contact";
// Optional Imports
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* Add back or remove components as necessary */}
      {/* <Features /> */}
      <Video />
      <ProductD />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* Website by Euhid Aman */}
      {/* <Pricing /> */}
      <Blog /> {/* This should list blogs and link to the dynamic page */}

      
      <Contact />
    </>
  );
}
