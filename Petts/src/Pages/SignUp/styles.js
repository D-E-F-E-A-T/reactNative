import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['rgba(190, 46, 221,0.5)', 'rgba(224, 86, 253,0.5)']
})`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
`;

export const ContainerCentro = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Input = styled.TextInput`
background-color: rgba(224, 86, 253,0.5);
margin: 8px;
width: 80%;
font-size: 20px;
text-align: center;
border-radius: 5px;
color: #FFF;
`;

export const Button = styled.TouchableOpacity`
border-color: #FFF;
border-width: 1px;
border-radius: 5px;
width: 80%;
height: 50px;
margin-top: 8px;
justify-content: center;
`;

export const ButtonReturn = styled.TouchableOpacity`
margin: 15px;
`

export const TextoLogin = styled.Text`
text-align: center;
font-size: 25px;
font-weight: bold;
color: #FFF;
`;

export const TextoDica = styled.Text`
color: #FFF;
font-size: 20px;
margin-top: 20px;
margin-bottom: 20px;
`;