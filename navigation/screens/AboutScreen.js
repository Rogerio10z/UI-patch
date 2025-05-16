import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header logo={require('../assets/images/logo2.png')} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>
        
        <Image 
          source={require('../assets/images/empresa.png')} 
          style={styles.image}
          resizeMode="cover"
        />
        
        <Text style={styles.text}>
 A UI Patch, fundada em 2021, é uma empresa especializada em design de interfaces (UI) e experiência do usuário (UX), oferecendo soluções digitais inovadoras que unem estética, funcionalidade e tecnologia. Com um time multidisciplinar de designers, desenvolvedores e estrategistas, a UI Patch atua na criação de interfaces responsivas, sistemas de design escaláveis e prototipagem interativa para web, mobile e outras plataformas digitais.

Seu foco é transformar ideias em produtos digitais intuitivos, acessíveis e visualmente impactantes, sempre colocando o usuário no centro do processo criativo. Ao longo dos anos, a empresa tem se destacado por seu compromisso com a inovação, a entrega ágil e a personalização, atendendo startups, agências e grandes marcas que buscam soluções de alto padrão em design digital.

A UI Patch também investe em pesquisa de tendências e boas práticas de usabilidade, mantendo-se atualizada com as evoluções do mercado e contribuindo ativamente para a evolução da experiência digital no Brasil e no exterior.
        </Text>
        
        <Text style={styles.subtitle}>Nossos Valores</Text>
        <Text style={styles.text}>
          💡 Inovação contínua{'\n'}
          👥 Foco no usuário{"\n"}
          🎯 Excelência em design{'\n'}
          🤝 Colaboração e transparência{'\n'}
          🚀 Agilidade com qualidade{'\n'}
          🌍 Impacto positivo


        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default AboutScreen;