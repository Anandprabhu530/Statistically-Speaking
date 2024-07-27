"use client";
import { ColumnDef } from "@tanstack/react-table";

import { useEffect, useRef, useState } from "react";
import { DataTable } from "./DataTable";
import ReactMarkdown from "react-markdown";
import Mapper from "./Mapper";

const InputBox = () => {
  const [input, setInput] = useState("");
  const [first, setFirst] = useState(false);
  const [chat, setChat] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const textref = useRef(null);

  //Function to track input change
  const handlechange = (event: any) => {
    setInput(event.target.value);
  };

  //Rearranging the data to display it in table-form
  let columns: ColumnDef<any>[];

  //Submit funtion
  const handlesubmit = async () => {
    //Checks for the first time submission
    if (first) {
      setFirst(false);
    }
    setChat((prev: any) => [...prev, [input]]);
    setLoading(true);

    const data = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { Accept: "application/json", method: "POST" },
      body: JSON.stringify({ input: input }),
    }).then((res) => res.json());
    const columnnames = Object.keys(data.response.query_result[0]);
    let arr: any = [];
    for (let i = 0; i < columnnames.length; i++) {
      const name =
        columnnames[i].slice(0, 1).toUpperCase() + columnnames[i].slice(1);
      arr.push({ accessorKey: columnnames[i], header: name });
    }
    columns = arr;
    data.response.columns = columns;
    setChat((prev: any) => [...prev, data.response]);
    console.log(chat);
    setLoading(false);
    setInput("");
  };

  useEffect(() => {
    console.log(chat, "from use effect");
  }, [chat]);

  useEffect(() => {
    // @ts-ignore
    textref.current.focus();
  }, []);

  useEffect(() => {
    // @ts-ignore
    const height = textref.current.scrollHeight;
    // @ts-ignore
    textref.current.style.height = `${Math.min(height, 100)}px`;
  }, [input]);

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full lg:w-[40rem] pb-[180px] pt-[60px]">
        {chat.length !== 0 ? (
          <div>
            {chat.map((solodata: any, index: number) => (
              <div key={index} className="">
                {index % 2 === 0 ? (
                  <div className="text-lg font-semibold pl-6 py-4 rounded-t-xl shadow-xl bg-neutral-100 border-t border-r border-l border-neutral-300">
                    {chat[index]}
                    {loading && (
                      <div className="py-4 pr-6">
                        <div className="text-xl text-neutral-400 h-[15rem] w-full border border-neutral-300 rounded-xl flex justify-center items-center">
                          Loading...
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 pt-2 rounded-b-xl shadow-xl mb-8 bg-neutral-100 border-b border-l border-r border-neutral-300">
                    {chat.length >= 2 && (
                      <div>
                        <div className="rounded-xl bg-neutral-900 text-white p-2">
                          <ReactMarkdown>
                            {chat[index].query_markdown}
                          </ReactMarkdown>
                        </div>
                        <div className="font-semibold pt-4 pb-1">
                          Query Explanation
                        </div>
                        <div className="pb-4 text-base">
                          {chat[index].query_explanation}
                        </div>
                        <DataTable
                          columns={chat[index].columns}
                          data={chat[index].query_result}
                        />
                        {
                          <div>
                            <div className="py-4 font-semibold">
                              Additional Recommendations
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {chat[index].recommendation.map(
                                (indi_data: any, ind: number) => (
                                  <Mapper
                                    indi_data={indi_data}
                                    key={ind}
                                    setInput={setInput}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        }
                      </div>
                    )}
                  </div>
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
      <div className="fixed w-full flex items-end h-screen justify-center">
        <div className="border lg:border-neutral-400 border-t-neutral-400 rounded-xl p-4 pt-2 lg:w-[40rem] absolute bg-white mt-4 lg:my-4 w-full">
          <textarea
            className="py-2 pr-2 bg-transparent w-full outline-none resize-none"
            placeholder="Ask anything"
            onChange={handlechange}
            value={input}
            ref={textref}
          />
          <div className="flex justify-between">
            <div></div>
            <div className="bg-neutral-200 p-2 rounded-xl  cursor-pointer">
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
        <div className="w-full pt-5 bg-white">{""}</div>
      </div>
    </div>
  );
};

export default InputBox;
