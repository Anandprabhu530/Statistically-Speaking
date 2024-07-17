const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const describe = async () => {
  console.log("Entered Fine-tuning");
  const res =
    await model.generateContent(`I have a postgresql database with 1 table. The details are
    table name is test_data
    the 7 columns are 
    company VARCHAR(250): name of company.
    job VARCHAR(250): Name of job.
    salary INT: salary for the job per year.
    employement VARCHAR(250): Type of employment,Full-time,Intern, Contractor.
    Location VARCHAR(250): Location of job.
    roles VARCHAR(50): In domain they work.(eg. Andriod, IOS, Web, Java etc).`);
  const response = await res.response;
  const text = response.candidates[0].content.parts[0].text;
  console.log(text);
  return text;
};

let firsttime = true;
export const Command_GenAI = async (input: string) => {
  console.log("Entered AI function");
  if (firsttime) {
    const get_data = await describe();
    if (!get_data) {
      return "Not good";
    }
    firsttime = false;
  }
  const prompt = `Give me the correct sql code for obtaining the result for given input below. the table_name is test_data
                    Input:${input}
                    Give me the command as text for the output. Strictly no additional words. Only command no matter what the input is.`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log("Exited AI Function");
  console.log(response.text());
  return response;
};
