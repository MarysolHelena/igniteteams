import { TouchableOpacityProps } from "react-native";
import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  // icon: keyof typeof MaterialIcons.glyphMap;
  // type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({}: Props) {
  return (
    <Container>
      <Icon name="home" type="SECONDARY" />
    </Container>
  );
}
