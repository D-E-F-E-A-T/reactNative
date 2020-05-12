import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
// 'rgba(190, 46, 221,0.5)', 'rgba(224, 86, 253,0.5)'

export const Container = styled.View`
flex: 1;
z-index: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors: ['rgba(190, 46, 221,0.5)', 'rgba(224, 86, 253,0.5)']
})`
width: 100%;
height: 50px;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

export const Button = styled.TouchableOpacity`
`;

export const TextoLogo = styled.Text`
color: #FFF;
font-size: 20px;
font-weight: bold;
`;