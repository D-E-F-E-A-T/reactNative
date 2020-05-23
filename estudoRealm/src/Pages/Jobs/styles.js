import styled from  'styled-components';

export const Container = styled.View`
padding: 20px;
border-radius: 7px;
background-color: #FFF;
margin-bottom: 15px;
`;

export const Nome = styled.Text`
font-size: 20px;
font-weight: bold;
color: #000;
`;

export const Cargo = styled.Text`
font-size: 17px;
font-style: italic;
`;

export const CenterView = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 15px;
`;

export const EditItem = styled.TouchableOpacity`
background-color: #DDD;
padding: 5px;
border-radius: 7px;
`;

export const EditText = styled.Text`
color: #000;
font-size: 15px;
`;