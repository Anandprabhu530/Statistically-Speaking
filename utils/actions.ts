import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "test",
  password: "9944",
  port: 5432,
});

export async function result(input: any) {
  const client = await pool.connect();
  const queryResult = await client.query(input);
  return queryResult.rows;
}
