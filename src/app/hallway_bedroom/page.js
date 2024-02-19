"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { hbedroom } from "../assets/hbedroom";
import { hbedroom_img } from "../assets/hbedroom_img";

export default function Home() {
  const [numberOfImg, setNumberOfImg] = useState(0);
  const [textNum, setTextNum] = useState(0);
  const [doneRead, setDoneRead] = useState(false);
  const [haveCandle, setHaveCandle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const h_bedroom = sessionStorage.getItem("h_bedroom");
    const candle = sessionStorage.getItem("candle");

    if (h_bedroom === "readen") {
      setDoneRead(true);
    }
    if (candle === "have") {
      setNumberOfImg(numberOfImg + 1);
      setHaveCandle(!haveCandle);
    }
  }, []);

  function NextText() {
    setTextNum(textNum + 1);
    if (textNum == 1) {
      setDoneRead(!doneRead);
      sessionStorage.setItem("h_bedroom", "readen");
    }
  }
  function ObtianCandle() {
    alert("You obtained a candle!");
    setNumberOfImg(numberOfImg + 1);
    sessionStorage.setItem("candle", "have");
    setHaveCandle(!haveCandle);
  }
  function GoToHallway() {
    router.push("/hallway_first");
  }

  return (
    <div
      style={{ backgroundImage: `url("${hbedroom_img[numberOfImg]}")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {doneRead ? (
        <div>
          {haveCandle ? (
            <div></div>
          ) : (
            <div
              onClick={() => ObtianCandle()}
              className="w-[170px] h-[170px] candle"
            ></div>
          )}

          <img
            onClick={() => GoToHallway()}
            src="arrow.png"
            className="second_arrow3"
          />
        </div>
      ) : (
        <div className="w-screen border-[grey] bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
          <div>
            <h3 className="text-[30px]">You:</h3>
            <h3 className="text-[20px]">{hbedroom[textNum]}</h3>
          </div>

          <button
            onClick={() => NextText()}
            className="border-b-[grey] border-b-[1px] w-[70px]"
          >
            Next..
          </button>
        </div>
      )}
    </div>
  );
}
