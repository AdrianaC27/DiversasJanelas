import React from "react";
import { Text,View,Image,Pressable} from "react-native";
import { Button } from "react-native-paper";

export default props=>{
    return(
        <View style={{
            flex:1, backgroundColor:"#7EA1F7"
        }}>
            <Pressable style={{
                alignItems:'center',
                justifyContent:'center',
                marginTop: 70 }}>
                
                <Image style={{ width:"40%",height:40,padding:100,}}
                    source={require('../Imagens/cadastro.png')}/>   

            </Pressable>
        
            <View>
            
                    <Button style={{
                        backgroundColor:'#F4538A',
                        margin:20
                    }}onPress={()=>props.navigation.navigate('Login')}textColor="white">LOGAR

                    </Button>
                    
                
            </View>        
                     
        </View>
    
        
        
       
    )
}