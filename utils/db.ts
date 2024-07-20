import pg from "pg";
const { Pool } = pg;

// const pool = new Pool({
//   host: "localhost",
//   user: "Postgres",
//   database: "test_data",
//   password: "9944",
//   port: 5432,
// });

// export const res = pool.query("SELECT * FROM test_data", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

export const res = async () => {
  "use server";
};
