"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Button = () => {
  const pathname = usePathname();
  return (
    <button className="bg-white text-primary px-8 py-2 text-xl rounded-lg font-semibold">
      {pathname === "/" ? (
        <Link href={"/signin"}>Start Journaling</Link>
      ) : (
        pathname === "/login" && <p className="uppercase">Add Trades</p>
      )}
    </button>
  );
};

export default Button;
