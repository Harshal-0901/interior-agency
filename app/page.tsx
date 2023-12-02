"use client";
import { Transistion } from "@/animation";
import { useTransistion } from "@/hooks";
export default function Home() {
  const { onTransistion } = useTransistion({});

  return (
    <main>
      <Transistion />
      <div className="h-screen w-screen flex justify-center items-center">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onTransistion("about")
          }
        >
          About
        </button>
      </div>
    </main>
  );
}
