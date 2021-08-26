<template>
  <div id="app">
    <div>相手：{{ enemyHand }}</div>

    <v-btn @click="fight('goo')">グー</v-btn>
    <v-btn @click="fight('choki')">チョキ</v-btn>
    <v-btn @click="fight('paa')">パー</v-btn>

    <div>結果：{{ result }}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  //name: "Sample",
  //el: "#app",
  data() {
    return {
      hand: ["goo", "choki", "paa"],
      //enemyHandImg: "",
      enemyHand: "",
      result: "",
    };
  },

  methods: {
    fight: function (myHand) {
      const index = Math.floor(Math.random() * Math.floor(3));
      this.enemyHand = this.hand[index];

     

      if (myHand === this.enemyHand) {
        this.result = "あいこ";
      } else if (myHand === "goo" && this.enemyHand === "choki") {
        this.result = "勝ち";
      } else if (myHand === "choki" && this.enemyHand === "paa") {
        this.result = "勝ち";
      } else if (myHand === "paa" && this.enemyHand === "goo") {
        this.result = "勝ち";
      } else {
        this.result = "負け";
      }
    },
  },
};
</script>
