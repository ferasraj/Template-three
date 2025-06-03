import TeamCards from "./TeamCards";
import { teamData } from "../assets/assets";

const Team = () => {
  return (
    <section id="team">
      <div className="0 py-primary bg-white ">
        <h2 className="main-title  uppercase">team members</h2>
        <div className="container  ">
          <div className="grid grid-auto-300 gap-10 ">
            {teamData.map((team) => (
              <TeamCards key={team.id} teams={team} />
            ))}
          </div>
        </div>
      </div>
      <div className="spikes relative"></div>
    </section>
  );
};

export default Team;
