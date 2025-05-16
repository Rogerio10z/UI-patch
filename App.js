import React from 'react';
// Importa o React, biblioteca fundamental para criar componentes
import { NavigationContainer } from '@react-navigation/native';
// NavigationContainer é o componente que gerencia o estado de navegação
import AppNavigator from './navigation/appNavigator';
// Importa nosso componente de navegação personalizado

export default function App() {
  // Componente principal do aplicativo
  return (
    <NavigationContainer>
      {/* Envolve toda a navegação do app */}
      <AppNavigator />
      {/* Renderiza nosso sistema de navegação */}
    </NavigationContainer>
  );
}