import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const FeatureItem = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    if (title === 'Descubra') {
      navigation.navigate('About');
    }
    if (title === 'Automatize') {
      navigation.navigate('Products');
    }
     if (title === 'Opere') {
      navigation.navigate('Contact');
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.featureItem,
        isHovered && styles.featureItemHovered,
      ]}
    >
      <Image source={image} style={styles.featureImage} />
      <Text style={[styles.featureTitle, isHovered && { color: '#fff' }]}>{title}</Text>
    </Pressable>
  );
};

const HomeScreen = () => {
  const bannerImages = [
    require('../assets/images/banner1.png'),
    require('../assets/images/banner2.png'),
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <ScrollView style={styles.container}>
      <Header logo={require('../assets/images/logo2.png')} />

      <Image 
        source={bannerImages[currentBannerIndex]}
        style={styles.banner}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à Nossa Marca</Text>
      </View>

      <View style={styles.featuresContainer}>
        <FeatureItem 
          image={require('../assets/images/Descubra.png')} 
          title="Descubra" 
        />
        <FeatureItem 
          image={require('../assets/images/automatize.png')} 
          title="Automatize" 
        />
        <FeatureItem 
          image={require('../assets/images/opere1.png')} 
          title="Opere" 
        />
      </View>
      
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  banner: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 25,
    flexWrap: 'wrap',
  },
  featureItem: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 999,
    transitionDuration: '300ms',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  featureItemHovered: {
    backgroundColor: '#FA4616',
    transform: [{ scale: 1.1 }],
    elevation: 10,
    shadowColor: '#FA4616',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  featureImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HomeScreen;
