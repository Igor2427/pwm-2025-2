// app/_layout.tsx
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApplicationProvider>
  );
}
