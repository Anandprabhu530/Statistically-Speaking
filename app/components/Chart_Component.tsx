"use client";

import * as React from "react";
import { Label, LabelList, Pie, PieChart } from "recharts";
import { Bar, BarChart, XAxis, CartesianGrid, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const AreaConfig = {
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
  labeling: {
    label: "labeling",
    color: "hsl(var(--chart-3))",
  },
  testing: {
    label: "testing",
    color: "hsl(var(--chart-4))",
  },
  cofusing: {
    label: "cofusing",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const BarConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const Bar_Mix_Config = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const Bar_chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function Chart_Component({
  Locationdata,
  Salarydata,
  Roledata,
  Employementdata,
  CompanyData,
}: any) {
  return (
    <div className=" w-full min-h-screen p-10 flex items-center justify-center flex-col text-2xl font-bold">
      <div className="p-4">Dashboard</div>
      <div className="grid grid-rows-2 grid-cols-3 gap-6 w-full h-full pt-6">
        <div className="row-span-2 col-span-2 h-full">
          <Card className="h-full pt-8">
            <CardHeader>
              <CardTitle>Average Salary based on Job Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={Bar_chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={Salarydata}
                  layout="vertical"
                  margin={{
                    right: 16,
                  }}
                >
                  <CartesianGrid horizontal={false} />
                  <YAxis
                    dataKey="roles"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value}
                    hide
                  />
                  <XAxis dataKey="average_salary" type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Bar
                    dataKey="average_salary"
                    layout="vertical"
                    fill="var(--color-desktop)"
                    radius={5}
                  >
                    <LabelList
                      dataKey="roles"
                      position="insideLeft"
                      offset={8}
                      className="fill-[--color-label]"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <Card className="h-fit">
          <CardHeader className="items-center pb-0">
            <CardTitle>Employee with respect to Roles</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={Roledata}
                  dataKey="roles_count"
                  nameKey="roles"
                  innerRadius={65}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground font-bold text-lg"
                            >
                              Roles
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="w-full text-center">
              Employee with respect to Empoyement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={Employementdata}
                layout="vertical"
                margin={{
                  left: 0,
                }}
              >
                <YAxis
                  dataKey="employement"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <XAxis dataKey="employement_count" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="employement_count" layout="vertical" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-rows-2 grid-cols-3 gap-6 w-full pt-6">
        <Card>
          <CardHeader>
            <CardTitle className="w-full text-center">Company vs Job</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={CompanyData}
                layout="vertical"
                margin={{
                  left: 0,
                }}
              >
                <YAxis
                  dataKey="company"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <XAxis dataKey="total_jobs" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="total_jobs" layout="vertical" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <div className="row-span-2 col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex w-full justify-center items-center">
                Location Based data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={BarConfig}>
                <BarChart accessibilityLayer data={Locationdata}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="location"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar
                    dataKey="location_count"
                    fill="var(--color-desktop)"
                    radius={8}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
