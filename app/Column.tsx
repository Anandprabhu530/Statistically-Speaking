"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  salary: string;
  company: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "company",
    header: "company",
  },

  {
    accessorKey: "salary",
    header: "salary",
  },
];
