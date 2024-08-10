import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function result(input: any) {
  const client = await pool.connect();
  const queryResult = await client.query(input);
  return queryResult.rows;
}
