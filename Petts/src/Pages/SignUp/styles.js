import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.7);
`;

export const Input = styled.TextInput`
background-color: rgba(128,128,128, 0.5);
margin: 8px;
width: 80%;
font-size: 20px;
text-align: center;
border-radius: 5px;
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
margin: 10px;
`

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