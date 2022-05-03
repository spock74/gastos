import {View, Text, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function ExpensesSummary({expenses, periodName}) {
  const expensesSum = expenses.reduce((sum, expense)=>{
      return sum + expense.amount;
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}:</Text>
      <Text style={styles.sum}>R$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 10,
    borderRadius: 6,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period:{
    fontSize: 14,
    fontWeight:'bold',
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  }
});

export default ExpensesSummary;
  