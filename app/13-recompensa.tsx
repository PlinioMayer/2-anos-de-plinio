import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useUpdateSave } from "@/contexts/save.context";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    paddingTop: 100,
  },
  text: {
    textAlign: "center",
  },
  video: {
    height: "100%",
    width: "100%",
  },
});

const Recompensa = () => {
  useUpdateSave("13-recompensa");

  const player = useVideoPlayer(
    require("@/assets/videos/timbers.mp4"),
    (player) => {
      player.loop = true;
      player.play();
    },
  );

  return (
    <ThemedView style={styles.main}>
      <ThemedText style={styles.text} type="title">
        Parabéns
      </ThemedText>
      <VideoView style={styles.video} player={player} />
    </ThemedView>
  );
};

export default Recompensa;
