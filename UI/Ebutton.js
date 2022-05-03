import {StyleSheet,  View, Pressable, Text   } from "react-native";

import { GlobalStyles } from "../constants/styles";

function Ebutton({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text  style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 4,
        padding: 4,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat:{      
        
    },
    flatText:{
        color: GlobalStyles.colors.primary200,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.3,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
    }
     
});

export default Ebutton;
