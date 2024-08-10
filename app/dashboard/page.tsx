import { Chart_Component } from "../components/Chart_Component";
import Navbar from "../components/Navbar";

const chart_color = [
  "var(--color-chrome)",
  "var(--color-safari)",
  "var(--color-firefox)",
  "var(--color-edge)",
  "var(--color-other)",
];

export default async function page() {
  const Locationdata = await fetch("http://localhost:3000/api/dashboard", {
    method: "POST",
    headers: {
      Accept: "application/json",
      method: "POST",
      data: "Location_data",
    },
  }).then((res) => res.json());

  Locationdata.message.map((solodata: any) => {
    solodata.location_count = parseInt(solodata.location_count);
  });

  const Roledata = await fetch("http://localhost:3000/api/dashboard", {
    method: "POST",
    headers: { Accept: "application/json", method: "POST", data: "Role_data" },
  }).then((res) => res.json());

  Roledata.message.map((solodata: any) => {
    solodata.fill = "#" + Math.floor(Math.random() * 16777215).toString(16);
    solodata.roles_count = parseInt(solodata.roles_count);
  });

  const Employementdata = await fetch("http://localhost:3000/api/dashboard", {
    method: "POST",
    headers: {
      Accept: "application/json",
      method: "POST",
      data: "Employement_data",
    },
  }).then((res) => res.json());

  Employementdata.message.map((solodata: any) => {
    solodata.employement_count = parseInt(solodata.employement_count);
  });

  const Salarydata = await fetch("http://localhost:3000/api/dashboard", {
    method: "POST",
    headers: {
      Accept: "application/json",
      method: "POST",
      data: "Salary_data",
    },
  }).then((res) => res.json());

  const CompanyData = await fetch("http://localhost:3000/api/dashboard", {
    method: "POST",
    headers: {
      Accept: "application/json",
      method: "POST",
      data: "Company_vs_job",
    },
  }).then((res) => res.json());

  CompanyData.message.map((solodata: any, index: number) => {
    solodata.fill = chart_color[index];
  });

  Salarydata.message.map((solodata: any) => {
    solodata.average_salary = Math.floor(solodata.average_salary);
  });
  Employementdata.message.map((solodata: any, index: number) => {
    solodata.fill = chart_color[index];
  });

  return (
    <div className="w-full h-screen">
      <Navbar check={false} />
      {Salarydata.message.length !== 0 && (
        <Chart_Component
          Locationdata={Locationdata.message}
          Salarydata={Salarydata.message}
          Roledata={Roledata.message}
          Employementdata={Employementdata.message}
          CompanyData={CompanyData.message}
        />
      )}
    </div>
  );
}
