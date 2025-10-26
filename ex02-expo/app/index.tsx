import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, Pressable } from "react-native";
import { Block, Text, Input } from "expo-ui-kit";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <Block style={styles.container}>
      <Text h1 style={styles.title}>Olá Turma!</Text>
      <Block center middle>
        <Image
          style={styles.avatar}
          source={require("@/assets/images/avatar.jpg")}
          resizeMode="cover"
        />
      </Block>
      <Pressable
        onPress={() => {
          setShowDetails(!showDetails);
        }}
      >
        <Text numberOfLines={showDetails ? 0 : 1} style={styles.text}>
          Este é um App de exemplo da disciplina Programação Web e Mobile do
          Curso de Ciência da Computação da Universidade Católica de Pernambuco
          (semestre 2025.2)
        </Text>
      </Pressable>
      {!isNaN(anoNasc) && <Text>Você nasceu em {anoNasc}</Text>}
      <Input
        style={styles.input}
        onChangeText={onChangeIdade}
        value={idade}
        placeholder="Qual a sua idade?"
        keyboardType="numeric"
      />
      <Block style={styles.buttonsContainer}>
        <Button
          onPress={() => Alert.alert("Botão OK pressionado")}
          title="     OK     "
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => Alert.alert("Botão Cancel pressionado")}
          title="Cancel"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Block>
      <Button
        title="Ir para Lista de Tarefas"
        onPress={() => router.navigate("/taskList")}
      />
      <Block style={styles.space} />
    </Block>
  );
}

const styles = {
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "beige",
    padding: 15,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  text: {
    fontSize: 16,
    marginTop: 30,
  },
  input: {
    height: 45,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  space: {
    height: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
};
