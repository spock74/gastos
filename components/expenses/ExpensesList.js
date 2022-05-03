import { FlatList , StyleSheet, Text, View} from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData){
    return  <ExpenseItem {...itemData.item}/>;
}

function ExpensesList({expenses}){
    return <FlatList 
        data={expenses} 
        renderItem={renderExpenseItem}
        keyExtractor={(item)=> item.id}/>
}

const styles = StyleSheet.create({
    expenseItem: {
        backgroundColor: '#eee',
    },
});

export default ExpensesList;

   