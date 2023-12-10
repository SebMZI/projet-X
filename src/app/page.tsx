import Image from "next/image";
import NavBar from "./components/NavBar";
import logoIcon from "@/app/assets/icons/projetxIcon.svg";
import Link from "next/link";
import Button from "./components/Button";
import landingImage from "@/app/assets/icons/landingImage.svg";
import circleIcon from "@/app/assets/icons/circleIcon.svg";
import mt5Icon from "@/app/assets/icons/mt5Icon.svg";
import mt4Icon from "@/app/assets/icons/mt4Icon.svg";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
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
      <main className=" w-full">
        <section className="relative w-full h-screen bg-gradient-to-b from-primary to-secondary pl-20  flex flex-row justify-between items-center">
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
            <div className="mt-4 flex flex-row ">
              <Image
                src={mt4Icon}
                alt="metatrader Icon only available for this platform."
              />
              <Image
                src={mt5Icon}
                alt="metatradde Icon only available for this platform."
              />
            </div>
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
        <section className="h-full w-full bg-white py-[90px]">
          <div className="w-full flex flex-col items-center pb-20">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block bg-clip-text text-transparent font-semibold text-6xl pb-4">
              TAKE ADVANTAGE OF YOUR DATA
            </h2>
            <p className="w-2/4 text-center">
              Leverage the power of data through strategic journaling. By
              meticulously recording your trading experiences, you unlock
              valuable insights, enabling you to make informed decisions and
              optimize your path to success. With every entry, you take full
              advantage of your data, turning raw information into a strategic
              asset that propels your trading endeavors to new heights.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
