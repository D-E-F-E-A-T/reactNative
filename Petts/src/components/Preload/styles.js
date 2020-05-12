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