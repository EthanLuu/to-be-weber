<template>
  <div class="container">
    <el-container>
      <el-header>抽奖程序Demo</el-header>
      <el-main>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple list">
              抽奖人员名单
              <div class="add-person">
                <el-row>
                  <el-input class="add" v-model="input" placeholder="请输入候选人名单（以,分隔）"></el-input>
                  <div class="btn-group">
                    <el-button type="primary" style="margin-top:20px" @click="add">添加</el-button>
                    <el-button type="danger" style="margin-top:20px" @click="deleteAll">清空</el-button>
                  </div>
                </el-row>
              </div>
              <el-table :data="personList" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
              </el-table>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="grid-content bg-purple three">
              三等奖
              <el-input-number v-model="thirdPrizes" :min="0" :max="10" label="描述文字"></el-input-number>
              <el-button type="primary" style="margin-top:20px;width:100%;" @click="handleThree">抽奖</el-button>
              <el-table :data="threeList" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple two">
              二等奖
              <el-input-number v-model="secondPrizes" :min="0" :max="10" label="描述文字"></el-input-number>
              <el-button type="primary" style="margin-top:20px;width:100%;" @click="handleTwo">抽奖</el-button>
              <el-table :data="twoList" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light one">
              一等奖
              <el-input-number v-model="firstPrizes" :min="0" :max="10" label="描述文字"></el-input-number>
              <el-button type="primary" style="margin-top:20px;width:100%;" @click="handleOne">抽奖</el-button>
              <el-table :data="oneList" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
interface Person {
  name: string;
}
function randomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

function sleep() {
  window.setTimeout(() => {}, 1000);
}

export default {
  name: "App",
  setup() {
    const firstPrizes = ref(0);
    const secondPrizes = ref(0);
    const thirdPrizes = ref(0);
    const personList = ref([]);
    const input = ref("");
    const add = () => {
      if (input.value !== "") {
        const persons = input.value.split(",");
        for (let i = 0; i < persons.length; i++) {
          const person: Person = { name: persons[i] };
          personList.value.push(person);
        }
        input.value = "";
      }
    };
    const deleteAll = () => {
      personList.value.length = 0;
    };
    const threeList = ref([]);
    const handleThree = () => {
      // 先确定要抽取多少个三等奖
      let cnt = thirdPrizes.value;
      setInterval(function() {
        if (cnt <= 0 || personList.value.length == 0) {
          return;
        }
        const idx = randomNum(0, personList.value.length - 1);
        const person: Person = personList.value[idx];
        personList.value.splice(idx, 1);
        threeList.value.push(person);
        cnt -= 1;
      }, 500);
    };
    const twoList = ref([]);
    const handleTwo = () => {
      let cnt = secondPrizes.value;
      setInterval(function() {
        if (cnt <= 0 || personList.value.length == 0) {
          return;
        }
        const idx = randomNum(0, personList.value.length - 1);
        const person: Person = personList.value[idx];
        personList.value.splice(idx, 1);
        twoList.value.push(person);
        cnt -= 1;
      }, 500);
    };
    const oneList = ref([]);
    const handleOne = () => {
      let cnt = firstPrizes.value;
      setInterval(function() {
        if (cnt <= 0 || personList.value.length == 0) {
          return;
        }
        const idx = randomNum(0, personList.value.length - 1);
        const person: Person = personList.value[idx];
        personList.value.splice(idx, 1);
        oneList.value.push(person);
        cnt -= 1;
      }, 500);
    };
    return {
      personList,
      firstPrizes,
      secondPrizes,
      thirdPrizes,
      input,
      add,
      deleteAll,
      handleThree,
      threeList,
      handleTwo,
      twoList,
      handleOne,
      oneList
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #409eff;
  text-align: center;
  line-height: 60px;
  font-size: 1.5em;
  color: aliceblue;
}
.add {
  margin-top: 20px;
}
.btn-group {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-button {
  flex: auto;
}

.three,
.two,
.one {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
