"use client";

import { Command_GenAI } from "@/utils/ai";
import { useEffect, useRef, useState } from "react";

const InputBox = () => {
  const [input, setInput] = useState("");
  const [chatwindow, setChatwindow] = useState(false);
  const textref = useRef(null);
  const handlechange = (event: any) => {
    setInput(event.target.value);
  };

  const handlesubmit = async () => {
    const data = await Command_GenAI(input);
    console.log(data);
  };

  useEffect(() => {
    const height = textref.current.scrollHeight;
    textref.current.style.height = `${Math.min(height, 100)}px`;
  }, [input]);

  return (
    <div>
      <div className="flex items-center justify-center border-2 border-green-500 pt-48">
        <div className="flex flex-col">
          <div className="text-xl font-semibold pb-10 text-center">
            Chat with you Data
          </div>
          <div className="border border-neutral-400 rounded-md p-4 w-[40rem]">
            <textarea
              className="py-2 pr-2 bg-transparent w-full outline-none resize-none"
              placeholder="Ask anything"
              onChange={handlechange}
              value={input}
              ref={textref}
            />
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="font-semibold">Hello</div>
                <div className="text-neutral-600 font-semibold">
                  View Command
                </div>
              </div>
              <div className="bg-neutral-200 p-2 rounded-md cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                  onClick={handlesubmit}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
