import ExpensesList from "./ExpensesList";
import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

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


function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
