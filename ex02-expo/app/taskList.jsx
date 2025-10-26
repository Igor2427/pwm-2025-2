import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Layout, Text, Input, Button, List, Card } from "@ui-kitten/components";
import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro: {error.message}</Text>;
  if (!data) return <Text>Nenhuma tarefa encontrada.</Text>;

  return (
    <Layout style={{ flex: 1, padding: 20 }}>
      <Text category="h3" style={{ marginBottom: 10 }}>
        Lista de Tarefas
      </Text>

      <Layout style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Input
          placeholder="Adicionar tarefa"
          value={description}
          onChangeText={setDescription}
          style={{ flex: 1 }}
        />
        <Button onPress={() => addMutation.mutate({ description })}>
          Adicionar
        </Button>
      </Layout>

      <Layout style={{ marginVertical: 10, height: 1, backgroundColor: "#ccc" }} />

      <List
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 5 }}>
            <CardTask
              key={item.objectId}
              task={item}
              onDelete={deleteMutation.mutate}
              onCheck={updateMutation.mutate}
            />
          </Card>
        )}
      />

      {isPending && <Text>Processando...</Text>}
    </Layout>
  );
}
