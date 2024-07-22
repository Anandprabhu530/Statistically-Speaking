import { Chart_Component } from "../components/Chart_Component";

export default async function page() {
  // const chartData = [
  //   { location: "Bangalore", location_count: "8264" },
  //   { location: "Hyderabad", location_count: 4467 },
  //   { location: "New Delhi", location_count: 4176 },
  //   { location: "Chennai", location_count: 2458 },
  //   { location: "Pune", location_count: 2134 },
  //   { location: "Mumbai", location_count: "749" },
  //   { location: "Kolkata", location_count: "178" },
  //   { location: "Madhya Pradesh", location_count: "155" },
  //   { location: "Kerala", location_count: "108" },
  //   { location: "Jaipur", location_count: "81" },
  // ];
  const chartData = await fetch("http://localhost:3000/api/dashboard", {
    method: "GET",
    headers: { Accept: "application/json", method: "GET" },
  }).then((res) => res.json());
  chartData.message.map(
    (solodata) => (solodata.location_count = parseInt(solodata.location_count))
  );
  console.log(chartData.message);
  return (
    <div className="w-full h-screen">
      {chartData.length !== 0 && (
        <Chart_Component chartData={chartData.message} />
      )}
    </div>
  );
}
