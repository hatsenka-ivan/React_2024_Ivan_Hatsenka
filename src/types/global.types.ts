import React from "react";

export type DataDish = {
  id: string;
  meal: string;
  category: string;
  area: string;
  instructions: string;
  img: string;
  price: number;
};

export type Cart = {
  [key: string]: { quantity: number };
};

export type ComponentChildProp = {
  children: React.ReactNode;
};

export type THandleAddToCart = {
  handleAddToCart: (newDishes: {
    [key: string]: { quantity: number };
  }) => void;
};
