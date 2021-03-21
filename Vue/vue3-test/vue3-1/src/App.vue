<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h2>你好，勇士，请挑选你的英雄</h2>
  </div>

  <div>
    <button v-for="(item, index) in heroes" :key="index" @click="selectHeroFun(index)">{{item}}</button>
  </div>

  <div>您选择的英雄为{{selectHero}}</div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from "vue";

interface DataProps {
  heroes: string[];
  selectHero: string;
  selectHeroFun: (index: number) => void;
}

export default {
  name: "App",
  setup() {
    console.log("1-组件开始创建")
    const data: DataProps = reactive({
      heroes: ["天使", "法老之鹰", "大锤", "狂鼠", "士兵76"],
      selectHero: "",
      selectHeroFun: (index: number) => {
        data.selectHero = data.heroes[index];
      }
    });

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后");
    });

    onBeforeUpdate(() => {
      console.log("4-组件更新之前");
    });

    onUpdated(() => {
      console.log("5-组件更新之后");
    });

    const refData = toRefs(data);
    return {
      ...refData
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
