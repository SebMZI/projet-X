import logo from "@/app/assets/logo.svg";
import dashLogo from "@/app/assets/icons/dashboard.svg";
import reportsLogo from "@/app/assets/icons/reports.svg";
import settings from "@/app/assets/icons/settings.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  return (
    <header className="w-72 bg-gradient-to-b  from-[#B45ECD] to-[#5903A4] ">
      <div className="flex flex-col justify-between h-full">
        <nav className="p-5">
          <Image src={logo} alt="logo" className="w-6 " />
          <ul className="mt-14 text-white text-base">
            <li className="flex mb-4">
              <Image src={dashLogo} alt="dashboard" className="mr-3.5" />
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="flex">
              <Image src={reportsLogo} alt="reports" className="mr-3.5" />
              <Link href="/reports">Reports</Link>
            </li>
          </ul>
        </nav>
        <div className="text-white text-center">
          <div className="p-4">
            <button className="uppercase bg-white w-full rounded-lg h-9 text-primary relative font-semibold">
              <span className="absolute left-4 bottom-0.5 text-3xl ">+</span>
              add trades
            </button>
            <div className="flex flex-row items-center justify-between pt-5 cursor-pointer">
              <p>Sébastien</p>
              <Image src={settings} alt="settings" />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#F8F8F8] opacity-30"></div>
          <div className="p-4">
            <Link href="/legal-notices">Legal notices</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
