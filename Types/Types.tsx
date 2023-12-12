// Tous nos types et interfaces ici
//RootState csv
export interface RootState {
  data: Data;
}
// Typage du csv
export interface History {
  date: string;
  name: string;
  company: string;
  account: string;
}

export interface Positions {
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

export interface Orders {
  openTime: string;
  order: string;
  symbol: string;
  type: string;
  volume: number;
  price: number;
  stopLoss: number;
  target: number;
}

export interface Deals {
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
export interface Results {
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

export interface Data {
  history: History;
  positions: Positions[];
  orders: Orders[];
  deals: Deals[];
  results: Results;
}
