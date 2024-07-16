import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full items-center p-4 border-2 border-black flex justify-between">
        <div className="text-xl font-semibold font-sans">
          Statistically Speaking
        </div>
        <div className="flex gap-8">
          <div className="border border-slate-500 cursor-pointer shadow-xl px-2 py-1 rounded-md font-semibold">
            Home
          </div>
          <div className="border border-slate-500 cursor-pointer shadow-xl px-2 py-1 rounded-md font-semibold">
            Dashboard
          </div>
        </div>
        <div>Test User</div>
      </nav>
    </div>
  );
};

export default Navbar;
