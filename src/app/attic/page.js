"use client";

import { useState, useEffect } from "react";
import { attic } from "../assets/attic.js";
import { attic_img } from "../assets/attic_img.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [NumberOfText, setNumberOfText] = useState(0);
  const [doneReading, setDoneReading] = useState(false);
  const [gotKey, setGotKey] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const attic = sessionStorage.getItem("attic");
    const attic_key = sessionStorage.getItem("attic_key");

    if (attic === "readen") {
      setDoneReading(!doneReading);
    }
    if (attic_key === "have") {
      setNumberOfImages(numberOfImages + 1);
    }
  }, []);

  function NextText() {
    setNumberOfText(NumberOfText + 1);
    if (NumberOfText === 2) {
      setDoneReading(!doneReading);
      sessionStorage.setItem("attic", "readen");
    }
  }
  function GoBack() {
    router.push("/secondFloor");
  }
  function GetKey() {
    setNumberOfImages(numberOfImages + 1);
    setGotKey(!gotKey);
    sessionStorage.setItem("attic_key", "have");
  }

  return (
    <div
      style={{ backgroundImage: `url("${attic_img[numberOfImages]}")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {doneReading ? (
        <div>
          {gotKey ? (
            <div></div>
          ) : (
            <div
              onClick={() => GetKey()}
              className=" w-[200px] h-[200px] attic_key"
            ></div>
          )}

          <img
            onClick={() => GoBack()}
            className="second_arrow3"
            src="arrow.png"
          />
        </div>
      ) : (
        <div className="w-screen border-[grey] bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
          <div>
            <h3 className="text-[30px]">You:</h3>
            <h3 className="text-[20px]">{attic[NumberOfText]}</h3>
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
