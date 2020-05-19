import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, Image, View, } from 'react-native';
import { Container, Input,
    ContainerForm, Header, ContainerLogo,
    Form, TextButton, ButtonSignIn, ButtonSignUp, ContainerInput,
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
            <ContainerInput>
                <Icon style={{marginRight: 10,}} name="md-contact" color="#CCC" size={20} />

                <Input
                    placeholder="Usuário"
                />
            </ContainerInput>

            <ContainerInput>
                <Icon style={{marginRight: 10,}} name="md-mail" color="#CCC" size={20} />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </ContainerInput>

            <ButtonSignIn onPress={()=> navigation.navigate('Tabs')}>
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