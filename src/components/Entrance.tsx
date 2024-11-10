import React, {useState, useEffect} from "react";
import { Text, View, Button, FlatList, TextInput } from 'react-native';
import { ref, push, onValue } from 'firebase/database';
import { database } from "../firebase";

export default function Entrance() {
  const [message, setMessage]=useState('');
  const [messages, setMessages]=useState<any[]>([]);

  useEffect(()=>{
    const messagesRef=ref(database, 'messages/');
    onValue(messagesRef, (snapshot)=>{
      const data=snapshot.val();
      const messagesArray = data ? Object.values(data) : [];
      setMessages(messagesArray)
    })
  }, [])

  const handleSend=()=>{
    const messagesRef=ref(database, 'messages/');
    push(messagesRef, {text:message, timestamp:Date.now()});
    setMessage('');
  }

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={ handleSend }/>
    </View>
  );
}