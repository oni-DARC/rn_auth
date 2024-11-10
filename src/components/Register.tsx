import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useForm, Controller} from 'react-hook-form';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

interface RegisterData{
  email:string;
  password:string;
}

export default function Register({navigation}:any) {
  const {control, handleSubmit} = useForm<RegisterData>();
  const onSubmit=(data:RegisterData)=>{
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential)=>{
      console.log("Registro con éxitos");
      navigation.navigate("Login");
    })
    .catch((error)=>{
      console.log("No se registro")
    })
  };

  return(
    <View>
      <Text>Registro</Text>
      <Controller
        control={control}
        name="email"
        render={({field:{onChange, onBlur, value}})=>(
          <TextInput
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
            placeholder="Ingrese password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      <Button title="Registro" onPress={handleSubmit(onSubmit)}></Button>
      <Button title="Login" onPress={()=> navigation.navigate('Login') }/>
    </View>
  )  
}