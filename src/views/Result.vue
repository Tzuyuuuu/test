<template>
  <div>
    <h2>測驗結果</h2>
    <p>使用者名稱：{{ userName }}</p>

    <div v-if="result">
      <p>根據你的選擇，測驗結果是：{{ result }}</p>
    </div>
    <el-button type="primary" @click="retryQuiz">再玩一次</el-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const userName = computed(() => route.query.name as string);
const answerCounts = {
  班長: parseInt(route.query.班長 as string) || 0,
  衛生: parseInt(route.query.衛生 as string) || 0,
  康樂: parseInt(route.query.康樂 as string) || 0,
  值日生: parseInt(route.query.值日生 as string) || 0,
  學藝: parseInt(route.query.學藝 as string) || 0,
  風紀: parseInt(route.query.風紀 as string) || 0,
};

const result = computed(() => {
  if (answerCounts.風紀 >= 3) {
    return "風紀股長";
  }

  let maxCount = 0;
  let maxRole = "";

  for (const [role, count] of Object.entries(answerCounts)) {
    if (count > maxCount) {
      maxCount = count;
      maxRole = role;
    }
  }

  return maxRole;
});

const retryQuiz = () => {
  router.push("/");
};
</script>

<style scoped>
.el-button {
  display: block;
  width: 100%;
  margin-top: 20px;
}
</style>
