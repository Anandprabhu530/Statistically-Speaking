"use client";

const Mapper = ({ indi_data, setInput }: any) => {
  return (
    <button className="border border-neutral-400 shadow-lg p-2 rounded-xl lg:rounded-md cursor-pointer">
      {indi_data}
    </button>
  );
};

export default Mapper;
