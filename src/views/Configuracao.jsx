import React from "react";
import { View,Text,Button } from "react-native";

export default props=>{
    return(
        <View style={{
            Flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Text>Configuração</Text>
            <Button title="Next" onPress={()=>props.navigation.navigate('SobreNos')}/>
            

        </View>


    )
}