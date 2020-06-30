import React from 'react';
import { ScrollView } from 'react-native';

import { 
    Container, Title, InputForm, Button, TextButton,
    Header, 
} from './styles';

export default function ScreenEnpreendedor() {
 return (
   <Container>
       <Header>
        <Title> Bem-Vindo </Title>
        <Title> Empreendedor </Title>
       </Header>
       <ScrollView style={{ width:'90%', margin: 10, }}>
        <InputForm placeholder="Nome" />
        <InputForm placeholder="E-mail" />
        <InputForm placeholder="Estado" />
        <InputForm placeholder="Cidade" />
        <InputForm placeholder="Cidade" />
        <InputForm placeholder="Teefone" />
        <InputForm placeholder="Endereço" />
        <InputForm placeholder="Número" />
        <InputForm placeholder="Especialidade" />

        <Button>
            <TextButton> Próximo </TextButton>
        </Button>
    </ScrollView>
   </Container>
  );
}