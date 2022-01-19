<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import * as spine from "@esotericsoftware/spine-player";
import "@esotericsoftware/spine-player/dist/spine-player.css";
import { onMounted } from "vue";

// import HelloWorld from "./components/HelloWorld.vue";

onMounted(() => {
  console.log("Hello World");
  initSpine();
});

function initSpine() {
  // @ts-ignore
  new spine.SpinePlayer("player-container", {
    jsonUrl: "mySpine/skeleton.json",
    atlasUrl: "mySpine/skeleton.atlas",
    showControls: true,
    backgroundColor: "#00000000",
    alpha: true,
    // Added:
    success: function (player: any) {
      // console.log(player);
      // player.animationState.addListener({
      //   event: function (t: any) {
      //     switch (t.animation.name) {
      //       case "surf":
      //         player.animationState.setAnimation(0, "jump", true);
      //         onToOff();
      //         break;
      //       case "jump":
      //         player.animationState.setAnimation(0, "Skateboard", true);
      //         break;
      //       case "jump2":
      //         player.animationState.setAnimation(0, "surf", true);
      //         break;
      //       case "Skateboard":
      //         player.animationState.setAnimation(0, "jump2", true);
      //         break;
      //     }
      //   }
      // });
      // player.animationState.setAnimation(0, "animation", true);
    }
  });
}
</script>

<template>
  <div id="player-container"></div>
</template>

<style></style>
