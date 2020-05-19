import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Picker, } from 'react-native';

import { Container, Input,
    ContainerForm, Header, ContainerFotoPerfil,
    TextButton, ButtonSignIn, ButtonSignUp,
    Button, ButtonGoogle, TextName, BackgroundFoto,
} from './styles';

export default function ConfigProfile() {
 return (
   <Container>
       
    <Header>
        <TextName>  </TextName>
    </Header>

    <ContainerFotoPerfil>
        <BackgroundFoto>
            <Icon name="md-contact" color="#CCC" size={150} />
        </BackgroundFoto>
    </ContainerFotoPerfil>

    <Input
        placeholder="Nome"
    />

    <Input
        placeholder="Email"
    />

    <Input
        placeholder="Senha"
    />

    

    <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>

        <Picker
            selectedValue="Teste"
            
        >
            <Picker.Item label="teste" value="Teste" />
        </Picker>

        <Input
            style={{ width: 100, }}
            placeholder="Sexo"
        />
    </View>

    <Input
        placeholder="Telefone"
    />

    
   </Container>
  );
}