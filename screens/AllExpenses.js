import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {

  const expensesCtx = useContext(ExpensesContext);


  return ( 
      <ExpensesOutput 
        expenses={expensesCtx.expenses} 
        expensesPeriod="total" 
        fallbackText="Nenhum gasto registrado."/>
        

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default AllExpenses;

