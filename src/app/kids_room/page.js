"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { kidsbedroom_img } from "../assets/kidsbedroom_img.js";
import { kidsroom } from "../assets/kidsroom.js";
import { Familjen_Grotesk } from "next/font/google";

export default function Home() {
  const [numberOfImg, setNumberOfImg] = useState(0);
  const [numOfText, setNumOfText] = useState(0);
  const [doneRead, setDoneRead] = useState(false);
  const [hasPic, setHasPic] = useState(false);
  const [restoredPic, setRestoredPic] = useState(false);
  const [haveKey, setHaveKey] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const kidsroom = sessionStorage.getItem("kidsroom");
    const picture_peace = sessionStorage.getItem("picture_peace");
    const kidsroom_key = sessionStorage.getItem("kidsroom_key");

    if (kidsroom === "readen") {
      setDoneRead(!doneRead);
    }
    if (picture_peace === "have") {
      setHasPic(true);
    }
    if (kidsroom_key === "unlocked") {
      setRestoredPic(!restoredPic);
      setNumberOfImg(numberOfImg + 1);
    }
    if (kidsroom_key === "taken") {
      setHaveKey(!haveKey);
      setNumberOfImg(numberOfImg + 2);
    }
  }, []);

  function NextText() {
    setNumOfText(numOfText + 1);
    if (numOfText === 3) {
      setDoneRead(!doneRead);
      sessionStorage.setItem("kidsroom", "readen");
    }
  }
  function kidsPicture() {
    console.log("setHasPic", setHasPic);
    if (hasPic === true) {
      if (window.confirm("Want to restore the picture?")) {
        setRestoredPic(!restoredPic);
        setNumberOfImg(numberOfImg + 1);
        sessionStorage.setItem("kidsroom_key", "unlocked");
      }
    } else {
      alert("You haven't found the picture peace!");
    }
  }
  function GoBack() {
    router.push("/secondFloor");
  }
  function GetKey() {
    alert("You found the ██████ key");
    setHaveKey(!haveKey);
    setNumberOfImg(numberOfImg + 1);
    sessionStorage.setItem("kidsroom_key", "taken");
  }

  return (
    <div
      style={{ backgroundImage: `url("${kidsbedroom_img[numberOfImg]}")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {doneRead ? (
        <div>
          {restoredPic ? (
            <div>
              {haveKey ? (
                <div></div>
              ) : (
                <div>
                  <div
                    onClick={() => GetKey()}
                    className="key w-[200px] h-[200px]"
                  ></div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div
                onClick={() => kidsPicture()}
                className="picture1 w-[165px] h-[190px]"
              ></div>
            </div>
          )}
          <img
            onClick={() => GoBack()}
            className="second_arrow3"
            src="arrow.png"
          />
        </div>
      ) : (
        <div className="w-screen bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey] border-[grey]">
          <div>
            <h3 className="text-[30px]">You:</h3>
            <h3 className="text-[20px]">{kidsroom[numOfText]}</h3>
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
