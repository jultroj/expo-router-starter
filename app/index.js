import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import Welcome from "./components/Welcome";
import { Button } from "react-native-web";
import { useState, useEffect } from "react";

export default function Page() {
  const [title, settitle] = useState("Hello You");
  const [awesome, setawesome] = useState(false);
  const [name, setName] = useState("Nobody");
  const [isDisabled, setIsDisabled] = useState(true);

  let subtitle = "Nothing is awesome";
  if (awesome) {
    subtitle = "Everything is awesome";
  }
  function handlePress() {
    setName("Julia");
  }
  useEffect(() => {
    setTimeout(() => {
      setName("Anybody");
      setIsDisabled(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Welcome name={name} />
        <Button
          title="Say hello!"
          onPress={handlePress}
          disabled={isDisabled}
        />
        <TextInput value={title} onChangeText={settitle} />
        <Switch value={awesome} onValueChange={setawesome} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "darkseagreen",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  paragraph: {
    fontSize: 24,
  },
});
