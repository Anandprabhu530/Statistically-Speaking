"use client";

import { Command_GenAI } from "@/utils/ai";
import { useEffect, useRef, useState } from "react";

const InputBox = () => {
  const [input, setInput] = useState("");
  const [first, setFirst] = useState(false);
  const [chat, setChat] = useState<String[]>([
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla dui, volutpat at auctor et, dignissim sed tortor. Curabitur ullamcorper, neque sed fringilla semper, dui nulla tincidunt massa, non tempor elit sapien in enim. Nulla sed velit in felis pharetra maximus. Vivamus quis laoreet lorem, in rutrum ligula. Phasellus sollicitudin accumsan tortor, non congue felis tempus vel. Praesent sodales lacinia tellus ac euismod. Praesent sagittis eu purus consequat posuere. Aliquam euismod nibh at leo viverra, non feugiat ipsum pulvinar. In congue diam nec urna facilisis, ac auctor purus faucibus. In at ipsum felis. Duis cursus, ante in elementum aliquam, mi eros varius arcu, ut fringilla ante tortor sit amet felis. Aenean sed risus ex. Nam pretium mauris sed vulputate ultrices. Sed ac ultricies ipsum. Donec mattis faucibus tellus. Praesent nec lorem est.

Nulla sollicitudin, velit id luctus cursus, elit nisi placerat felis, non scelerisque odio est in odio. Duis quis laoreet felis. In ornare tincidunt odio, ut blandit ligula porttitor a. Pellentesque ornare orci sed leo semper rutrum. Aliquam nec urna et ante semper varius. Donec tristique pellentesque ipsum, scelerisque ornare nulla euismod id. Nunc dapibus, eros id interdum iaculis, ante dui blandit velit, ultrices tempor nibh eros sit amet metus. Aenean pretium metus a dui mattis, a dignissim lorem fringilla. Nulla bibendum purus non metus efficitur vulputate. Integer finibus lectus ac nisi dictum, eu ultrices sem condimentum.

Suspendisse aliquet id lacus hendrerit dictum. Vivamus sed cursus arcu. Donec eget elit ut nibh pellentesque tincidunt vel eu nisi. Sed consequat bibendum dignissim. Praesent id ligula imperdiet velit ultricies gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc hendrerit ligula nec velit suscipit, id pharetra risus malesuada. Donec dictum sapien et pretium tincidunt. Maecenas at est at nisl tristique bibendum. Curabitur laoreet interdum ullamcorper. Ut eu elit vehicula, facilisis orci a, malesuada ex.

Mauris at tortor felis. Cras auctor nibh dolor, vel gravida magna elementum sit amet. Curabitur efficitur sagittis scelerisque. Sed neque lorem, posuere a bibendum eu, consequat ac velit. Donec eu molestie nibh. In sit amet quam eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam condimentum urna non dapibus egestas. Sed tortor sem, consectetur eu consequat id, tempor ut eros`,
  ]);
  const textref = useRef(null);
  const handlechange = (event: any) => {
    setInput(event.target.value);
  };

  const handlesubmit = async () => {
    if (first) {
      setFirst(false);
    }
    setChat([...chat, input]);
    // const data = await Command_GenAI(input);
    console.log("data");
  };

  // useEffect(() => {
  //   const height = textref.current.scrollHeight;
  //   textref.current.style.height = `${Math.min(height, 100)}px`;
  // }, [input]);

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-[40rem] absolute top-[50px] overflow-y-auto h-fit pb-[180px] ">
        {chat}
      </div>
      <div className="fixed w-full flex items-end h-screen justify-center">
        <div className="border border-neutral-400 rounded-md p-4 pt-2 w-[40rem] absolute bg-white my-4 ">
          <textarea
            className="py-2 pr-2 bg-transparent w-full outline-none resize-none"
            placeholder="Ask anything"
            onChange={handlechange}
            value={input}
            ref={textref}
          />
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="font-semibold">Hello</div>
              <div className="text-neutral-600 font-semibold">View Command</div>
            </div>
            <div className="bg-neutral-200 p-2 rounded-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
                onClick={handlesubmit}
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
        <div className="w-full pt-5 bg-white">{""}</div>
      </div>
    </div>
  );
};

export default InputBox;
