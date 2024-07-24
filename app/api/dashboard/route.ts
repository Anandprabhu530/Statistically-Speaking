import { result } from "@/utils/actions";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const headersList = headers();
  const _data = headersList.get("data");
  if (_data === "Location_data") {
    const query_call = await result(
      `SELECT location, COUNT(*) AS location_count FROM test_data GROUP BY location ORDER BY location_count;`
    );
    console.log(query_call, "from api route");
    return NextResponse.json({ message: query_call });
  }
  if (_data === "Role_data") {
    const query_call = await result(
      `SELECT roles, COUNT(*) AS roles_count FROM test_data GROUP BY roles ORDER BY roles_count DESC;`
    );
    console.log(query_call, "from api route");

    return NextResponse.json({ message: query_call });
  }
  if (_data === "Employement_data") {
    const query_call = await result(
      `SELECT employement, COUNT(*) AS employement_count FROM test_data GROUP BY employement ORDER BY employement_count DESC;`
    );
    console.log(query_call, "from api route");

    return NextResponse.json({ message: query_call });
  }
  if (_data === "Salary_data") {
    const query_call = await result(
      `SELECT location, COUNT(CASE WHEN salary < 300000 THEN 1 END) AS Less_than_300000, COUNT(CASE WHEN salary BETWEEN 300000 AND 399999 THEN 1 END) AS "300000-399999", COUNT(CASE WHEN salary BETWEEN 400000 AND 499999 THEN 1 END) AS "400000-499999", COUNT(CASE WHEN salary BETWEEN 500000 AND 599999 THEN 1 END) AS "500000-599999", COUNT(CASE WHEN salary BETWEEN 600000 AND 699999 THEN 1 END) AS "600000-699999", COUNT(CASE WHEN salary BETWEEN 700000 AND 799999 THEN 1 END) AS "700000-799999", COUNT(CASE WHEN salary >= 800000 THEN 1 END) AS Greater_than_800000 FROM test_data GROUP BY location;`
    );
    console.log(query_call, "from api route");
    return NextResponse.json({ message: query_call });
  }
}
