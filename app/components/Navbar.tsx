"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = ({ check }: any) => {
  const router = useRouter();
  return (
    <div className="fixed p-4 w-full flex justify-between z-50 items-center">
      <div className="text-xl font-semibold font-sans w-full">
        Statistically Speaking
      </div>
      <div>
        <button
          className="px-4 py-1 bg-white border border-neutral-500 text-black   rounded-xl cursor-pointer"
          onClick={() => (check ? router.push("/dashboard") : router.push("/"))}
        >
          {check ? "Dashboard" : "Homepage"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
