import React from 'react';
import { Text } from 'react-native';
import { Container, Input,
    ContainerForm, Header, ContainerLogo,
    Form, TextButton, ButtonSignIn, ButtonSignUp,
    Button, ButtonGoogle,
} from './styles'

export default function SignUn({ navigation }) {
 return (
   <Container>
       
       <Header>
            <Button onPress={()=> navigation.navigate('SignIn') }>
                <Text> Voltar </Text>
            </Button>
           <ContainerLogo>
            <Text> Logo </Text>
           </ContainerLogo>
           <Text> SignUp </Text>
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
                <TextButton> Criar Conta </TextButton>
            </ButtonSignIn>

            <ButtonSignUp>
                <TextButton> Facebook </TextButton>
            </ButtonSignUp>

            <ButtonGoogle>
                <TextButton> Google </TextButton>
            </ButtonGoogle>
           </Form>

       </ContainerForm>
   </Container>
  );
}