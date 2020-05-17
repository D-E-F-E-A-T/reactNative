import React from 'react';
import { View, TouchableOpacity, Image, } from 'react-native';

import { Card } from './styles';

export default function Cards({ data }){
    return(
      <>
      <View style={{ flexDirection:'row' }}>
            <TouchableOpacity onPress={()=> data.callComponent()}>
            <Card>
              <Image style={{ width: 70, height: 70, }} source={require('../../assets/img/tecnologica.png')} />
            </Card>
            </TouchableOpacity>
  
            <TouchableOpacity>
            <Card>
              <Image style={{ width: 70, height: 70, }} source={require('../../assets/img/utensilios.png')} />
            </Card>
            </TouchableOpacity>
          </View>
  
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity>
            <Card>
              <Image style={{ width: 70, height: 70, }} source={require('../../assets/img/escritorio.png')} />
            </Card>
            </TouchableOpacity>
  
            <TouchableOpacity>
            <Card>
              <Image style={{ width: 70, height: 70, }} source={require('../../assets/img/esportes-e-competicao.png')} />
            </Card>
            </TouchableOpacity>
          </View>
  
          <View style={{ flexDirection:'row' }}>
  
          <TouchableOpacity>
            <Card>
              <Image style={{ width: 70, height: 70, }} source={require('../../assets/img/literatura.png')} />
            </Card>
            </TouchableOpacity>
  
            <TouchableOpacity>
            <Card>
              <Image style={{ width: 70, height: 70, }} source={require('../../assets/img/mesquita-id-kah.png')} />
            </Card>
            </TouchableOpacity>
          </View>
          </>
    );
  }