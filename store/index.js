export const state = () => ({
  count: 0,
})

export const actions = {
  handleAdd({ commit }) {
    commit('addCount')
  },
}
export const mutations = {
  addCount(state) {
    state.count += 1
  },
}
export const getters = {
  getCount: (state) => {
    return 'count' + state.count
  },
}
