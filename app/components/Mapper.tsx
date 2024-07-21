"use client";

const Mapper = ({ indi_data, setInput }: any) => {
  return (
    <a
      className="border border-neutral-400 shadow-lg p-2 rounded-md cursor-pointer"
      onClick={() => {
        console.log("Clicked");
        setInput(indi_data);
      }}
    >
      {indi_data}
    </a>
  );
};

export default Mapper;
