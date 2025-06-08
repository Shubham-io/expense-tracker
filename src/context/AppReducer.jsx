export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
        // returning new object 
      return {
        // copy the current state
        ...state,
        // filering the transaction that needed to be deleted 
        transactions: state.transactions.filter(
          (transaction) => transaction.id != action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        // adding new transaction and copying the old transactions 
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
