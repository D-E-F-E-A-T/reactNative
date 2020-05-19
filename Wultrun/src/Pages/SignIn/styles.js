import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
flex: 1;
`;

// #2bcbba #45aaf2

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

export const ContainerLogo = styled.View`
background-color:#FFF;
border-radius: 7px;
width: 60px;
height: 60px;

justify-content: center;
align-items: center;
`;

export const ContainerForm = styled.View`
align-items:center;
flex: 1;
`;

export const Form = styled.View`
background-color: #FFF;
border-radius: 7px;
width: 90%;
margin-top: -40;
border-width: 1px;
border-color: #CCC;
padding: 8px;
`;

export const ButtonSignIn = styled.TouchableOpacity`
background-color: #2FAEFF;
margin-top: 10px;
padding: 10px;
border-radius: 100px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
/* background-color: #2FAEFF; */
border-color: #2FAEFF;
border-width: 1px;
margin-top: 15px;
padding: 10px;
border-radius: 100px;
`;

export const Input = styled.TextInput`
margin: 5px;
width: 70%;
`;

export const ContainerInput = styled.View`
border-bottom-color: #CCC;
border-bottom-width: 1px;
flex-direction: row;
align-items: center
`;

export const TextButton = styled.Text`
text-align: center;
color: #FFF;
font-size: 18px;
`;