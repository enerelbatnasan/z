"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { first_image } from "../assets/first_image.js";
import { first } from "../assets/first.js";
export default function Home() {
  const [NumberOfText, setNumberOfText] = useState(0);
  const [numberOfImages, setNumberOfImages] = useState(0);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const router = useRouter();

  function NextText() {
    setNumberOfText(NumberOfText + 1);
    if (NumberOfText == 3) {
      setNumberOfImages(numberOfImages + 1);
    }
    if (NumberOfText == 4) {
      setNumberOfImages(numberOfImages + 1);
    }
    if (NumberOfText == 5) {
      setNumberOfImages(numberOfImages + 1);
      audioRef2.current?.play();
    }
    if (NumberOfText == 6) {
      setNumberOfImages(numberOfImages + 1);
    }
    if (NumberOfText == 7) {
      setNumberOfImages(numberOfImages + 1);
      audioRef1.current?.play();
    }
    if (NumberOfText == 8) {
      router.push("/hauntedmansion");
    }
  }

  return (
    <div
      style={{ backgroundImage: `url("${first_image[numberOfImages]}")` }}
      class="flex flex-col items-center justify-end bg-black h-screen bg-no-repeat bg-cover bg-center"
    >
      <audio ref={audioRef1}>
        <source src="/womanscream.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef2}>
        <source src="/car.mp3" type="audio/mpeg" />
      </audio>

      <div className="w-screen bg-[black] h-[150px] rounded-[30px] p-[10px] flex flex-col justify-between text-[grey] border-[grey]">
        <div>
          <h3 className="text-[30px]">You:</h3>
          <h3 className="text-[20px]">{first[NumberOfText]}</h3>
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
