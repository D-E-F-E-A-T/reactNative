import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container, Title, Input, Button, CenterView, List, ButtonText } from './styles';
import Jobs from '../Jobs';

export default class Dash extends Component {
    constructor(props){
        super(props);

        this.state = {
            nome:'',
            cargo:'',
            jobs:[],
        }
    }
 render(){
    return (
        <Container>
         <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content"/>
         <Title> Nome </Title>
         <Input autoCaptilize="none" autoCorrect={false} value={this.state.nome} 
            onChangeText={(nome)=> this.setState({ nome: nome })} />
         <Title> Cargo </Title>
         <Input autoCaptilize="none" autoCorrect={false} value={this.state.cargo}
            onChangeText={(cargo)=> this.setState({ cargo: cargo })} />

            <CenterView>
                <Button>
                    <ButtonText> Cadastrar </ButtonText>
                </Button>

                <Button>
                    <ButtonText> Editar </ButtonText>
                </Button>
            </CenterView>


            <List
                keyboardShouldPersistTaps="handled"
                data={[{
                    id: 1,
                    nome:'Marcelo',
                    cargo:'Programador React'
                }]}
                keyExtractor={item => String(item.id)}
                renderItem={({item})=> (
                    <Jobs data={item} />
                )}
            />
        </Container>
    );
 }
}