"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
const DailyPnlChart = () => {
  const arrayData = [400, -10, -48, -118, 32, -12, 56, -550, 200];

  const negative = Math.min(...arrayData);
  const positive = Math.max(...arrayData);
  const chartOptions: ApexOptions = {
    series: [
      {
        name: "Net Daily",
        data: arrayData,
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: negative,
              to: 0,
              color: "black",
            },
            {
              from: 0,
              to: positive,
              color: "#B45ECD",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Net Daily P&L",
      offsetY: 0,
      align: "center",

      style: {
        fontSize: "22px",
        color: "#5903A4",
      },
    },
    yaxis: {
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "";
        },
      },
      tickAmount: 8, // Ajustez le nombre de labels sur l'axe y
    },
    xaxis: {
      type: "datetime",
      categories: ["2011-01-01", "2011-02-01", "2011-03-11", "2011-04-01", "2011-05-01", "2011-06-01", "2011-07-01", "2011-08-01", "2011-09-01"],

      labels: {
        rotate: -90,
      },
    },
  };

  console.log(arrayData, negative);

  return (
    <div className="w-full">
      {/* Utilisez Chart à la place de react-apexcharts */}
      {<ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" width="500" />}
    </div>
  );
};

export default DailyPnlChart;
