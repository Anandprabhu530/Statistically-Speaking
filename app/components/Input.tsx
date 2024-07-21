"use client";
import { ColumnDef } from "@tanstack/react-table";

import { useEffect, useRef, useState } from "react";
import { DataTable } from "./DataTable";
import ReactMarkdown from "react-markdown";
import Mapper from "./Mapper";

const InputBox = () => {
  const [input, setInput] = useState("");
  const [first, setFirst] = useState(false);
  const [chat, setChat] = useState<any>([
    ["Top 3 company with highest individual salary"],
    [
      {
        query:
          "SELECT company, MAX(salary) AS highest_salary FROM test_data GROUP BY company ORDER BY highest_salary DESC LIMIT 3",
        query_explanation:
          "This query first groups the data by company and calculates the maximum salary for each company using the MAX() function. Then it orders the results by highest_salary in descending order and limits the output to the top 3 companies.",
        query_markdown:
          "```sql\nSELECT company, MAX(salary) AS highest_salary\nFROM test_data\nGROUP BY company\nORDER BY highest_salary DESC\nLIMIT 3\n```",
        query_result: [
          { company: "Thapar University", highest_salary: 90000000 },
          { company: "OASYS Cybernetics", highest_salary: 10000000 },
          { company: "Koru UX Design", highest_salary: 10000000 },
        ],
        recommendation: [
          "What are the top 5 companies with the highest average salary?",
          "What is the distribution of salaries across different job roles?",
          "Which location has the highest average salary?",
          "What is the average salary for full-time employees?",
        ],
      },
    ],
    ["Top 3 company with highest individual salary"],
    [
      {
        query:
          "SELECT company, MAX(salary) AS highest_salary FROM test_data GROUP BY company ORDER BY highest_salary DESC LIMIT 3",
        query_explanation:
          "This query first groups the data by company and calculates the maximum salary for each company using the MAX() function. Then it orders the results by highest_salary in descending order and limits the output to the top 3 companies.",
        query_markdown:
          "```sql\nSELECT company, MAX(salary) AS highest_salary\nFROM test_data\nGROUP BY company\nORDER BY highest_salary DESC\nLIMIT 3\n```",
        query_result: [
          { company: "Thapar University", highest_salary: 90000000 },
          { company: "OASYS Cybernetics", highest_salary: 10000000 },
          { company: "Koru UX Design", highest_salary: 10000000 },
        ],
        recommendation: [
          "What are the top 5 companies with the highest average salary?",
          "What is the distribution of salaries across different job roles?",
          "Which location has the highest average salary?",
          "What is the average salary for full-time employees?",
        ],
      },
    ],
  ]);
  const [loading, setLoading] = useState(false);
  const textref = useRef(null);

  //change
  const handlechange = (event: any) => {
    setInput(event.target.value);
  };
  let columns: ColumnDef<any>[];
  if (chat.length > 1 && !loading) {
    //const columnnames = Object.keys(chat[chat.length - 1].query_result[0]); Change to this once testing is complete
    const columnnames = Object.keys(chat[chat.length - 1][0].query_result[0]);
    let arr: any = [];
    for (let i = 0; i < columnnames.length; i++) {
      arr.push({ accessorKey: columnnames[i], header: columnnames[i] });
    }
    columns = arr;
  }

  //submit
  const handlesubmit = async () => {
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

    setChat((prev: any) => [...prev, data.response]);
    setLoading(false);
  };

  useEffect(() => {
    console.log(chat, "from use effect");
  }, [chat]);

  useEffect(() => {
    // @ts-ignore
    const height = textref.current.scrollHeight;
    // @ts-ignore
    textref.current.style.height = `${Math.min(height, 100)}px`;
  }, [input]);

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-[40rem] pb-[180px] pt-[60px]">
        {chat.length !== 0 ? (
          <div>
            {chat.map((solodata: any, index: number) => (
              <div key={index} className="">
                {index % 2 === 0 ? (
                  <div className="text-lg font-semibold p-4 rounded-t-lg shadow-xl bg-neutral-100 border-t border-r border-l border-neutral-300">
                    {chat[index]}
                    {loading && (
                      <div className="pt-4">
                        <div className="text-xl text-neutral-400 h-[15rem] w-full border border-neutral-300 rounded-md flex justify-center items-center">
                          Loading...
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 pt-2 rounded-b-lg shadow-xl mb-8 bg-neutral-100 border-b border-l border-r border-neutral-300">
                    {columns && (
                      <div>
                        <div className="rounded-md bg-neutral-900 text-white p-2 ">
                          <ReactMarkdown>
                            {/* {chat[index].query_markdown} -change this also */}
                            {chat[index][0].query_markdown}
                          </ReactMarkdown>
                        </div>
                        <div className="font-semibold pt-4 pb-1">
                          Query Explanation
                        </div>
                        <div className="pb-4 text-base">
                          {chat[index].query_explanation}
                        </div>
                        <DataTable
                          columns={columns}
                          //data={chat[index].query_result} - Change once done
                          data={chat[index][0].query_result}
                        />
                        {/* chat[index].recommendation) - Change once done */}
                        {
                          <div>
                            <div className="py-4 font-semibold">
                              Additional Recommendations
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {chat[index][0].recommendation.map(
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
        <div className="border border-neutral-400 rounded-md p-4 pt-2 w-[40rem] absolute bg-white my-4 ">
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
              <div className="text-neutral-600 font-semibold">View Command</div>
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
        <div className="w-full pt-5 bg-white">{""}</div>
      </div>
    </div>
  );
};

export default InputBox;
