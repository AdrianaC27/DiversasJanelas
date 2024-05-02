import React from "react";
import { View,Text,Button } from "react-native";

export default props=>{
    return(
        <View style={{
            Flex:1,
            alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Text>Sobre Nós</Text>
            <Button title="Next" onPress={()=>props.navigation.navigate('Home')}/>
            

        </View>


    )
}