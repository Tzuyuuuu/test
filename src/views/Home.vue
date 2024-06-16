<template>
  <div class="background">
    <h1></h1>
    <el-form class="form">
      <el-form-item>
        <el-input v-model="userName" placeholder="請輸入姓名"></el-input>
      </el-form-item>

      <el-button type="primary" @click="startQuiz">入學！</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const userName = ref("");
const router = useRouter();

const startQuiz = () => {
  if (userName.value) {
    router.push({ path: "/quiz", query: { name: userName.value } });
  } else {
    alert("請輸入您的名稱");
  }
};
</script>

<style scoped>
.background {
  background-image: url("../assets/home.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 垂直對齊底部 */
  align-items: center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: white;
}

.form {
  width: 100%;
}

.el-form {
  max-width: 400px;
  margin: 30px auto;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
}
</style>
