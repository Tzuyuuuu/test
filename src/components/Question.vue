<template>
  <div>
    <h2>{{ currentQuestion.text }}</h2>
    <div
      v-for="(option, index) in currentQuestion.options"
      :key="index"
      class="option-button"
    >
      <el-button
        type="primary"
        @click="submitAnswer(option.value)"
        class="responsive-button"
      >
        {{ option.text }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

interface Question {
  text: string;
  options: { text: string; value: string }[];
}

const questions: Question[] = [
  {
    text: "原本活潑親人的笑狗，突然對著你狂吠，你該如何是好?",
    options: [
      { text: "塊陶阿~~~ (衛生)", value: "衛生" },
      { text: "撿起路邊的木棍…", value: "風紀" },
      { text: "從包包拿出昨天吃剩的巧克力誘惑牠 (康樂)", value: "康樂" },
      { text: "拉隔壁的同學當護盾 (班長)", value: "班長" },
    ],
  },
  {
    text: "終於逃過笑狗的攻擊，驚魂未定你的看到前面雄赳赳氣昂昂的糾察隊在檢查服儀，你連忙看了一下自己，發現制服名號忘了繡，你該如何是好?",
    options: [
      { text: "假裝沒事，邊吹著口哨邊通過糾察隊 (值日生)", value: "值日生" },
      { text: "從包包拿出昨天吃剩的巧克力賄賂糾察隊 (康樂)", value: "康樂" },
      { text: "撿起路邊的木棍…", value: "風紀" },
      { text: "穿上外套遮住制服 (學藝)", value: "學藝" },
    ],
  },
  {
    text: "通過了糾察隊這關，來到熟悉的教室，發現班上來了個素未謀面的轉笑生，而他似乎不小心坐到你平常習慣的位子，你該如何是好?",
    options: [
      {
        text: "展現你強大的親和力，跟他打招呼，介紹學校給他認識 (康樂)",
        value: "康樂",
      },
      {
        text: "尷尬地跟他說這是你的位子，等他離開後立刻坐回去 (值日生)",
        value: "值日生",
      },
      {
        text: "坐在其他的位子，時不時瞄向對方，隨時準備奪回你的座位 (學藝)",
        value: "學藝",
      },
      { text: "撿起路邊的木棍…", value: "風紀" },
    ],
  },
  {
    text: "升旗典禮開始，今天的太陽實在有夠毒辣，偏偏囉嗦的笑長還在嘮嘮叨叨講個不停，你該如何是好?",
    options: [
      { text: "撿起路邊的木棍…", value: "風紀" },
      { text: "沒關係，再忍耐一下下，安慰自己快結束了 (學藝)", value: "學藝" },
      { text: "假裝昏倒，順便躲進保健室睡個回籠覺 (衛生)", value: "衛生" },
      { text: "偷偷跟隔壁同學抱怨 (值日生)", value: "值日生" },
    ],
  },
  {
    text: "第一節居然是數學課! 黑板上面的數字和符號好像在跳舞，看著台上口沫橫飛的老師，你該如何是好?",
    options: [
      { text: "從書包拿出漫畫偷看 (衛生)", value: "衛生" },
      { text: "撿起路邊的木棍…", value: "風紀" },
      { text: "和隔壁的同學傳紙條 (康樂)", value: "康樂" },
      {
        text: "繼續努力聽課! 自己可是要考台大醬料的同學，不能在這裡被打敗! (學藝)",
        value: "學藝",
      },
    ],
  },
  {
    text: "終於度過難熬的上午，午餐時間到了，今天營養午餐居然有大雞腿和布丁，但數量好像出了問題，排到你時大雞腿和布丁剛好被前面同學拿走最後一份，你該如何是好?",
    options: [
      {
        text: "學笑怎麼可以出這種問題，造成同學營養不良該怎麼辦? 立刻跟老師反映 (班長)",
        value: "班長",
      },
      { text: "和前面同學打個商量，一起平分 (康樂)", value: "康樂" },
      { text: "撿起路邊的木棍…", value: "風紀" },
      {
        text: "算了，今天還是減肥好了，不要吃那麼多 (值日生)",
        value: "值日生",
      },
    ],
  },
  {
    text: "下午該去福利社一趟了吧! 面對琳瑯滿目的商品，你該如何是好?",
    options: [
      {
        text: "鬆軟香甜的蘋果麵包，一定能讓下午上課更有精神 (學藝)",
        value: "學藝",
      },
      { text: "這麼熱的天氣，當然要來一瓶芭芒柳消消暑 (班長)", value: "班長" },
      { text: "中午沒吃飽，買個肉羹麵上課偷吃 (衛生)", value: "衛生" },
      { text: "撿起路邊的木棍…", value: "風紀" },
    ],
  },
  {
    text: "要準備放學了，今天跟同學約好放學一起去公園玩，同學提議要玩一種鬼抓人的遊戲，但大家好像對這個遊戲的名字沒有統稱，你該如何是好?",
    options: [
      { text: "這個遊戲叫做閃電BB (班長)", value: "班長" },
      { text: "這個遊戲叫做紅綠燈 (衛生)", value: "衛生" },
      { text: "撿起路邊的木棍…", value: "風紀" },
      { text: "好麻煩喔，不想玩了 (值日生)", value: "值日生" },
    ],
  },
];

const route = useRoute();
const router = useRouter();
const questionIndex = computed(() =>
  parseInt(route.params.questionIndex as string, 10)
);
const currentQuestion = computed(() => questions[questionIndex.value]);
const userName = computed(() => route.query.name as string);
const answers = ref<{ [key: string]: number }>({
  衛生: 0,
  康樂: 0,
  班長: 0,
  值日生: 0,
  學藝: 0,
  風紀: 0,
});

const submitAnswer = (selectedValue: string) => {
  answers.value[selectedValue]++;

  if (questionIndex.value < questions.length - 1) {
    router.push({
      path: `/quiz/${questionIndex.value + 1}`,
      query: { name: userName.value, ...answers.value },
    });
  } else {
    router.push({
      path: "/result",
      query: { name: userName.value, ...answers.value },
    });
  }
};
</script>

<style scoped>
.option-button {
  margin-bottom: 10px;
  width: 100%;
}

.responsive-button {
  white-space: normal;
  word-wrap: break-word;
  width: 100%;
  max-width: 100%;
  height: 80px;
  display: block;
  line-height: 25px;
}
</style>
