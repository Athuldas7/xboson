import { Incubator as IncubatorType } from "@/types/incubator";
import SectionTitle from "../Common/SectionTitle";
import SingleIncubator from "./SingleIncubator"; 

const incubatorData: IncubatorType[] = [
  {
    id: 1,
    name: "Maker Village",
    image: "/images/incubator/Makervillage.jpg",
  },
  {
    id: 2,
    name: "KAU RABI",
    image: "/images/incubator/rabi.jpeg",
  },
  {
    id: 3,
    name: "KSUM",
    image: "/images/incubator/ksum.jpg",
  },
  {
    id: 4,
    name: "Digital University Kerala",
    image: "/images/incubator/duk.jpg",
  },
  {
    id: 5,
    name: "NAARM",
    image: "/images/incubator/naarm.jpeg",
  },
  {
    id: 6,
    name: "ICAR",
    image: "/images/incubator/ikar.jpeg",
  },
];

const Incubator = () => {
  return (
    <section className="relative z-10 mt-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Incubators"
          paragraph="CAAX and KrishiSat"
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {incubatorData.map((data) => (
            <SingleIncubator key={data.id} incubatorData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Incubator;
