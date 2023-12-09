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
        borderRadius: 5,

        colors: {
          ranges: [
            {
              from: negative,
              to: 0,
              color: "rgba(242, 106, 106, 0.854)",
            },
            {
              from: 0,
              to: positive,
              color: "#5e89edda",
            },
          ],
        },
        columnWidth: "90%",
      },
    },
    stroke: {
      show: true, // Active la bordure
      width: 1, // Largeur de la bordure
      colors: ["gray"], // Couleur de la bordure
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Net Daily P&L",
      offsetY: 10,
      align: "center",

      style: {
        fontSize: "18px",
        color: "black",
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
    <div className=" min-w-[470px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {<ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" width="450" />}
    </div>
  );
};

export default DailyPnlChart;
