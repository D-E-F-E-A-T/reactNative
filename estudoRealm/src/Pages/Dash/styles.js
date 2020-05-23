import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
flex:1;
background-color: #5691C8;
padding-top: ${30 + getStatusBarHeight(true)} ;
`;

export const Title = styled.Text`
font-size: 25px;
margin-left: 15px;
color: #FFF;
`;

export const Input = styled.TextInput`
height: 40px;
margin-left: 15px;
margin-right: 15px;
margin-bottom: 10px;
padding: 5px;
border-radius: 7px;
background-color: #F5FAFF;
`;

export const Button = styled.TouchableOpacity`
background-color: #FFF;
height: 40px;
border-radius: 7px;
padding: 5px;
width: 120px;
`;

export const ButtonText = styled.Text`
font-size: 23px;
text-align: center;
color: #333;
`;

export const CenterView = styled.View`
justify-content: center;
align-items: center;
flex-direction: row;
justify-content: space-around;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {paddingHorizontal: 20},
    showVerticalScrollIndicator: false,
})`
margin-top: 20px;
`;