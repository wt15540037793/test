import Vue from 'vue'
import Vuex from 'vuex'
import cun from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
  },
  getters: {
    
  },
  mutations: {
    ye(state,newVal){
      state.cart=newVal
    },
    add(state,obj){
      state.cart.push(obj)
      console.log(state.cart);
    },
    del(state,idx){
      state.cart.splice(idx,1)

    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    cun({
      
    })
  ]
})
