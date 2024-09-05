import { AdvicorsKrishisat } from "@/types/advicorsKrishisat";

interface SingleAdvicorKrishisatProps {
    advisorsKrishisatData : AdvicorsKrishisat;
}

const SingleAdvicorKrishisat: React.FC<SingleAdvicorKrishisatProps> = ({ advisorsKrishisatData }) => {
  return (
    <div className="text-center">
      <img
        src={advisorsKrishisatData.image}
        alt={advisorsKrishisatData.name}
        className="object-cover w-32 h-32 mx-auto rounded-full team"
      />
      <h3 className="mt-4 text-xl font-semibold">{advisorsKrishisatData.name}</h3>
      <p className="text-gray-500">{advisorsKrishisatData.designation}</p>
    </div>
  );
};

export default SingleAdvicorKrishisat;
