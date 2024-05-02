import React from "react";
import { SafeAreaView,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./views/Splash";
import Login from "./views/Login";
import Details from "./views/Details";
import Configuracao from "./views/Configuracao";
import Home from "./views/Home";

const Stack = createNativeStackNavigator();

export default props=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator>
                    
                </Tab.Navigator>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={Splash}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Home"  component={Home}/> 
                    <Stack.Screen name="Details" component={Details}/>
                    <Stack.Screen name="Configuração" component={Configuracao}/>

                </Stack.Navigator>

            </NavigationContainer>

        </SafeAreaView>
        
    )
}