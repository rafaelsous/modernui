import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  width: 180px;
  height: 250px;
  margin: 0 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  width: 150px;
  height: 150px;
  margin-top: -50px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const Foundation = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;