import React from "react";
import { View,Pressable,Image } from "react-native";
import { Button } from "react-native-paper";

export default props=>{
    return(
    
        <View style={{flex:1,
                    backgroundColor:"#7EA1F7"}}>

<Pressable style={{
                alignItems:'center',
                justifyContent:'center',
                marginTop: 70 }}>
                
                <Image style={{ width:"40%",height:40,padding:100,}}
                    source={require('../Imagens/Pessoa.png')}/>   

            </Pressable>

                <View>
                    <Button style={{
                        backgroundColor:'#F4538A',
                        margin:20
                    }}onPress={()=>props.navigation.navigate('Login')}textColor="white">Email

                    </Button>
                
                </View>   
                <View>            
                    <Button style={{
                        backgroundColor:'#F4538A',
                        margin:20
                    }}onPress={()=>props.navigation.navigate('Login')}textColor="white">SENHA
                    </Button>
                    
                
                </View>       

                <View>            
                    <Button style={{
                        backgroundColor:'#F4538A',
                        margin:20
                    }}onPress={()=>props.navigation.navigate('Home')}textColor="white">Entrar
                    </Button>
                    
                
                </View>          


        </View>
    )
}