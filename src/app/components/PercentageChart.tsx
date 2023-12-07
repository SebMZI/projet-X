"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

// Utilisez dynamic pour importer ApexChart de manière dynamique côté client
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PercentageChart = () => {
  let option = {
    chart: {
      height: 260,
      //   type: "radialBar",
    },
  };
  let serie: ApexOptions = {
    series: [69],
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

  let chartOptions: ApexOptions = {
    chart: {
      height: 260,
      //   type: "radialBar",
    },
    series: [69],
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

  return <div className="w-full">{<Chart options={chartOptions} series={chartOptions.serie} type="radialBar" width="350" />}</div>;
};

export default PercentageChart;
