import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 350px;
  height: 70px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: any) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(UsersThree).attrs(({ theme }: any) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill',
}))`
margin-right: 20px;
`;

