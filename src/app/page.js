"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  function StartTheGame() {
    router.push("/scene1");
  }
  return (
    <div
      style={{ backgroundImage: `url("Untitled (1).jpeg")` }}
      className="w-screen h-screen bg-cover bg-center flex justify-center items-center flex-col"
    >
      <h3 className="text-[#ece4dc]">TW: blood, flashing, graphics..</h3>
      <h1 className="text-[#ece4dc] text-[70px]">Welcome to Kuidaore</h1>
      <button
        onClick={() => {
          StartTheGame();
        }}
        className="text-[#ece4dc] border-[black] bg-[black] w-[120px] rounded-[10px]"
      >
        Play
      </button>
    </div>
  );
};

export default Page;
