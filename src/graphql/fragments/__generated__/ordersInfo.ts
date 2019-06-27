/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ordersInfo
// ====================================================

export interface ordersInfo_pair {
  __typename: "AmountPricePair";
  amountAsset: string;
  priceAsset: string;
}

export interface ordersInfo_bids {
  __typename: "AmountPrice";
  amount: string;
  price: string;
}

export interface ordersInfo_asks {
  __typename: "AmountPrice";
  amount: string;
  price: string;
}

export interface ordersInfo {
  __typename: "ItemView";
  pair: ordersInfo_pair | null;
  bids: ordersInfo_bids[] | null;
  asks: ordersInfo_asks[] | null;
}
