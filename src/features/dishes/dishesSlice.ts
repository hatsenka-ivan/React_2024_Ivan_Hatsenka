import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChosenDish } from "src/types/global.types";

type Dish = { Dishes: ChosenDish[]; quantity: number };
const initialState: Dish = {
  Dishes: [],
  quantity: 0,
};

const DishesSlice = createSlice({
  name: "Dishes",
  initialState,
  reducers: {
    addDish(state, action: PayloadAction<ChosenDish>) {
      const dish = state.Dishes
          .map((dish) => dish.id)
          .findIndex((id) => id === action.payload.id);
      if (dish !== -1) {
        state.Dishes[dish].quantity += action.payload.quantity;
      } else {
        state.Dishes.push(action.payload);
      }
      state.quantity += action.payload.quantity;
    },
    removeDish(state, action: PayloadAction<ChosenDish>) {
      const index = state.Dishes.findIndex(
          (dish) => dish.id === action.payload.id,
      );
      state.Dishes.splice(index, 1);
      state.quantity -= action.payload.quantity;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ dish: ChosenDish; quantity: number }>,
    ) {
      const dishIndex = state.Dishes.findIndex(
        (dish) => dish.id === action.payload.dish.id,
      );
      state.quantity =
        state.quantity -
        state.Dishes[dishIndex].quantity +
        action.payload.quantity;
      state.Dishes[dishIndex].quantity = action.payload.quantity;
    },
  },
});


export const { addDish, removeDish, updateQuantity } = DishesSlice.actions;

export default DishesSlice.reducer;
