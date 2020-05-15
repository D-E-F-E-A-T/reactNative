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
`;

export const ContainerFotoPerfil = styled.View`
background-color:#FFF;
border-radius: 100px;
width: 60px;
height: 60px;

justify-content: center;
align-items: center;
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
border-bottom-color: #CCC;
border-bottom-width: 1px;
font-size: 15px;
margin: 5px;
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