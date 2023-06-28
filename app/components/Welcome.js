import { Text } from "react-native";

export default function Welcome({ name = "nobody" }) {
  return <Text>Hello, {name}!</Text>;
}
