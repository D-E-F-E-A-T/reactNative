import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Input,
    ContainerForm, Header, ContainerLogo,
    Form, TextButton, ButtonSignIn, ButtonSignUp,
    Button, ButtonGoogle,
} from './styles'

export default function SignUn({ navigation }) {
 return (
   <Container>
       
       <Header>
            
           <ContainerLogo>
            <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/avatar.png')} />
           </ContainerLogo>
           <Text style={{ color:'#FFF', fontSize: 20, fontWeight: 'bold'}}> Crie sua conta </Text>
       </Header>
       <ContainerForm>

           <Form>
            <Input
                placeholder="Usuário"
            />

            <Input
                placeholder="Senha"
                secureTextEntry={true}
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

            <Button onPress={()=> navigation.navigate('SignIn') }>
                <Text style={{ fontSize: 17, color: '#CCC' }}> Já possuo uma conta </Text>
            </Button>
           </Form>

       </ContainerForm>
   </Container>
  );
}