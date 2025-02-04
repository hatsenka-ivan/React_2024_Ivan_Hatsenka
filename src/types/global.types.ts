import React from "react";

export type MenuType = {
  id: string;
  meal: string;
  category: string;
  area: string;
  instructions: string;
  img: string;
  price: number;
};

export type ComponentChildProp = {
  children: React.ReactNode;
};
