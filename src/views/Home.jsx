import React from "react";
import { View,Text,Button } from "react-native";

export default props=>{
    return(
        <View style={{
            Flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Text>Home</Text>
            <Button title="Va para Details" onPress={()=>props.navigation.navigate('Details')}/>
            

        </View>


    )
}