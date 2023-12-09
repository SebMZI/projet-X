import Image from "next/image";
import ReloadIcon from "../assets/icons/Reload icon.svg";
import DownArrowIcon from "../assets/icons/Arrow down.svg";
import DollarIcon from "../assets/icons/Dollar.svg";
import ListIcon from "../assets/icons/list.svg";
import ReadCsv from "../components/ReadCsv";

const Page = () => {
  return (
    <main className="w-full">
      <section className="flex flex-row h-20 w-full  justify-between bg-orange-50 items-center shadow-md">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl ml-4">Dashboard</h1>
          <div className="ml-8 flex flex-row items-center ">
            <Image
              src={ReloadIcon}
              alt="reload icon"
              className="w-5 cursor-pointer"
            />
            <p className="ml-3 text-[#767676]">Last import was made: </p>
          </div>
        </div>
        <div className="flex flex-row mr-5 ">
          <div className="flex flex-row mr-5 cursor-pointer">
            <Image src={ListIcon} alt="list icon" className="w-6 mr-[4px]" />{" "}
            <Image src={DownArrowIcon} alt="down arrow icon" className="w-6" />
          </div>
          <div className="flex flex-row cursor-pointer">
            <Image src={DollarIcon} alt="dollar icon" className="w-7" />{" "}
            <Image src={DownArrowIcon} alt="down arrow icon" className="w-6" />
          </div>
        </div>
      </section>
      <ReadCsv />
    </main>
  );
};

export default Page;
