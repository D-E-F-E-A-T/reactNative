import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors: ['#2FAEFF','#2BD0FF'],
    start: {x: 0.1, y: 0.7},
    end: {x: 0.4, y: 1.5},
    locations: [0.0,0.4,0.2],
})`
height: 30%;
align-items:center;
justify-content:center;
border-bottom-left-radius: 150px;
border-bottom-right-radius: 150px;
`;

export const ContainerFotoPerfil = styled.View`
align-items: center;
flex: 1px;
margin-top: -80;
`;

export const BackgroundFoto = styled.View`
background-color: #FFF;
padding-left: 12px;
padding-right: 12px;
border-radius: 100px;
border-width: 1px;
border-color: #CCC;
`;

export const ContainerForm = styled.View`
flex: 1;
`;

export const ButtonSignIn = styled.TouchableOpacity`
background-color: #2FAEFF;
margin-top: 10px;
padding: 10px;
border-radius: 100px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
background-color: #3b5998;
margin-top: 15px;
padding: 10px;
border-radius: 100px;
`;

export const ButtonGoogle = styled.TouchableOpacity`
background-color: #ff0000;
margin-top: 15px;
padding: 10px;
border-radius: 100px;
`;

export const Input = styled.TextInput`
font-size: 15px;
margin: 7px;
background-color: #F5FAFF;
border-radius: 8px;
box-shadow : 4px 4px 4px #333;
`;

export const TextButton = styled.Text`
text-align: center;
color: #FFF;
font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
align-items: center;
margin-top: 10px;
`;

export const TextName = styled.Text`
color:#FFF;
font-size: 20px;
font-weight: bold;
margin-top: 10px;
`;