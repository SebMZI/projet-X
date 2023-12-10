"use client";
import { useEffect } from "react";
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
  useEffect(() => {
    const handleFileChange = async (event: Event) => {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file) {
          handleAnalyse(file);
        }
      }
    };
    const handleAnalyse = (file: File) => {
      console.log(file);
      Papa.parse(file, {
        header: false,
        skipEmptyLines: true,
        complete(results) {
          const rows = results.data;
          const categoryIndices: number[] = [];
          let obj: Data = {} as Data;
          rows.map((row: any, index: number) => {
            if (
              row[0].length > 0 &&
              row.slice(1).every((element: string) => element === "")
            ) {
              categoryIndices.push(index);
            }
          });

          const history: any[] = rows.slice(0, 5);
          obj.history = {
            date: history[4][3],
            name: history[1][3],
            company: history[3][3],
            account: history[2][3],
          };
          const positions = rows.slice(categoryIndices[1], categoryIndices[2]);
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

          const orders = rows.slice(categoryIndices[2], categoryIndices[3]);
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
          const deals = rows.slice(categoryIndices[3], categoryIndices[4]);
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
          const result: any[] = rows.slice(rows.length - 13, rows.length);
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
          console.log(result);

          console.log(obj);
        },
      });
    };
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.addEventListener("change", handleFileChange);
    }
    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", handleFileChange);
      }
    };
  }, []);

  return (
    <div>
      <input type="file" accept=".csv" id="fileInput" />
    </div>
  );
};

export default MyComponent;
