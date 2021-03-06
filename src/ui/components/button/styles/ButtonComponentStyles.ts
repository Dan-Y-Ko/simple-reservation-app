import styled from "styled-components/native";
import { Button } from "react-native-paper";

import colors from "../../../theme/colors";

const ButtonStyled = styled(Button).attrs({
  color: colors.ui.success,
})``;

export default ButtonStyled;
