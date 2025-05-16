import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const ContactFormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode enviar os dados para um backend ou salvar localmente
    console.log('Contato cadastrado:', { name, email, phone });
    Alert.alert('Sucesso', 'Contato cadastrado com sucesso!');

    // Limpar os campos
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Contato</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FA4616',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactFormScreen;
