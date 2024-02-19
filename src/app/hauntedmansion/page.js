"use client";

import { second_image } from "../assets/second_image.js";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { second } from "../assets/second.js";

export default function Home() {
  const [NumberOfText, setNumberOfText] = useState(0);
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [exit, setExit] = useState(false);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const attic_key = sessionStorage.getItem("attic_key");

    if (attic_key === "have") {
      setExit(!exit);
    }
  }, []);

  function NextText() {
    audioRef1.current?.pause();
    audioRef2.current?.pause();

    setNumberOfText(NumberOfText + 1);

    if (NumberOfText == 2) {
      setNumberOfImages(numberOfImages + 1);
      audioRef1.current?.play();
    }
    if (NumberOfText == 3) {
      setNumberOfImages(numberOfImages + 1);
      audioRef2.current?.play();
    }
    if (NumberOfText == 5) {
      setNumberOfImages(numberOfImages - 2);
    }
    if (NumberOfText == 7) {
      router.push("/insideMansion");
    }
  }
  function ExitMansion() {
    router.push("/ExitMansion");
  }
  return (
    <div
      style={{ backgroundImage: `url("${second_image[numberOfImages]}")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      {exit ? (
        <div>
          <img
            onClick={() => ExitMansion()}
            className="second_arrow3"
            src="arrow.png"
          />
        </div>
      ) : (
        <div>
          <audio ref={audioRef1}>
            <source src="/walking_forest.mp3" type="audio/mpeg" />
          </audio>
          <audio ref={audioRef2}>
            <source src="/cage.mp3" type="audio/mpeg" />
          </audio>
          <div className="w-screen border-[grey] bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey]">
            <div>
              <h3 className="text-[30px]">You:</h3>
              <h3 className="text-[20px]">{second[NumberOfText]}</h3>
            </div>

            <button
              onClick={() => NextText()}
              className="border-b-[grey] border-b-[1px] w-[70px]"
            >
              Next..
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
