import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";

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

  function deleteExpenseHandler() {}

  return (
    <View style={styles.container}>
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
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpenses;
