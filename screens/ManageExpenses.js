import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";
import Ebutton from "../UI/Ebutton";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editar Gasto" : "Adicionar Gasto",
      headerStyle: isEditing
        ? { height: 80, backgroundColor: GlobalStyles.colors.gray700 }
        : { height: 80, backgroundColor: GlobalStyles.colors.error500 },
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {

    navigation.goBack();
  }
 
  function cancelHandler(){

    navigation.goBack();
  }; 

  function confirmHandler(){

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Ebutton style={styles.button} mode="flat" onPress={cancelHandler}>Cancelar</Ebutton>
        <Ebutton style={styles.button} onPress={confirmHandler}>{isEditing ? 'Editar' :  'Adicionar'}</Ebutton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="md-trash-outline"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  button:{
    minWidth:120,
    marginHorizontal: 16,
  },
  buttons:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export default ManageExpenses;
