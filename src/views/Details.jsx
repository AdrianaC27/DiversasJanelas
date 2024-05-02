import React from "react";
import { View,Text,Button } from "react-native";

export default props=>{
    return(
        <View style={{
            Flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Text>Details</Text>
            <Button title="next" onPress={()=>props.navigation.navigate('Configuracao')}/>
            

        </View>


    )
}