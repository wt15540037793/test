<!--  -->
<template>
  <div>
    <h1>CasshBook</h1>
    <p>你的余额</p>
    <h1>${{ changeNum.toFixed(2) }}</h1>
    <div class="box">
      <div class="green">
        <span>收入</span>
        <span>${{ changeZum.toFixed(2) }}</span>
      </div>
      <div class="red">
        <span>支出</span>
        <span>${{ changeFum.toFixed(2) }}</span>
      </div>
    </div>

    <h2>历史记录:{{ cart.length }}条</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        <span>{{ item.name }}</span>
        <span :class="item.price > 0 ? 'green' : 'red'">{{ item.price }}</span>
        <div class="XX" @click="del(index)">X</div>
      </li>
    </ul>

    <h3>添加新交易</h3>
    <div>
      <h4>交易名称</h4>
      <input type="text" v-model="name" @keyup.enter="add" />
      <h4>金额</h4>
      <input type="text" v-model="price" @keyup.enter="add" />
    </div>
    <button @click="add">添加新交易</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Com",
  data() {
    return {
      name: "",
      price: "",
    };
  },

  components: {},

  computed: {
    ...mapState(["cart"]),
    changeNum() {
      let changeSum = 0;
      this.cart.map((item, index) => {
        changeSum += item.price * item.num;
      });
      return changeSum;
    },
    changeZum() {
      let changeSum = 0;
      this.cart.map((item, index) => {
        if (item.price > 0) {
          changeSum += item.price * item.num;
        }
      });
      return changeSum;
    },
    changeFum() {
      let changeSum = 0;
      this.cart.map((item, index) => {
        if (item.price < 0) {
          changeSum += item.price * item.num;
        }
      });
      return changeSum;
    },
  },

  mounted() {},

  methods: {
    ...mapMutations(["ye"]),

    add() {
      if (this.name == "" || this.price == "") {
        alert("不能为空");
      } else {
        this.$store.commit("add", {
          name: this.name,
          price: this.price,
          num: 1,
        });
        this.name = "";
        this.price = "";
      }
    },
    del(idx) {
      this.$store.commit("del", idx);
    },
  },
  watch: {
    cart: {
      deep: true,
      handler(v) {
        this.ye(v);
      },
    },
  },
  mixins: [],
};
</script>
<style lang="scss" scoped>
.box {
  width: 350px;
  height: 150px;
  display: flex;
  background: aqua;
  margin: auto;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
ul {
  width: 350px;
  margin: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    width: 350px;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    position: relative;
    span {
      margin: 0 15px;
    }
    .XX {
      width: 25px;
      height: 25px;
      background-color: yellow;
      color: white;
      position: absolute;
      left: -25px;
      display: none;
      line-height: 25px;
    }
  }
  li:hover .XX {
    display: block;
  }
}
input {
  width: 350px;
  margin: 5px 0;
  height: 40px;
  color: crimson;
  padding-left: 10px;
}
button {
  margin: 5px 0;
  width: 350px;
  height: 40px;
}
.red {
  color: red !important;
}
.green {
  color: green !important;
}
</style>