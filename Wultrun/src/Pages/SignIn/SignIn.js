import React from 'react';
import { Text } from 'react-native';
import { Container, Button, Input,
    ContainerForm, Header, ContainerLogo,
    Form, TextButton, ButtonSignIn, ButtonSignUp,
} from './styles'

export default function SignIn() {
 return (
   <Container>
       <Header>
           <ContainerLogo>
            <Text> Logo </Text>
           </ContainerLogo>
       </Header>
       <ContainerForm>

           <Form>
            <Input
                placeholder="Usuário"
            />

            <Input
                placeholder="Senha"
            />

            <ButtonSignIn>
                <TextButton> Acessar </TextButton>
            </ButtonSignIn>

            <ButtonSignUp>
                <TextButton> Criar Conta </TextButton>
            </ButtonSignUp>
           </Form>

       </ContainerForm>
   </Container>
  );
}