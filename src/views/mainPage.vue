<template>
  <div class="home">
    <underNavMain-v></underNavMain-v>
  </div>
</template>

<script>
import underNavMain from "../components/underNavMain.vue";

export default {
  name: "mainPage",
  components: {
    "underNavMain-v": underNavMain,
  },
};
</script>
