import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { Container, Input,
    ContainerForm, Header, ContainerFotoPerfil,
    TextButton, ButtonSignIn, ButtonSignUp,
    Button, ButtonGoogle, TextName
} from './styles'

export default function Profile({ navigation }) {

 const[nome, setNome] = useState('Manoel da Silva Junior');
 const[cargo, setCargo] = useState('Engenheiro');
 const[setor, setSetor] = useState('Edificações');
 const[email, setEmail] = useState('manoeljunior@wultrun.com.br');
 const[salario, setSalario] = useState('5800,00');
 const[tempoServico, setTempoServico] = useState('3');
 const[dataContrato, setDataContrato] = useState('05/02/2017');
 return (
   <Container>
       
       <Header>
            
           <ContainerFotoPerfil>
            <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/avatar.png')} />
           </ContainerFotoPerfil>
           <TextName> {nome} </TextName>
       </Header>
       <ContainerForm>

           
           <Input
                value={'Salário - R$ = '+salario}
                editable={false}
            />

            <Input
                value={'Cargo: '+cargo}
                editable={false}
            />

            <Input
                value={'Setor: '+setor}
                editable={false}
            />

            <Input
                value={'E-mail: '+email}
                editable={false}
            />

            <Input
                value={'Tempo de Empresa: '+tempoServico+' anos'}
                editable={false}
            />

            <Input
                value={'Data Contratação: '+ dataContrato}
                editable={false}
            />


       </ContainerForm>
   </Container>
  );
}