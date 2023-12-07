"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const PercentageChart = () => {
  let chartOptions: ApexOptions = {
    series: [69],

    chart: {
      height: 260,
      type: "radialBar",
    },

    colors: ["#5903A4"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "#ffffff",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: "#5903A4",
            fontSize: "18px",
          },
          value: {
            color: "#5903A4",
            fontSize: "35px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#B45ECD"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Day win"],
  };

  return (
    <div id="chart" className="w-full">
      {/* Utilisez Chart à la place de react-apexcharts*/}

      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="radialBar"
        width="350"
      />
    </div>
  );
};

export default PercentageChart;
