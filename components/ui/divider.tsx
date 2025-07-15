import React from "react";

const Divider = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center mt-7 mb-3">
      <div className="border-t-2 border-b-2 h-2 border-fuchsia-900 flex-grow"></div>
      <span className="px-3 text-fuchsia-100 text-xl font-bold ">
        {name}
      </span>
      <div className="border-t-2 border-b-2 h-2 border-fuchsia-900 flex-grow"></div>
    </div>
  );
};

export default Divider;
