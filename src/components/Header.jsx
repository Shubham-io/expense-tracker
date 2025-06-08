import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/GlobalContext";

const Header = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const { transactions } = useContext(AppContext);

  useEffect(() => {
    let totalBalance = 0;
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.transactionType === "income") {
        totalIncome += Number(transaction.amount);
        totalBalance += Number(transaction.amount);
      } else if (transaction.transactionType === "expense") {
        totalExpense += Number(transaction.amount);
        totalBalance -= Number(transaction.amount);
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalBalance);
  }, [transactions]);

  return (
    <header className="w-full bg-gray-100 flex flex-col justify-center items-center  px-6  md:px-10">
      <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
      <div className="space-y-3 mt-4 w-full ">
        <span>
          <p className="text-lg font-bold">YOUR BALANCE</p>
          <span className="text-4xl  font-bold">${balance}</span>
          {balance < 0 && (
            <span className=" text-red-500 font-bold ml-4">
              Your balance is below zero
            </span>
          )}
        </span>
        <div className="flex w-fit justify-center gap-12 bg-white py-4 px-6 shadow-md">
          <div>
            <h3>INCOME</h3>
            <h3 className="text-green-500 text-lg font-semibold">${income}</h3>
          </div>
          <div className="bg-slate-300 h-12 w-[2px] rounded-md"></div>
          <div>
            <h3>EXPENSE</h3>
            <h3 className="text-red-500 text-lg font-semibold">${expense}</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
