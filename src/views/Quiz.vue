<!-- Quiz.vue -->
<template>
  <div>
    <h2>
      聖誕國小新的學期要開始了，同學們紛紛懷著期待的心情來到笑門口，但今天的學笑似乎跟往常有點不同…?
    </h2>
    <el-button type="primary" @click="startQuiz">入學測驗</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ElButton } from "element-plus";

const router = useRouter();
const route = useRoute();
const userName = route.query.name as string;

const startQuiz = () => {
  router.push({ path: "/quiz/0", query: { name: userName } });
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

.el-button {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  font-size: 1.2em;
}
</style>
