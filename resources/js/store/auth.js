import { defineStore } from 'pinia'

export const useStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null
  }),
  getters: {
    get_token: (state) => state.token,
    get_user: (state) => state.user
  },
  actions: {
     set_token(token, user) {
        this.token = token
        this.user = user
      },
      remove_token(){
        this.token = null
        this.user = null
        // remove localStorage
        localStorage.removeItem('web_token')
        localStorage.removeItem('user')
      }
  },
})