import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { View } from 'react-native';

import { 
    Container, Input, TextButton, Button, Form,
    Title, CantainerForm, TextFooter, TextSignUp,
    ContainerTextButton,
 } from './styles';

export default function SignUp({ navigation }) {
 return (
    <Container>
        
    <Button onPress={()=> navigation.navigate("SignIn")}>
        <Icon style={{ margin: 10,  }} name="ios-arrow-round-back" color="#FFB333" size={50} />
    </Button>
    <CantainerForm>
     <Form>
         <Title> Criar Conta </Title>
         <Input
             placeholder="Usuário"
         />

         <Input
             placeholder="Senha"
         />

         <Button>
             <ContainerTextButton>
                 <TextButton> Cadastrar </TextButton>
                 <Icon name="ios-arrow-round-forward" color="#FFF" size={20} />
             </ContainerTextButton>
         </Button>

         

         
     </Form>

     
    </CantainerForm>
     
    <Button onPress={()=> navigation.navigate("SignUp") }>
         <TextFooter> Ainda não possui conta?  <TextSignUp> Criar Conta </TextSignUp> </TextFooter>
     </Button>
</Container>
  );
}