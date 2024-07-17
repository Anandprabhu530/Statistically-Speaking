import { Command_GenAI } from "@/utils/ai";
import Testfunction from "./text";

const InputBox = async () => {
  return (
    <div className="w-full flex justify-center relative">
      <Testfunction />
      <div className="fixed w-full flex items-end h-screen justify-center">
        <form
          className="border border-neutral-400 rounded-md p-4 pt-2 w-[40rem] absolute bg-white my-4 "
          action={Command_GenAI}
        >
          <textarea
            className="py-2 pr-2 bg-transparent w-full outline-none resize-none"
            placeholder="Ask anything"
            name="text_data"
          />
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="font-semibold">Hello</div>
              <div className="text-neutral-600 font-semibold">View Command</div>
            </div>
            <div className="bg-neutral-200 p-2 rounded-md cursor-pointer">
              <button>
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
              </button>
            </div>
          </div>
        </form>
        <div className="w-full pt-5 bg-white">{""}</div>
      </div>
    </div>
  );
};

export default InputBox;
