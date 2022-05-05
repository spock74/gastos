import Input from "./Input";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Ebutton from "../../UI/Ebutton";


function ExpenseForm({submitButtonLabel, onCancel, onSubmit}) {
  const [inputValues, setInputValue] = useState({
    amount: "",
    dste: "",
    description: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValue((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

 function submitHandler() {
   const expenseData = {
      amount: + Number.parseFloat(inputValues.amount),
      date: new Date(inputValues.date),
      description: inputValues.description,
   }
   onSubmit(expenseData);
 }

  return (
    <View>
      <Text style={styles.title}>Gasto</Text>
      <View style={styles.inputsRows}>
        <Input
          style={styles.rowInput}
          label="Valor"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0;00",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Data"
          textInputConfig={{
            placeholder: "DD/MM/AAAA",
            maxLegth: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Descrição"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttons}>
        <Ebutton style={styles.button} mode="flat" onPress={onCancel}>
          Cancelar
        </Ebutton>
        <Ebutton style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Ebutton>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  inputsRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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

export default ExpenseForm;
