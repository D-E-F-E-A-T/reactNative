import React from 'react';
import { Text } from 'react-native';
import { Container, Input,
    ContainerForm, Header, ContainerLogo,
    Form, TextButton, ButtonSignIn, ButtonSignUp,
} from './styles'

export default function SignIn({ navigation }) {
 return (
   <Container>
       <Header>
           <ContainerLogo>
            <Text> Logo </Text>
           </ContainerLogo>
           <Text style={{ color:'#FFF', fontSize: 20, fontWeight: 'bold'}}> Wultrun </Text>
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

            <ButtonSignUp onPress={()=> navigation.navigate('SignUp')}>
                <TextButton style={{color:'#45aaf2'}}> Criar Conta </TextButton>
            </ButtonSignUp>
           </Form>

       </ContainerForm>
   </Container>
  );
}