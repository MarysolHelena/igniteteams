import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import theme from "src/theme";

export const Container = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 70px;
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }: any) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))`
  margin-top: 70px;
`;
