import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "Gás",
      amount: 100.0,
      date: new Date("2022-04-15"),
    },
    {
      id: "e2",
      description: "Par de sapatos",
      amount: 299.99,
      date: new Date("2022-01-01"),
    },
    {
      id: "e3",
      description: "Aluguel",
      amount: 700.0,
      date: new Date("2022-04-05"),
    },
    {
      id: "e4",
      description: "Mercado",
      amount: 356.7,
      date: new Date("2022-04-10"),
    },
    {
      id: "e5",
      description: "Livro",
      amount: 45.0,
      date: new Date("2022-03-12"),
    },
    {
      id: "e6",
      description: "Gás",
      amount: 100.0,
      date: new Date("2022-04-25"),
    },
    {
      id: "e7",
      description: "Par de sapatos",
      amount: 299.99,
      date: new Date("2022-01-01"),
    },
    {
      id: "e8",
      description: "Aluguel",
      amount: 700.0,
      date: new Date("2022-04-05"),
    },
    {
      id: "e9",
      description: "Mercado",
      amount: 356.7,
      date: new Date("2022-04-10"),
    },
    {
      id: "e10",
      description: "Livro",
      amount: 45.0,
      date: new Date("2022-03-12"),
    },
  ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updadeExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
        const id = create_UUID();
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

  function updateExpense(id, updates) {
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


  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
} 
 
export default ExpensesContextProvider;
