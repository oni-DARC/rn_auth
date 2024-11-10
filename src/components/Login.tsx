import React from "react";
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useForm, Controller} from 'react-hook-form';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

interface LoginData{
  email:string;
  password:string;
}

export default function Login({navigation}:any) {
  const {control, handleSubmit} = useForm<LoginData>();

  const onSubmit=(data:LoginData)=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential)=>{
      console.log("Ingreso Existoso");
      alert("Ingreso existoso");
      navigation.navigate('Entrance')
    })
    .catch((error)=>{
      console.log(error)
      console.log("No se pudo ingresar");
      alert("Usuario no encontrado, registrate!!!");
    })
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({field:{onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder="Ingrese email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field:{onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder="Ingrese password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Button title="Registro" onPress={()=> navigation.navigate('Register') }/>
    </View>
  )  
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:10,
    padding:20,
    width:'80%'
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:30,
    color:'red'
  },
  input:{
    height:50,
    borderColor:"#ccc",
    backgroundColor:"#fcf",
    color:"333",
    fontSize:18
  },
  button:{
    backgroundColor:"#0288d1",
    borderRadius:10
  },
  buttonText:{
    textAlign:"center",
    fontSize:18
  }
})