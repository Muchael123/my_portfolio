
import { BsTools } from "react-icons/bs";
import { GiGymBag } from "react-icons/gi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

import Item from "./Item";

function TopCards() {
  return (
    <div className="w-full flex-wrap flex gap-3 ">
          <Item icon={<BsTools />} title="experience" description="3+ yrs experience"    />
          <Item icon={<GiGymBag />} title="projects" description="50+ projects" />
          <Item icon={<BsFillRocketTakeoffFill />} title="Startups" description="5+ startups" />
    </div>
  );
}

export default TopCards