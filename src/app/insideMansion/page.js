"use client";
import { inside } from "../assets/inside.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [NumberOfText, setNumberOfText] = useState(0);
  const [textDone, setTextDone] = useState(true);
  const [showingPic, setShowingPic] = useState(false);
  const [exit, setExit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const main_entrance = sessionStorage.getItem("main_entrance");
    const attic_key = sessionStorage.getItem("attic_key");

    if (main_entrance === "readen") {
      setTextDone(false);
    }
    if (attic_key === "have") {
      setExit(!exit);
    }
  }, []);

  function NextText() {
    setNumberOfText(NumberOfText + 1);
    if (NumberOfText == 5) {
      setTextDone(!textDone);
      sessionStorage.setItem("main_entrance", "readen");
    }
  }
  function SecondFloor() {
    router.push("/hallway_first");
  }
  function FirstHallway() {
    router.push("/secondFloor");
  }
  function Picture() {
    setShowingPic(!showingPic);
  }
  function ClosePic() {
    setShowingPic(!showingPic);
  }
  function GoOutside() {
    router.push("/hauntedmansion");
  }
  return (
    <div
      style={{ backgroundImage: `url("/firststage.jpg")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {textDone ? (
        <div className="w-screen bg-[black] border-[grey] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
          <div>
            <h3 className="text-[30px]">You:</h3>
            <h3 className="text-[20px]">{inside[NumberOfText]}</h3>
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
          {showingPic ? (
            <div className="flex flex-row gap-[5px] justify-center items-center">
              <img className="w-[400px] mb-[70%]" src="picture1.jpg" />
              <img
                onClick={() => ClosePic()}
                className="w-[23px] h-[23px] bg-[white] rounded-[50%] border-[red] border-[2px] mb-[699px]"
                src="exit.png"
              />
            </div>
          ) : (
            <></>
          )}
          <img
            onClick={() => SecondFloor()}
            className="arrow1"
            src="arrow.png"
          />
          <img
            onClick={() => FirstHallway()}
            className="arrow2"
            src="arrow.png"
          />
          {exit ? (
            <img
              onClick={() => GoOutside()}
              className="second_arrow3"
              src="arrow.png"
            />
          ) : (
            <div></div>
          )}

          <div onClick={() => Picture()} className="picture"></div>
        </div>
      )}
    </div>
  );
}
