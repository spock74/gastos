import {Pressable} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({name, size, color, onPress}){
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={name} size={size} color={color}  />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.3,
    },
});

export default IconButton;
