"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";
import upIcon from "../assets/icons/up.svg";
import downIcon from "../assets/icons/down.svg";

const PercentageChart = () => {
  let chartOptions: ApexOptions = {
    series: [70],
    chart: {
      height: 260,
      type: "radialBar",
    },

    colors: ["rgba(242, 106, 106, 0.854)"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "#ffffff",
          // margin: 0,
          //         size: '70%',
          //         background: '#fff',
          //         image: undefined,
          //         imageOffsetX: 0,
          //         imageOffsetY: 0,
          //         position: 'front',
          //         dropShadow: {
          //           enabled: true,
          //           top: 3,
          //           left: 0,
          //           blur: 4,
          //           opacity: 0.24
          //         }
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
          // dropShadow: {
          //   enabled: true,
          //   top: 3,
          //   left: 0,
          //   blur: 4,
          //   opacity: 0.24,
          // },
          // dropShadow: {
          //   enabled: true,
          //   top: -3,
          //   left: 0,
          //   blur: 4,
          //   opacity: 0.35,
          // },
        },
        dataLabels: {
          name: {
            offsetY: -5,
            color: "black",
            fontSize: "14px",
          },
          value: {
            color: "black",
            fontSize: "18px",
            show: true,
            offsetY: 2,
          },
        },
      },
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["rgba(242, 106, 106, 0.854)"],
    //     stops: [0, 100],
    //   },
    // },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#5e89edda"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Day win"],
  };

  return (
    <div className=" min-w-[350px] max-w-[350px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-row justify-between items-center">
      <div className="ml-4 max-w-[80px] h-[180px] ">
        <h2 className="whitespace-nowrap mt-[30px] mb-[20px] text-[18px]">Day win percentage</h2>
        <div className="flex flex-row items-center ">
          <Image src={upIcon} alt="up icon" className="w-[20px]" />
          <p className="whitespace-nowrap">Win: 4</p>
        </div>
        <div className="flex flex-row items-center  mt-1">
          <Image src={downIcon} alt="up icon" className="w-[20px]" />
          <p className="whitespace-nowrap ">Loose: 2</p>
        </div>
      </div>
      {<ReactApexChart className="ml-10" options={chartOptions} series={chartOptions.series} type="radialBar" width="250" />}
    </div>
  );
};

export default PercentageChart;
