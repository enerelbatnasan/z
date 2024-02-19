"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { hallway } from "../assets/hallway.js";

export default function Home() {
  const [text, setText] = useState(0);
  const router = useRouter();
  const [textDone, setTextdone] = useState(true);
  const [darkRoom, setDarkRoom] = useState(false);

  useEffect(() => {
    const hallway = sessionStorage.getItem("hallway");
    const candle = sessionStorage.getItem("candle");

    if (hallway === "readen") {
      setTextdone(false);
    }
    if (candle === "have") {
      setDarkRoom(!darkRoom);
    }
  }, []);

  function NextText() {
    setText(text + 1);
    if (text == 3) {
      sessionStorage.setItem("hallway", "readen");
      setTextdone(false);
    }
  }
  function GoBack() {
    router.push("/insideMansion");
  }
  function MainBedRoom() {
    router.push("/hallway_bedroom");
  }
  function DarkRoom() {
    router.push("/darkroom");
  }
  return (
    <div
      style={{ backgroundImage: `url("/hallway_first.jpeg")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {textDone ? (
        <div className="w-screen border-[grey] bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
          <div>
            <h3 className="text-[30px]">You:</h3>
            <h3 className="text-[20px]">{hallway[text]}</h3>
          </div>

          <button
            onClick={() => NextText()}
            className="border-b-[grey] border-b-[1px] w-[70px]"
          >
            Next..
          </button>
        </div>
      ) : (
        <div>
          <img
            onClick={() => MainBedRoom()}
            className="hall_arrow1"
            src="arrow.png"
          />
          {darkRoom ? (
            <img
              onClick={() => DarkRoom()}
              className="hall_arrow2"
              src="arrow.png"
            />
          ) : (
            <></>
          )}

          <img
            onClick={() => GoBack()}
            className="hall_arrow3"
            src="arrow.png"
          />
        </div>
      )}
    </div>
  );
}
