"use client";
import Image from "next/image";
import understand from "../../undestand.png";
import { useRouter } from "next/navigation";
const Understand_Schema = () => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center flex-col justify-center max-h-screen">
      <div className="fixed top-0 p-4 w-full flex justify-between items-center">
        <div className="text-xl font-semibold font-sans w-full ">
          Statistically Speaking
        </div>

        <div>
          <button
            className="bg-white border border-neutral-500 text-black px-4 py-1  rounded-xl"
            onClick={() => router.push("/")}
          >
            Homepage
          </button>
        </div>
      </div>
      <div className="text-xl font-semibold pt-32">
        Understand the database schema
      </div>
      <Image
        src={understand}
        width={1000}
        height={1000}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Understand_Schema;
