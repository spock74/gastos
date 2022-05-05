import { useContext } from "react";
import ExpensesList from "./ExpensesList";
import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

import { ExpensesContext } from "../../store/expenses-context";


function ExpensesOutput({ expenses, expensesPeriod }) {

  const expensesCtx = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 9,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});


export default ExpensesOutput;
