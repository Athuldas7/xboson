import { AdvicorsCaax } from "@/types/advicorsCaax";

interface SingleAdvicorCaaxrProps {
    advisorsCaaxData : AdvicorsCaax;
}

const SingleAdvicorCaax: React.FC<SingleAdvicorCaaxrProps> = ({ advisorsCaaxData }) => {
  return (
    <div className="text-center">
      <img
        src={advisorsCaaxData.image}
        alt={advisorsCaaxData.name}
        className="object-cover w-32 h-32 mx-auto rounded-full team"
      />
      <h3 className="mt-4 text-xl font-semibold">{advisorsCaaxData.name}</h3>
      <p className="text-gray-500">{advisorsCaaxData.designation}</p>
    </div>
  );
};

export default SingleAdvicorCaax;
