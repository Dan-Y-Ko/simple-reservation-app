import styled from "styled-components/native";

import { ScrollView } from "react-native";

const RoomCardContainer = styled(ScrollView)`
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]};
`;

export default RoomCardContainer;
