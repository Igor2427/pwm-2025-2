import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList } from "react-native"; // Mantém só o FlatList (expo-ui-kit não tem)
import { Block, Button, Text, Input } from "expo-ui-kit"; // 👈 UI Kit

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

  if (isFetching) {
    return (
      <Block center middle>
        <Text>Loading...</Text>
      </Block>
    );
  }

  if (error) {
    return (
      <Block center middle>
        <Text>Error: {error.message}</Text>
      </Block>
    );
  }

  if (!data) {
    return (
      <Block center middle>
        <Text>No data available</Text>
      </Block>
    );
  }

  return (
    <Block padding={15}>
      <Text h2 bold center marginBottom={15}>
        Task List
      </Text>

      {/* Campo de inserção */}
      <Block row center space="between" marginBottom={10}>
        <Input
          placeholder="Add a task"
          value={description}
          onChangeText={setDescription}
          style={{ flex: 1, marginRight: 10 }}
        />
        <Button
          onPress={() => addMutation.mutate({ description })}
          color="primary"
        >
          Add
        </Button>
      </Block>

      {/* Linha divisória */}
      <Block
        style={{
          marginVertical: 5,
          backgroundColor: "grey",
          width: "90%",
          height: 2,
          alignSelf: "center",
        }}
      />

      {/* Lista */}
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item: task }) => (
          <CardTask
            key={task.objectId}
            task={task}
            onDelete={deleteMutation.mutate}
            onCheck={updateMutation.mutate}
          />
        )}
      />

      {isPending && (
        <Text center marginTop={10}>
          Pending...
        </Text>
      )}
    </Block>
  );
}
