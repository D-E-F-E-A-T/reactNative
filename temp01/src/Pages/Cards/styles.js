import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;
 
export const Input = styled.TextInput`
border-bottom-color: #CCC;
border-bottom-width: 1px;
width: 80%;
`;

export const TextButton = styled.Text`
font-size: 18px;
margin-right: 8px;
`;

export const Button = styled.TouchableOpacity`

`;

export const ContainerTextButton = styled.View`
background-color: #FFB333;
margin-top: 15px;
padding: 10px;
border-radius: 10px;

flex-direction: row;
align-items: center;
`;

export const CantainerForm = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Form = styled.View`
width: 80%;
height: 50%;

align-items: flex-end;
justify-content: center;
`;

export const Title = styled.Text`
color: #333;
font-size: 30px;
font-weight: bold;
`;

export const TextFooter = styled.Text`
text-align: center;
margin-bottom: 5px;
`;

export const TextSignUp = styled.Text`
color: #FFB333;
font-weight: bold;
`;