import { TeamMember } from "@/types/teamMember";

interface SingleTeamMemberProps {
  teamMember: TeamMember;
}

const SingleTeamMember: React.FC<SingleTeamMemberProps> = ({ teamMember }) => {
  return (
    <div className="text-center">
      <img
        src={teamMember.image}
        alt={teamMember.name}
        className="object-cover w-32 h-32 mx-auto rounded-full team"
      />
      <h3 className="mt-4 text-xl font-semibold">{teamMember.name}</h3>
      <p className="text-gray-500">{teamMember.designation}</p>
    </div>
  );
};

export default SingleTeamMember;
