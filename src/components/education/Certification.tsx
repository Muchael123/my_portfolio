import { MdOutlineCalendarMonth } from "react-icons/md";

function Certification(cert: { title: string, institution: string, date: string }) {
  return (
    <div className="border-[1px] p-2 rounded-xl shadow-xl border-gray-300 mb-5">
      
      <div>
        <h4 className="font-semibold text-lg md:text-xl">
            {cert.title}
              </h4>
              <p>{cert.institution}</p>
                <p className="flex flex-row gap-3 items-center font-light">
                  <MdOutlineCalendarMonth /> {cert.date}
                </p>
      </div>
    </div>
  );
}

export default Certification;
