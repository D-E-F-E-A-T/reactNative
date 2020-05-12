import styled from 'styled-components';

// 'rgba(190, 46, 221,0.5)', 'rgba(224, 86, 253,0.5)'

export const Container = styled.View`
flex: 1;
`;
export const ContainerCentral = styled.View`
flex: 1;
position: relative;
z-index: 1;
`;

export const TabsContainer = styled.View`
flex: 1;
align-items: center;
z-index: 1;
position: absolute;
bottom: 10px;
width: 98%;
margin-left: 5px;
`;

export const TabsBottom = styled.View`
background-color: 'rgba(190, 46, 221,0.5)';
width: 90%;
height: 50px;
padding: 10px;
border-radius: 100px;
`;

export const ContainerComponents = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const ButtonBottom = styled.TouchableOpacity``;