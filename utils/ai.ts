import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { z } from "zod";
import { result } from "./actions";
// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const describe = async () => {
  console.log("Entered Fine-tuning");
  const res =
    await model2.invoke(`I have a postgresql database with 1 table. The details are
    table name is test_data
    the 7 columns are 
    company VARCHAR(250): name of company.
    job VARCHAR(250): Name of job.
    salary INT: salary for the job per year.
    employement VARCHAR(250): Type of employment,Full-time,Intern, Contractor.
    Location VARCHAR(250): Location of job.
    roles VARCHAR(50): In domain they work.(eg. Andriod, IOS, Web, Java etc).`);
  const text = res;
  return text;
};

const model2 = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
});

let firsttime = true;
export const Command_GenAI = async (formData: FormData) => {
  "use server";
  console.log("Entered AI function");
  const input = formData.get("text_data");
  const ressde = { input: input };

  console.log(data);

  // if (firsttime) {
  //   const get_data = await describe();
  //   if (!get_data) {
  //     return "Not good";
  //   }
  //   firsttime = false;
  // }
  // const prompt = `Give me the correct sql code for obtaining the result for given input below. the table_name is test_data.
  //                   I have postgresql database with 1 table. tablele name is test_data,
  //                   the 7 columns are
  //                   company VARCHAR(250): name of company.
  //                   job VARCHAR(250): Name of job.
  //                   salary INT: salary for the job per year.
  //                   employement VARCHAR(250): Type of employment,Full-time,Intern, Contractor.
  //                   Location VARCHAR(250): Location of job.
  //                   roles VARCHAR(50): In domain they work.(eg. Andriod, IOS, Web, Java etc).. Output in the below format only.
  //                   {
  //                     cmd:"Command for the given input here without any markdown. Strictly no markdown"
  //                     recommendation: "Additional question that can be asked"
  //                   }
  //                   Input:${input}
  //                   Give me the command as text for the output. Strictly no additional words. Only command no matter what the input is.`;
  // const response = await model2.invoke(prompt);
  // const data_ds = response.content.slice(8, -4);
  // const output = await JSON.parse(data_ds);
  // const exec_query = output.cmd;
  // console.log(exec_query);
  // const query_call = result(exec_query);
  // console.log("Exited AI Function");
  // return query_call;
};
