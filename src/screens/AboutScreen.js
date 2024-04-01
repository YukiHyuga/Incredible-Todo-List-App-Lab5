import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>Incredible To Do List App</Text>
        <Text>By Dave Luna</Text>
        <Text>March 31 2024</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
