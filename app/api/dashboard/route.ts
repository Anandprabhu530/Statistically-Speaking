import { result } from "@/utils/actions";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const headersList = headers();
  const _data = headersList.get("data");
  if (_data === "Location_data") {
    const query_call = await result(
      `SELECT location, COUNT(*) AS location_count FROM test_data GROUP BY location ORDER BY location_count DESC;`
    );
    return NextResponse.json({ message: query_call });
  }
  if (_data === "Role_data") {
    const query_call = await result(
      `SELECT roles, COUNT(*) AS roles_count FROM test_data GROUP BY roles ORDER BY roles_count DESC;`
    );
    return NextResponse.json({ message: query_call });
  }
  if (_data === "Employement_data") {
    const query_call = await result(
      `SELECT employement, COUNT(*) AS employement_count FROM test_data GROUP BY employement ORDER BY employement_count DESC;`
    );
    return NextResponse.json({ message: query_call });
  }
  if (_data === "Salary_data") {
    const query_call = await result(
      `SELECT CASE WHEN salary < 500000 THEN '< 5,00,000' WHEN salary >= 500000 AND salary < 700000 THEN '5,00,000 - 7,00,000' ELSE '> 7,00,000'END AS salary_range, COUNT(*) AS number_of_jobs FROM test_data GROUP BY salary_range ORDER BY salary_range;`
    );
    return NextResponse.json({ message: query_call });
  }
}
