import Image from "next/image";
import NavBar from "./components/NavBar";
import logoIcon from "@/app/assets/icons/projetxIcon.svg";
import Link from "next/link";
import Button from "./components/Button";
import landingImage from "@/app/assets/icons/landingImage.svg";
import circleIcon from "@/app/assets/icons/circleIcon.svg";

export default function Home() {
  return (
    <div className="h-screen  w-full">
      <header className="bg-primary  w-full h-fit  px-20 py-5 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <Image src={logoIcon} alt="projet x logo" />
          <nav>
            <ul className="flex flex-row gap-4 text-white font-semibold text-lg">
              <li>
                <Link href={"#"}>Features</Link>
              </li>
              <li>
                <Link href={"#"}>Pricing</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-white text-lg font-semibold">
          <Link href={"/login"} className="mr-8">
            Login
          </Link>
          <Button />
        </div>
      </header>
      <main className="h-full w-full">
        <section className="relative w-full h-full bg-gradient-to-b from-primary to-secondary pl-20  flex flex-row justify-between items-center">
          <div className="text-white flex flex-col items-start justify-between basis-2/5  ">
            <h1 className="text-6xl pb-8">
              Conceive a trading journal coupled with an integrated analytics
              tool.
            </h1>
            <p className="text-2xl font-thin pb-8">
              Projet X transforms your trading success through insightful
              journaling and advanced analytics, uncovering strengths for
              greater profitability.
            </p>
            <Button />
          </div>
          <Image
            src={landingImage}
            alt="landing image"
            className="absolute right-[-250px]"
          />
          <Image
            src={circleIcon}
            alt="circle icon"
            className="absolute left-[30%] top-0"
          />
        </section>
      </main>
    </div>
  );
}
