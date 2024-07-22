import { result } from "@/utils/actions";
import { NextResponse } from "next/server";

export async function GET() {
  const query_call = await result(
    `SELECT location, COUNT(*) AS location_count FROM test_data GROUP BY location ORDER BY location_count DESC;`
  );
  return NextResponse.json({ message: query_call });
}
