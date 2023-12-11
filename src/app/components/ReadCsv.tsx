"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";

interface History {
  date: string;
  name: string;
  company: string;
  account: string;
}

interface Positions {
  time: string;
  position: string;
  symbol: string;
  type: string;
  volume: number;
  price: number;
  stopLoss: number;
  target: number;
  commission: number;
  swap: string;
  profit: number;
}

interface Orders {
  openTime: string;
  order: string;
  symbol: string;
  type: string;
  volume: number;
  price: number;
  stopLoss: number;
  target: number;
}

interface Deals {
  time: string;
  deal: string;
  symbol: string;
  type: string;
  direction: string;
  volume: number;
  price: number;
  order: string;
  commissions: number;
  fee: number;
  swap: number;
  profit: number;
  balance: number;
}
interface Results {
  totalNetProfit: number;
  profitFactor: number;
  expectedPayoff: number;
  recoveryFactor: number;
  totalTrades: number;
  profitTrades: string;
  lossTrades: string;
  shortTrades: number;
  longTrades: number;
  largestProfitTrade: number;
  largestLossTrade: number;
  averageProfitTrade: number;
  averageLossTrade: number;
}

interface Data {
  history: History;
  positions: Positions[];
  orders: Orders[];
  deals: Deals[];
  results: Results;
}

const MyComponent: React.FC = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      Papa.parse(file, {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
          const data = results.data;

          // Identifiez les indices de début et de fin des différentes sections
          const historyStartIndex = data.findIndex((row) =>
            row[0]?.toLowerCase().includes("trade history report")
          );
          const positionsStartIndex = data.findIndex((row) =>
            row[0]?.toLowerCase().includes("positions")
          );
          const ordersStartIndex = data.findIndex((row) =>
            row[0]?.toLowerCase().includes("orders")
          );
          const dealsStartIndex = data.findIndex((row) =>
            row[0]?.toLowerCase().includes("deals")
          );
          const resultStartIndex = data.findIndex((row) =>
            row[0]?.toLowerCase().includes("result")
          );
          const endIndices = [
            positionsStartIndex,
            ordersStartIndex,
            dealsStartIndex,
            resultStartIndex,
          ].filter((index) => index !== -1);
          let indexes: number[] = [];
          let obj: Data = {} as Data;

          data.forEach((innerArray, index) => {
            // Vérifier si le premier élément est une chaîne non vide
            // et si les 13 éléments suivants sont des chaînes vides
            if (
              innerArray.length === 14 &&
              typeof innerArray[0] === "string" &&
              innerArray[0].trim() !== "" &&
              innerArray.slice(1).every((element) => element === "")
            ) {
              indexes.push(index);
            }
          });
          console.log(indexes);

          // Séparez les données en différentes parties en utilisant les indices

          // Faites quelque chose avec les trois parties
          const history: any[] = data.slice(0, 5);
          obj.history = {
            date: history[4][3],
            name: history[1][3],
            company: history[3][3],
            account: history[2][3],
          };
          const positions = data.slice(indexes[1], indexes[2]);
          obj.positions = positions
            .slice(2, positions.length)
            .map((position: any) => ({
              time: position[0],
              position: position[1],
              symbol: position[2],
              type: position[3],
              volume: position[4],
              price: position[5],
              stopLoss: position[6],
              target: position[7],
              commission: position[10],
              swap: position[11],
              profit: position[12],
            }));

          const orders = data.slice(indexes[2], indexes[3]);
          obj.orders = orders.slice(2, orders.length).map((order: any) => ({
            openTime: order[0],
            order: order[1],
            symbol: order[2],
            type: order[3],
            volume: order[4],
            price: order[5],
            stopLoss: order[6],
            target: order[7],
          }));
          const deals = data.slice(indexes[3], indexes[4]);
          obj.deals = deals.slice(2, deals.length - 20).map((deal: any) => ({
            time: deal[0],
            deal: deal[1],
            symbol: deal[2],
            type: deal[3],
            direction: deal[4],
            volume: deal[5],
            price: deal[6],
            order: deal[7],
            commissions: deal[8],
            fee: deal[9],
            swap: deal[10],
            profit: deal[11],
            balance: deal[12],
          }));
          const result: any[] = data.slice(data.length - 13, data.length);
          obj.results = {
            totalNetProfit: result[1][3],
            profitFactor: result[2][3],
            expectedPayoff: result[2][7],
            recoveryFactor: result[3][3],
            totalTrades: result[6][3],
            profitTrades: result[7][7],
            lossTrades: result[7][11],
            shortTrades: result[6][7],
            longTrades: result[6][11],
            largestProfitTrade: result[8][7],
            largestLossTrade: result[8][11],
            averageProfitTrade: result[9][7],
            averageLossTrade: result[9][11],
          };
          console.log(obj);
        },
      });
    }
  };

  return (
    <div className="custom-file-input">
      <label htmlFor="fileInput" className="file-label">
        Select your file
      </label>
      <input
        type="file"
        id="fileInput"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        className="mt-10 block  text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-[#d681f035]] file:text-[#5903A4]
          hover:file:bg-[#d681f04b] cursor-pointer"
      />
    </div>
  );
};

export default MyComponent;
