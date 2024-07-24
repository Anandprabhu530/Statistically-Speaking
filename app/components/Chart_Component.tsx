"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Bar, BarChart, XAxis } from "recharts";

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
  location_count: {
    label: "location_count",
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

export function Chart_Component({
  Locationdata,
  Salarydata,
  Roledata,
  Employementdata,
}: any) {
  return (
    <div className=" w-full h-screen p-10 flex items-center justify-center flex-col text-2xl font-bold">
      <div className="p-4">A simple Dashboard</div>
      <div className="grid grid-cols-2 gap-2">
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Employee with respect to location</CardTitle>
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
                  data={Locationdata}
                  dataKey="location_count"
                  nameKey="location"
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
                              Location
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
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Showing Location based grouping
            </div>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
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
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Showing role based grouping
            </div>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Employee with respect to Empoyement</CardTitle>
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
                  data={Employementdata}
                  dataKey="employement_count"
                  nameKey="employement"
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
                              Employement
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
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-[80%]">
        <Card>
          <CardHeader>
            <CardTitle>Tooltip - No Label</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={AreaConfig}>
              <BarChart accessibilityLayer data={Salarydata}>
                <XAxis
                  dataKey="location"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <Bar
                  dataKey="less_than_300000"
                  stackId="a"
                  fill="var(--color-running)"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="300000-399999"
                  stackId="a"
                  fill="var(--color-swimming)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="400000-499999"
                  stackId="a"
                  fill="var(--color-labeling)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="500000-599999"
                  stackId="a"
                  fill="var(--color-testing)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="600000-699999"
                  stackId="a"
                  fill="var(--color-cofusing)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="700000-799999"
                  stackId="a"
                  fill="var(--color-swimming)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="greater_than_800000"
                  stackId="a"
                  fill="var(--color-swimming)"
                  radius={[4, 4, 0, 0]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent hideIndicator hideLabel />}
                  cursor={false}
                  defaultIndex={1}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
