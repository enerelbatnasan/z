"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function PlayAgain() {
    sessionStorage.clear();
    router.push("/");
  }
  return (
    <div
      style={{ backgroundImage: `url("/flowersence.png")` }}
      className="bg-cover text-[white] w-screen h-screen flex p-[20px] flex-col gap-[40px] justify-center items-center bg-no-repeat bg-center"
    >
      <h1 className="text-[60px]">Thank you for playing Kuidaore!</h1>
      <div className="w-[1000px] text-[30px] flex justify-center items-center">
        <p>If you enjoyed the game i'm pleased!</p>
      </div>
      <h3
        onClick={() => PlayAgain()}
        className="playAgain border-b-[1px] border-[white]"
      >
        Play Again?
      </h3>
    </div>
  );
}
