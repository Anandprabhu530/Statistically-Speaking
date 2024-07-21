// import { result } from "@/utils/actions";
import { NextRequest } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { result } from "@/utils/actions";

const model2 = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
});

export async function POST(request: NextRequest) {
  const { input } = await request.json();
  const prompt = `Give me the correct sql code for obtaining the result for given input below. the table_name is test_data.
                    I have postgresql database with 1 table. tablele name is test_data,
                    the 7 columns are
                    company VARCHAR(250): name of company.
                    job VARCHAR(250): Name of job.
                    salary INT: salary for the job per year.
                    employement VARCHAR(250): Type of employment,Full-time,Intern, Contractor.
                    Location VARCHAR(250): Location of job.
                    roles VARCHAR(50): In domain they work.(eg. Andriod, IOS, Web, Java etc).. Output in the below format only.
                    {
                      query:"Command for the given input here without any markdown. Strictly no markdown",
                      recommendation: "Additional questions that can be asked.Given an array as output for length of 4",
                      query_explanation: "Explanation of the given query",
                      query_markdown:"Query in markdown format with a keyword in seperate line."
                    }
                    Input:${input}
                    Give me the command as text for the output. Strictly no additional words. Only command no matter what the input is.`;
  const response = await model2.invoke(prompt);
  const data_ds = response.content.slice(8, -4);
  const output = await JSON.parse(data_ds as string);
  const exec_query = output.query;
  const query_call = await result(exec_query);
  output.query_result = query_call;
  console.log("Exited AI Function");
  return Response.json({ response: output });
}
