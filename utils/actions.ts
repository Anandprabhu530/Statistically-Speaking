import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "test",
  password: "9944",
  port: 5432,
});

// export const res =
//   }
// });

export const result = async () => {
  "use server";
  const data = pool.query("SELECT * FROM test_data where ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result.rows);
    }
  });
};
