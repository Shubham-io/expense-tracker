import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// initital state
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

// create context
export const AppContext = createContext(initialState);

// provider component
export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // Update localStorage whenever the transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
