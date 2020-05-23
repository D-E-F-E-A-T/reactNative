import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
`;

export const Header= styled.View`
background-color: #FFB333;
width: 100%;
height: 35%;

border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
`;

export const ContainerCard = styled.View`
flex: 1;
align-items: center;
`;

export const Card = styled.View`
background-color: #FFF;
width: 80%;
height: 60%;

align-items: center;

border-radius: 20px;
margin-top: -30px;
`;

export const TabTopButton = styled.View`
border-color: #CCC;
border-width: 1px;

width: 95%;
height: 20%;

margin-top: 5px;

border-radius: 20px;
flex-direction: row;
`;

export const ButtonTabTopLeft = styled.TouchableOpacity`
width: 50%;

border-bottom-left-radius: 20px;
border-top-left-radius: 20px;

justify-content: center;
`;

export const ButtonTabTopRight = styled.TouchableOpacity`
width: 50%;

border-bottom-right-radius: 20px;
border-top-right-radius: 20px;

justify-content: center;
`;

export const TextButtonTop = styled.Text`
text-align: center;
`;

export const Input = styled.TextInput`
border-color: #CCC;
border-width: 1px;

border-radius: 7px;
`;