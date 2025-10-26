import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert } from "react-native";
import { Layout, Text, Input, Button, Card } from "@ui-kitten/components";

export default function Index() {
  const router = useRouter();
  const [idade, setIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);

  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "beige",
        padding: 15,
      }}
    >
      <Text category="h1" style={{ marginBottom: 30 }}>
        Olá Turma!
      </Text>

      <Card
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        <Layout
          style={{
            flex: 1,
            backgroundColor: "#ddd",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text category="label">(Avatar)</Text>
        </Layout>
      </Card>

      <Button
        appearance="ghost"
        onPress={() => setShowDetails(!showDetails)}
        style={{ marginBottom: 10 }}
      >
        {showDetails ? "Ocultar detalhes" : "Mostrar detalhes"}
      </Button>

      {showDetails && (
        <Text style={{ marginBottom: 20, textAlign: "center" }}>
          Este é um App de exemplo da disciplina Programação Web e Mobile do
          Curso de Ciência da Computação da Universidade Católica de Pernambuco
          (semestre 2025.2)
        </Text>
      )}

      {!isNaN(anoNasc) && <Text>Você nasceu em {anoNasc}</Text>}

      <Input
        placeholder="Qual a sua idade?"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
        style={{ width: 200, marginVertical: 12 }}
      />

      <Layout style={{ flexDirection: "row", gap: 10, marginBottom: 15 }}>
        <Button
          onPress={() => Alert.alert("Botão OK pressionado")}
          status="primary"
        >
          OK
        </Button>
        <Button
          onPress={() => Alert.alert("Botão Cancel pressionado")}
          status="danger"
        >
          Cancel
        </Button>
      </Layout>

      <Button onPress={() => router.navigate("/taskList")}>
        Ir para Lista de Tarefas
      </Button>
    </Layout>
  );
}
