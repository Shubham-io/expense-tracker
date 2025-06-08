import React, { useContext, useState } from "react";
import { AppContext } from "../context/GlobalContext";
import { FaTrash } from "react-icons/fa";

const History = () => {
  const { transactions, deleteTransaction } = useContext(AppContext);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col items-start py-2 px-6 md:px-10">
      {transactions.length > 0 ? (
        <div className=" w-full">
          <h2 className="text-xl font-bold ">History</h2>
          <hr className="bg-slate-400 h-[2px] mt-2" />{" "}
        </div>
      ) : (
        <div></div>
      )}

      {transactions
        .slice(0, showMore ? transactions.length : 3)
        .map((transaction) => (
          <div key={transaction.id} className="w-full space-y-2 mt-4">
            <div className={`flex  justify-between`}>
              <div className="p-2 w-full  bg-white hover:cursor-pointer rounded-sm shadow-md flex justify-between">
                <span> {transaction.text}</span>
                <span>
                  {transaction.transactionType === "income"
                    ? `+${transaction.amount}`
                    : `-${transaction.amount}`}
                </span>
              </div>
              <div
                className={`w-[4px] ${
                  transaction.transactionType === "income"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></div>
              <button
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}

      {transactions.length > 3 && (
        <button
          className="mt-4 p-2 bg-purple-500  text-white rounded-md hover:bg-purple-600"
          onClick={handleShowMore}
        >
          {showMore ? "show less" : "show more"}
        </button>
      )}
    </div>
  );
};

export default History;
