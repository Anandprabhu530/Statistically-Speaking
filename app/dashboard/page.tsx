"use client";

import { useEffect, useState } from "react";
import { Chart_Component } from "../components/Chart_Component";
import Navbar from "../components/Navbar";

const chart_color = [
  "var(--color-chrome)",
  "var(--color-safari)",
  "var(--color-firefox)",
  "var(--color-edge)",
  "var(--color-other)",
];

const Dashboard = () => {
  const [Salarydata, setSalarydata] = useState<any>();
  const [Locationdata, setLocationdata] = useState<any>();
  const [Roledata, setRoledata] = useState<any>();
  const [Employementdata, setEmployementdata] = useState<any>();
  const [CompanyData, setCompanyData] = useState<any>();
  useEffect(() => {
    const res = async () => {
      const Locationdata_fetch = await fetch(
        "https://statistically-speaking.vercel.app/api/dashboard",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            method: "POST",
            data: "Location_data",
          },
        }
      ).then((res) => res.json());

      Locationdata_fetch.message.map((solodata: any) => {
        solodata.location_count = parseInt(solodata.location_count);
      });
      setLocationdata(Locationdata_fetch);

      const Roledata_fetch = await fetch(
        "https://statistically-speaking.vercel.app/api/dashboard",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            method: "POST",
            data: "Role_data",
          },
        }
      ).then((res) => res.json());

      Roledata_fetch.message.map((solodata: any) => {
        solodata.fill = "#" + Math.floor(Math.random() * 16777215).toString(16);
        solodata.roles_count = parseInt(solodata.roles_count);
      });
      setRoledata(Roledata_fetch);
      const Employementdata_fetch = await fetch(
        "https://statistically-speaking.vercel.app/api/dashboard",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            method: "POST",
            data: "Employement_data",
          },
        }
      ).then((res) => res.json());

      Employementdata_fetch.message.map((solodata: any) => {
        solodata.employement_count = parseInt(solodata.employement_count);
      });

      const Salarydata_fetch = await fetch(
        "https://statistically-speaking.vercel.app/api/dashboard",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            method: "POST",
            data: "Salary_data",
          },
        }
      ).then((res) => res.json());

      const CompanyData_fetch = await fetch(
        "https://statistically-speaking.vercel.app/api/dashboard",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            method: "POST",
            data: "Company_vs_job",
          },
        }
      ).then((res) => res.json());

      CompanyData_fetch.message.map((solodata: any, index: number) => {
        solodata.fill = chart_color[index];
      });

      Salarydata_fetch.message.map((solodata: any) => {
        solodata.average_salary = Math.floor(solodata.average_salary);
      });

      Employementdata_fetch.message.map((solodata: any, index: number) => {
        solodata.fill = chart_color[index];
      });

      setEmployementdata(Employementdata_fetch);
      setSalarydata(Salarydata_fetch);
      setCompanyData(CompanyData_fetch);
    };
    res();
  }, []);
  return (
    <div className="w-full h-screen">
      <Navbar check={false} />
      {Salarydata && Salarydata.message.length !== 0 && (
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
};

export default Dashboard;
