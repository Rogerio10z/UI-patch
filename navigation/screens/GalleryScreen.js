import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
   
  
];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTo({ x: width * currentIndex, animated: false });
      }, 0);
    }
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Imagens</Text>

      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.gallery}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openModal(index)}>
            <Image source={item} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
      />

      <Modal visible={modalVisible} transparent={false}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map((img, index) => (
            <View key={index} style={styles.fullscreenContainer}>
              <Image source={img} style={styles.fullscreenImage} />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.closeButton}
        >
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  gallery: { padding: 10 },
  thumbnail: {
    width: '48%',
    height: 150,
    margin: '1%',
    borderRadius: 10,
  },
  fullscreenContainer: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  closeText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
