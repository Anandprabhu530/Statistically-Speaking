import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "test",
  password: "9944",
  port: 5432,
});

export async function result(input) {
  "use server";
  const data = pool.query(input, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result.rows);
    }
  });
}
