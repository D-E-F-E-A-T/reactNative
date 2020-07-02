import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View } from 'react-native';

import { 
    Container, Input, TextButton, Button, Form,
    Title, CantainerForm, ContainerTextButton, Header, 
 } from './styles';

export default function SignUp({ navigation }) {
 return (
    <Container>
    
    <Header>
    <Button onPress={()=> navigation.navigate("SignIn")}>
        <Icon style={{ margin: 10,  }} name="arrow-left" color="#FFF" size={40} />
    </Button>
    </Header>
    <CantainerForm>
     <Form>
         <View style={{ flexDirection:'row', alignItems:'center' }}>
            <Icon name="account" color="#FFF" size={25} />
            <Title> Criar Conta </Title>
         </View>

         <Input
             placeholder="Nome"
         />

         <Input
             placeholder="CPF"
         />

        <Input
             placeholder="Telefone"
         />

        <Input
             placeholder="E-mail"
         />

         <Button>
             <ContainerTextButton>
                 <TextButton> Cadastrar </TextButton>
                 <Icon name="arrow-right" color="#FFF" size={20} />
             </ContainerTextButton>
         </Button>

         

         
     </Form>

     
    </CantainerForm>
</Container>
  );
}