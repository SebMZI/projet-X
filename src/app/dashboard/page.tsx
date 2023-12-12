"use client";
import Image from "next/image";
import ReloadIcon from "../assets/icons/Reload icon.svg";
import DownArrowIcon from "../assets/icons/Arrow down.svg";
import DollarIcon from "../assets/icons/Dollar.svg";
import ListIcon from "../assets/icons/list.svg";
import PercentageChart from "../components/PercentageChart";
import DailyPnlChart from "../components/DailyPnlChart";
import ReadCsv from "../components/ReadCsv";
import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect, SyntheticEvent } from "react";
import { RootState } from "../../../Types/Types";

const Page = () => {
  const data = useSelector((state: RootState) => state.data);

  const lastImport = data && data.history?.date;
  console.log(data.history);
  return (
    <main className="w-full">
      <section className="flex flex-row h-20 w-full  justify-between bg-orange-50 items-center shadow-md">
        {/* {Menu dashboard} */}
        <div className="flex flex-row items-center">
          <h1 className="text-4xl ml-4">Dashboard</h1>
          <div className="ml-8 flex flex-row items-center ">
            <Image src={ReloadIcon} alt="reload icon" className="w-5 cursor-pointer" />
            <p className="ml-3 text-[#767676]">Last import was made: {lastImport} </p>
          </div>
        </div>
        <div className="flex flex-row mr-5 ">
          <div className="flex flex-row mr-5 cursor-pointer">
            <Image src={ListIcon} alt="list icon" className="w-5 mr-[3px]" /> <Image src={DownArrowIcon} alt="down arrow icon" className="w-5" />
          </div>
          <div className="flex flex-row cursor-pointer">
            <Image src={DollarIcon} alt="dollar icon" className="w-6" /> <Image src={DownArrowIcon} alt="down arrow icon" className="w-5" />
          </div>
        </div>
        {/* {dashboard content} */}
      </section>
      <section className="px-8 mt-10">
        {/* {Container small charts} */}
        <div className="flex flex-row w-full items-center justify-between">
          <PercentageChart />
          <PercentageChart />
          <PercentageChart />
          <PercentageChart />
        </div>
        {/* {container medium charts} */}
        <div className="mt-10 flex flex-row w-full justify-between">
          <DailyPnlChart />
          <DailyPnlChart />
          <DailyPnlChart />
        </div>
      </section>
      <ReadCsv />
    </main>
  );
};

export default Page;
