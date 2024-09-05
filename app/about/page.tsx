// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import AdvisorCaax from "@/components/AdvicorsCaax";
import AdvisorKrishisat from "@/components/AdvicorsKrishisat";
import Incubator from "@/components/Incubators";

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Us"
        description="At X Boson Ai, we are leading the way in transforming agriculture with our innovative technology. Introducig Caax, our state-of-the art digital agricultural solution. With Caax, you can cultivate fresh vegetable and leafy plants at home effortlessly. Monitor and control environmental factors remote for optimal growth. Gain real time insights and make informed decisions. Embrace sustainability and reduce wastage.CaaX is user-friendly and adaptable for all farmers. Join us in revolutionizing farming."
      /> */}
      <Incubator/>
      <AdvisorCaax/>
      <AdvisorKrishisat/>
      <Team/>
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
