import { Incubator as IncubatorType } from "@/types/incubator";

interface SingleIncubatorProps {
  incubatorData: IncubatorType;
}

const SingleIncubator: React.FC<SingleIncubatorProps> = ({ incubatorData }) => {
  return (
    <div className="text-center">
      <img
        src={incubatorData.image}
        alt={incubatorData.name}
        className="object-cover w-32 h-32 mx-auto rounded-full team"
      />
      <h3 className="mt-4 text-xl font-semibold">{incubatorData.name}</h3>
    </div>
  );
};

export default SingleIncubator;
