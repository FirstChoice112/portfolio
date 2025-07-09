import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "border-b border-blue-400" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;

//bg-gradient-to-br from-blue-500 via-purple-400 to-green-500
