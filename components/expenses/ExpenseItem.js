import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/Date";


function ExpenseItem({id, description, amount, date}) {
// so,e comment

    const navigation = useNavigation();

    function expensePressHandler(){
        console.log("Expense Item pressed", description);
        navigation.navigate("ManageExpense", {expenseId: id});
    }

  return (
    <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
            <Text style={[styles.textBase, styles.description]}>{description}</Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2)}</Text>
          </View>
        </View>
    </Pressable>
  );
}  

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.3,
    },
    expenseItem:{
        padding: 8,
        marginVertical: 4,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
        
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
        color: GlobalStyles.colors.accent500,
    },
    amountContainer: {
        width: 80,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    amount:{
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    }
});

export default ExpenseItem;
