const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

export const Command_GenAI = async (input: string) => {
  console.log("Entered AI function");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `I will define a database schema below. Give me the correct sql code for obtaining the result for given input below.
                    There are two tables. Table1 is named customer, Table2 is named product. customer table primary key is customer_id,
                    product table primary key is product_id. The product table has a foreign key named foreign_customer refered to the customer table .
                    
                    Input:${input}
                    Give me the command as text for the output. Strictly no additional words. Only command no matter what the input is.`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log("Exited AI Function");
  return response;
};
