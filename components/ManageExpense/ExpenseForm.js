import Input from "./Input";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Ebutton from "../../UI/Ebutton";
import {GlobalStyles} from '../../constants/styles';
import { getFormattedDate } from "../../util/Date";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  console.log('defaultValues', defaultValues);

  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true, //!!defaultValues,
    },
    date: {
      //@TODO INTL
      // value: defaultValues ? defaultValues.date : new Intl.DateTimeFormatDate('pt-BR').format(new Date()),
      value: defaultValues ? defaultValues.date : new Date().toISOString().split('T')[0],
      isValid: true, //!!defaultValues,
    },
    description: {
      value: defaultValues? defaultValues.description : '',
      isValid: true, //!!defaultValues,
      }
    });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    console.log('inputIdentifier', inputIdentifier);
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +Number.parseFloat(inputs.amount.value),
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    // validacao
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      new Date(expenseData.date) instanceof Date &&
      !isNaN(new Date(expenseData.date).getTime());
    const descriptionIsValid = expenseData.description.trim().length > 0;

  if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
    setInputs((curInputs) => {
      return {
        amount: { value: curInputs.amount.value, isValid: amountIsValid },
        date: { value: curInputs.date.value, isValid: dateIsValid },
        description: { value: curInputs.description.value, isValid: descriptionIsValid },
      }});
    return;
  }
  onSubmit(expenseData);
}

  const isFormInvalid = 
    !inputs.amount.isValid || 
    !inputs.date.isValid || 
    !inputs.description.isValid;

  return (
    <View>
      <Text style={styles.title}>Gasto</Text>
      <View style={styles.inputsRows}>
        <Input
          style={styles.rowInput}
          label="Valor"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0.00",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          />
        <Input
          style={styles.rowInput}
          label="Data"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            maxLegth: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value.toString(),
          }}
        />
      </View>
      <Input
        style={styles.inputMultiLine}
        label="Descrição"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />

      {isFormInvalid && <Text style={styles.errorText}>Valores invalidos</Text>}

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
  button: {
    minWidth: 120,
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: GlobalStyles.colors.error500,
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
    backgroundColor: GlobalStyles.colors.error50,
    padding: 10,
    textAlign: "center",
    borderRadius: 0,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  }
});

export default ExpenseForm;
