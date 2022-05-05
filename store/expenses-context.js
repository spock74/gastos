import { createContext, useReducer } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "Gás",
      amount: 100.0,
      date: new Date("2022-05-05"),
    },
    {
      id: "e2",
      description: "Par de sapatos",
      amount: 299.99,
      date: new Date("2021-02-02"),
    },

  ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
        const id = uuidv4();
      return [...state, {...action.payload, id: id}];
    
    case "DELETE_EXPENSE":  
      return state.filter((expense) => expense.id !== action.payload);
    
    case "UPDATE_EXPENSE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {  ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD_EXPENSE", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  }

  function updateExpense(id, expensesData) {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: { id: id, data: expensesData },
    });
  }


  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };


  return <ExpensesContext.Provider  value={value}>{children}</ExpensesContext.Provider>;
} 
 
export default ExpensesContextProvider;
