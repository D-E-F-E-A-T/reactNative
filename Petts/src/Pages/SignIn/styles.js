import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['rgba(190, 46, 221,0.5)', 'rgba(224, 86, 253,0.5)']
})`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.5);
`;

export const Input = styled.TextInput`
background-color: rgba(224, 86, 253,0.5);
margin-bottom: 10px;
width: 80%;
height: 50px;
font-size: 20px;
text-align: center;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
border-color: #FFF;
border-width: 1px;
border-radius: 5px;
width: 89%;
height: 50px;
margin-top: 8px;
justify-content: center;
`;

export const TextoLogin = styled.Text`
text-align: center;
font-size: 25px;
color: #FFF;
`;

export const TextoDica = styled.Text`
color: #FFF;
font-size: 20px;
margin-top: 20px;
margin-bottom: 20px;
`;

export const ContainerInputIcon = styled.View`
align-items: center;
justify-content: center;
background-color: rgba(224, 86, 253,0.5);
margin-bottom: 5px;
height: 50px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
padding-left: 3px;
`;

export const TextoTitulo = styled.Text`
color: rgba(224, 86, 253,0.5);
font-size: 25px;
font-weight: bold;
margin-bottom: 5px;
`;
