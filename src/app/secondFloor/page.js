"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { secondfloor } from "../assets/secondfloor.js";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState(0);
  const [ifReaden, setIfReaden] = useState(false);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    const secondfloor_hallway = sessionStorage.getItem("secondfloor_hallway");
    const kidsroom_key = sessionStorage.getItem("kidsroom_key");

    if (secondfloor_hallway === "readen") {
      setIfReaden(true);
    }
    if (kidsroom_key === "taken") {
      setFinal(!final);
    }
  }, []);

  function GoToMain() {
    router.push("/insideMansion");
  }
  function NextText() {
    setText(text + 1);
    if (text == 2) {
      setIfReaden(!ifReaden);
      sessionStorage.setItem("secondfloor_hallway", "readen");
    }
  }
  function ChildrensRoom() {
    router.push("/kids_room");
  }
  function Attic() {
    router.push("/attic");
  }
  return (
    <div
      style={{ backgroundImage: `url("/secondfloorhallway.jpeg")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {ifReaden ? (
        <div>
          <img
            onClick={() => ChildrensRoom()}
            className="second_arrow1"
            src="arrow.png"
          />
          {final ? (
            <img
              onClick={() => Attic()}
              className="second_arrow2"
              src="arrow.png"
            />
          ) : (
            <div></div>
          )}

          <img
            onClick={() => GoToMain()}
            className="second_arrow3"
            src="arrow.png"
          />
        </div>
      ) : (
        <div className="w-screen border-[grey] bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
          <div>
            <h3 className="text-[30px]">You:</h3>
            <h3 className="text-[20px]">{secondfloor[text]}</h3>
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
