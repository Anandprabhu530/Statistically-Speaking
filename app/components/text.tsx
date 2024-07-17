"use client";

import { Command_GenAI } from "@/utils/ai";
import { useEffect, useRef, useState } from "react";

const Testfunction = () => {
  const [input, setInput] = useState("");
  const [first, setFirst] = useState(false);
  const [chat, setChat] = useState<String[]>([]);
  const textref = useRef(null);
  //   const handlechange = (event: any) => {
  //     setInput(event.target.value);
  //   };

  //   const handlesubmit = async () => {
  //     if (first) {
  //       setFirst(false);
  //     }
  //     setChat([...chat, input]);
  //     const data = await Command_GenAI(input);
  //     console.log(data);
  //   };

  //   useEffect(() => {
  //     const height = textref.current.scrollHeight;
  //     textref.current.style.height = `${Math.min(height, 100)}px`;
  //   }, [input]);

  return (
    <div className="w-[40rem] pb-[180px] ">
      {chat.length !== 0 ? (
        <div>
          {chat.map((solodata, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <div className="text-lg font-semibold pb-6">{solodata}</div>
              ) : (
                <div>{solodata}</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="text-3xl font-semibold pb-10 text-center pt-40">
            Chat with your Data
          </div>
        </div>
      )}
    </div>
  );
};

export default Testfunction;
