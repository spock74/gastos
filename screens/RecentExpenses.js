import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function RecentExpenses(){  
    const expensesCtx = useContext(ExpensesContext);

    
    function getDateMinusDays(date_, days){
        return new Date( date_.getFullYear(), 
        date_.getMonth(), 
        date_.getDate() - days);
    }
   
    // const date = new getDateMinusDays(recentExpenses, 0);
    // recentExpenses.date = date;
    /// filter for recent expenses
    const recentExpenses = expensesCtx.expenses.filter(expense => {
        const today = new Date();

        const sevenDaysAgo= getDateMinusDays(today, 7);
        return expense.date >= sevenDaysAgo;
    });
    
    
    return (
            <ExpensesOutput z={console.log('recente', recentExpenses)} 
                            expenses={recentExpenses} 
                            expensesPeriod="Últimos 7 dias" 
                            fallbackText="Nenhum gasto registrado nos últimos 7 dias."/>
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



