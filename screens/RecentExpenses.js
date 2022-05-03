import { View, Text, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function RecentExpenses(){  
    return (
            <ExpensesOutput expensesPeriod="Últimos 7 dias" />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
   
export default  RecentExpenses;  



