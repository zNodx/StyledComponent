import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: #FF0;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${props => props.size || '20px'};
  color: ${props => props.color || '#000'};;  
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #000;
`;
