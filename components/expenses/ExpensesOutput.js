import { useContext } from "react";
import ExpensesList from "./ExpensesList";
import { View, StyleSheet, Text} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

import { ExpensesContext } from "../../store/expenses-context";


function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  } 
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color:'#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
  },
});


export default ExpensesOutput;
