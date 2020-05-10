import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Preload = () => {
  return (
      <View>
        <Text>
            <ActivityIndicator color="#FB5" size={40} />
              Preload
        </Text>
      </View>
  );
}

export default Preload;