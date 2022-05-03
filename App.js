import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
    
 
function ExpensesOverview() {

    const navigation = useNavigation();
    function navigateToManageExpenseHandler() {
      console.log('Navigating to ManageExpenses plus');
        navigation.navigate('ManageExpense');
    }

    return (
      <BottomTabs.Navigator screenOptions={{
        headerStyle: {height: 80, backgroundColor: GlobalStyles.colors.primary500},  
        headerTintColor: '#fff',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight:({tintColor}) => <IconButton name="md-add-circle" color={GlobalStyles.colors.primary50} size={36}  onPress={navigateToManageExpenseHandler}/>,
      }}>
        <BottomTabs.Screen 
          name="RecentExpenses"
          component={RecentExpenses}   
          options={{
            title: "Gastos Recentes",
            tabBarLabel: "Recentes",
            tabBarIcon: ({color, size}) => <Ionicons name="hourglass" size={size} color={color} />
          }}/>
        <BottomTabs.Screen 
          name="AllExpenses" 
          component={AllExpenses} 
          options={{
            title: "Todos os Gastos",
            tabBarLabel: "Todos",
            tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color} />
          }}/>
      </BottomTabs.Navigator>
    );
}    

export default function App() {
  return (  
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {height: 80, backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: '#fff',
        }}>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} 
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="ManageExpense" component={ManageExpenses} options={{
            
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
} 
  
