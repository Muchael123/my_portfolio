
import { MdOutlineCalendarMonth } from "react-icons/md";


function SchoolCard() {
  return (
    <div className="border-[1px] p-2 rounded-xl shadow-xl border-gray-300">
      
      <h4 className="font-semibold text-lg md:text-xl">
        Bachelor of Science (BSc)
      </h4>
      <p className="font-semibold">Information Technology</p>
      <p>Masinde Muliro University</p>
      <p className="flex flex-row gap-3 items-center font-light">
        {" "}
        <MdOutlineCalendarMonth /> 2021 - 2025
      </p>
    </div>
  );
}

export default SchoolCard