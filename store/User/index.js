export const state = () => ({
    name: "Tom",
  })
  
  export const actions = {
    handUserLog({ commit }) {
      commit('reviseName')
    },
  }
  export const mutations = {
    reviseName(state) {
      state.name = "Cherry"
    },
  }
  export const getters = {
    getname: (state) => {
      return 'name' + state.name
    },
  }
  