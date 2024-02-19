"use client";
import { exit_forest } from "../assets/exit_forest.js";
import { exit } from "../assets/exit.js";
import { exit_talk } from "../assets/exit_talk.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [imgNum, setImgNum] = useState(0);
  const [textNum, setTextNum] = useState(0);
  const [talk, setTalk] = useState(0);
  const router = useRouter();

  function NextText() {
    setTextNum(textNum + 1);
    setImgNum(imgNum + 1);
    if (textNum === 5) {
      setTalk(talk + 1);
    }
    if (textNum === 6) {
      setTalk(talk - 1);
    }
    if (textNum === 7) {
      setTalk(talk + 1);
    }
    if (textNum === 10) {
      setTalk(talk - 1);
    }
    if (textNum === 11) {
      router.push("/thankyouforplaying");
    }
  }

  return (
    <div
      style={{ backgroundImage: `url("${exit_forest[imgNum]}")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      <div className="w-screen border-[grey] bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
        <div>
          <h3 className="text-[30px]">{exit_talk[talk]}</h3>
          <h3 className="text-[20px]">{exit[textNum]}</h3>
        </div>

        <button
          onClick={() => NextText()}
          className="border-b-[grey] border-b-[1px] w-[70px]"
        >
          Next..
        </button>
      </div>
    </div>
  );
}
