import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;

export const ContainerCenter = styled.View`
flex: 1;
`;

export const Card = styled.View`
width: 150px;
height: 130px;
background-color: rgba(245, 246, 250,0.7);
border-radius: 7px;
margin: 10px;
border-color: #F2EDED;
border-width: 2px;

align-items: center;
justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const ContainerHeader = styled.View`
background-color: rgba(255, 121, 121,1);
width: 100%;
height: 30%;
align-items: center;
justify-content: center;
`;

export const BarTop = styled.View`
background-color: #FFF;
width: 85%;
margin-top: 5px;
border-radius: 100px;
flex-direction: row;
justify-content: space-between;

border-color: #CCC;
border-width: 2px;
`;

export const TabButton = styled.TouchableHighlight`
border-radius: 100px;
padding: 10px;
width: 100px;
`;

export const TextTabButton = styled.Text`
color: #ff7979;
font-size: 15px;
font-weight: bold;
text-align: center;
font-style: italic;
`;