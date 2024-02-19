"use client";
import { darkroom } from "../assets/darkroom.js";
import { darkroom_img } from "../assets/darkroom_img.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { David_Libre } from "next/font/google";

export default function Home() {
  const [numImg, setNumImg] = useState(0);
  const [done, setDone] = useState(false);
  const [numText, setNumText] = useState(0);
  const [safe, setSafe] = useState(false);
  const [codeValue, setCodeValue] = useState([]);
  const [didCode, setDidCode] = useState(false);
  const [readen, setReaden] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const darkroom = sessionStorage.getItem("darkroom");
    const picture_peace = sessionStorage.getItem("picture_peace");

    if (darkroom === "readen") {
      setDone(!done);
      setReaden(!readen);
    }
    if (picture_peace === "have") {
      setNumImg(numImg + 1);
      setDidCode(!didCode);
    }
  }, []);

  function NextText() {
    setNumText(numText + 1);
    if (numText == 1) {
      setDone(!done);
      setReaden(!readen);
      sessionStorage.setItem("darkroom", "readen");
    }
  }
  function ShowInput() {
    setSafe(!safe);
  }
  function check() {
    if (codeValue == 3596) {
      setNumImg(numImg + 1);
      setDidCode(!didCode);
      alert("You obtained a picture peace.");
      setSafe(!safe);
      sessionStorage.setItem("picture_peace", "have");
    }
  }
  function exit() {
    setSafe(!safe);
  }
  function GoToHall() {
    router.push("/hallway_first");
  }

  return (
    <div
      style={{ backgroundImage: `url("${darkroom_img[numImg]}")` }}
      class="flex flex-col items-center border-[grey] justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {readen ? (
        <img
          onClick={() => GoToHall()}
          className="second_arrow3"
          src="arrow.png"
        />
      ) : (
        <div></div>
      )}
      {didCode ? (
        <div></div>
      ) : (
        <div>
          {done ? (
            <div>
              {safe ? (
                <div className="input bg-[#000000] h-[500px] w-[600px] rounded-[30px] flex justify-center items-center flex-col gap-[40px]">
                  <div className="flex gap-[40px]">
                    <input
                      placeholder="code..."
                      className="some-input bg-[grey] text-[black] w-[400px] h-[200px] text-[70px] rounded-[4px] outline-none"
                      onChange={(e) => setCodeValue(e.target.value)}
                    />
                    <img
                      onClick={() => exit()}
                      className="w-[20px] h-[20px] bg-[white] rounded-[50%] border-[2px] border-[red]"
                      src="exit.png"
                    />
                  </div>
                  <button
                    onClick={() => check()}
                    className="text-[white] border-[white] border-[1px] w-[150px] h-[50px] rounded-[10px]"
                  >
                    Enter
                  </button>
                </div>
              ) : (
                <div>
                  <div
                    onClick={() => ShowInput()}
                    className="h-[200px] w-[330px] safe rounded-[10px]"
                  ></div>
                </div>
              )}
            </div>
          ) : (
            <div className="w-screen bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
              <div>
                <h3 className="text-[30px]">You:</h3>
                <h3 className="text-[20px]">{darkroom[numText]}</h3>
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
      )}
    </div>
  );
}
