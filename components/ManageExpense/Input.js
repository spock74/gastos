import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, style }) {
 let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style  ]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
    paddingBottom: 4,
  },
  input:{
    borderColor: GlobalStyles.colors.primary100,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

});

export default Input;
