import React, { ReactNode, useContext } from "react";
import { Theme, ThemeContext } from "../../context/ThemeContext";

interface ItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Item: React.FC<ItemProps> = ({ icon, title, description }) => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === Theme.Dark ? "text-white" : "text-slate-600";
  const bgColor = theme === Theme.Dark ? "bg-gray-800" : "bg-slate-100";

  return (
    <div
      className={`p-2 rounded-2xl border-gray-400 border-[1px] flex flex-col items-center text-center ${bgColor} ${textColor}`}
    >
      <div className="text-lg">{icon}</div>
      <h2 className="font-semibold ">{title}</h2>
      <p className="font-ligt text-sm">{description}</p>
    </div>
  );
};

export default Item;
