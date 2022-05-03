import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";

function AllExpenses() {
  return (
      <ExpensesOutput expensesPeriod="total" />
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

