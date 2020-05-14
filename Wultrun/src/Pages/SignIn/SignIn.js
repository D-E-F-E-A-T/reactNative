import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Input,
    ContainerForm, Header, ContainerLogo,
    Form, TextButton, ButtonSignIn, ButtonSignUp,
} from './styles'

export default function SignIn({ navigation }) {
 return (
   <Container>
       <Header>
           <ContainerLogo>
            <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/avatar.png')} />
           </ContainerLogo>
           <Text style={{ color:'#FFF', fontSize: 20, fontWeight: 'bold', borderBottomColor: '#FFF', borderBottomWidth: 0.3, borderTopColor: '#FFF', borderTopWidth: 0.3, marginTop: 5}}> Wultrun </Text>
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