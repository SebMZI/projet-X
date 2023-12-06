import graphLoginIcon from "@/app/assets/icons/graphLogin.svg";
import homeIcon from "@/app/assets/icons/dashboard.svg";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <main className="h-screen w-screen flex flex-row">
      <div className="basis-3/4 bg-gradient-to-b from-secondary to-primary relative">
        <div className="h-full flex flex-col justify-between p-5">
          <div>
            <Image
              src={graphLoginIcon}
              alt="graph logo"
              className="w-10 mb-12"
            />
            <div>
              <Link href={"/"} className="flex flex-row gap-4 text-white">
                <Image src={homeIcon} alt="home" />
                Home
              </Link>
            </div>
          </div>
          <Link href={"/legal-notices"} className="text-white">
            Legal notices
          </Link>
        </div>
        <Image
          src={graphLoginIcon}
          alt="graph"
          className="absolute bottom-0 right-20 opacity-20 w-3/5"
        />
      </div>
      <div className="px-10 py-28 basis-1/4">
        <h1 className="w-full uppercase text-4xl text-primary text-right">
          signin
        </h1>
      </div>
    </main>
  );
};

export default Page;
