import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
// FlatList é otimizado para listas longas (renderiza apenas itens visíveis)
import Header from '../components/Header';

const products = [
  // Array de objetos com dados dos produtos
  {
    id: '1', // Chave única obrigatória
    name: 'UiPath Studio',
    description: ' Ambiente de desenvolvimento...',
    image: require('../assets/images/studio.jpg'),
  },
  // ... outros produtos
];

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo2.png')} />
      
      <FlatList
        data={products} // Fonte de dados
        keyExtractor={(item) => item.id} // Extrai chaves únicas
        renderItem={({ item }) => ( // Como renderizar cada item
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent} // Estilo da lista
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 20,
  },
  productCard: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productInfo: {
    padding: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProductsScreen;