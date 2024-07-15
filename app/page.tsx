import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full border-2 border-red-500 h-screen">
      <Navbar />
      <div className="flex items-center justify-center border-2 border-green-500 pt-48">
        <div className="flex flex-col">
          <div className="text-xl font-semibold pb-10 text-center">
            Chat with you Data
          </div>
          <div className="border border-slate-400 rounded-md p-4 w-[40rem]">
            <input
              className="py-2 pr-2 bg-transparent w-full outline-none"
              placeholder="Ask anything"
            />
            <div className="flex justify-between pt-2">
              <div className="flex gap-4">
                <div className="font-semibold">Hello</div>
                <div className="text-slate-600 font-semibold">View Command</div>
              </div>
              <div className="bg-slate-200 p-2 rounded-md cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
