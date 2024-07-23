**Statistically Speaking**

This web application serves as a bridge between human intuition and complex datasets, utilizing the capabilities of Large Language Models (LLMs) to democratize data analysis. By providing a natural language interface, users can effortlessly pose intricate queries about their data, without requiring SQL expertise.

**Installation**

Please ensure that you have Node.js(22.2.0 or above) installed on your machine.

Steps to install

Clone this repository

```https://github.com/Anandprabhu530/Statistically-Speaking.git
    npm install
    npm run dev
```

**Features:**

1.Natural Language Querying: Users can interact with the application using plain language, allowing for intuitive exploration of data.

2.LLM-Driven Data Access: The LLM translates natural language queries into SQL statements, efficiently retrieving relevant data from the underlying database.

3.User-Friendly Interface: A visually appealing and intuitive interface enhances the user experience, making data exploration accessible to a wide audience.
![Project Workflow](https://github.com/Anandprabhu530/Statistically-Speaking/blob/master/image.png)

**How it works**

Query the LLM with any language. LLM will convert that into code and then request to the database.
The retrieved data will be utilized to create charts, diagrams etc..
Then the LLM will follow up with similar suggestion to ask to the database.

**Tech Stack:**

Frontend and backend: Next.js, Shadcn UI
Database: PostgreSQL
LLM: Gemini-1.5-flash

**Future Improvements**
[] - Implement measures to protect sensitive data.
[] - Continuously evaluate and optimize the LLM's performance and accuracy.
[] - Adding additional database support and making it more user friendly to analyze even more data.
