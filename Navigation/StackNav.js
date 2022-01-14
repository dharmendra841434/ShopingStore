import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Pages/LoginScreen';
import RegistrationScreen from '../Pages/RegistrationScreen';
import ListofItems from '../Pages/ListofItems';


const MyStack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <MyStack.Navigator initialRouteName="Login" >
                <MyStack.Screen name='Login' component={LoginScreen}
                    options={{
                        headerShown: false
                    }} />
                <MyStack.Screen name='Reg' component={RegistrationScreen}
                    options={{
                        headerShown: false
                    }} />
                <MyStack.Screen name='list' component={ListofItems}
                    options={{
                        headerShown: false
                    }} />
            </MyStack.Navigator>
        </NavigationContainer>
    );
}
export default StackNav;