import React, { useContext, useState } from "react";
import { AppContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const { addTransaction } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text: text,
      amount: amount,
      transactionType: transactionType,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
    setTransactionType("");
   
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col py-2 px-6 md:px-10 gap-1">
      <div>
        <h2 className="text-xl font-bold ">Add new transaction</h2>
        <hr className="bg-slate-400 h-[2px] mt-2 w-full" />
      </div>

      <form onSubmit={onSubmit} className=" px-2 py-1">
        <div className="flex items-center">
          <div>
            <h2 className=" mb-1">Text</h2>
            <input
              type="text"
              required
              value={text}
              placeholder="Enter item name"
              onChange={(e) => setText(e.target.value)}
              className=" outline-none focus:ring-2 rounded-sm py-1 px-2 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-10 mt-4">
          {/* Radio buttons for selecting "Income" or "Expense" */}
          <label>
            <input
              type="radio"
              value="income"
              name="transactionType"
              required
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
              className="mx-1"
            />
            Income
          </label>

          <label>
            <input
              type="radio"
              value="expense"
              name="transactionType"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
              className="mx-1"
            />
            Expense
          </label>
        </div>

        {/* Input field for entering the amount */}
        <div className="py-2 ">
          <label>
            Amount <br />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
              className="mt-2 outline-none focus:ring-2 rounded-sm py-1 px-2"
            />
          </label>
        </div>
        <button className="w-full bg-purple-500 py-2 px-2  hover:bg-purple-600 text-white text-lg mt-4 rounded-md hover:cursor-pointer">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
