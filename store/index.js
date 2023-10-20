import { fetchCartItems } from '~/api'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: cartItem.imageUrl.replace(
        '{id}',
        Math.floor(Math.random() * 30)
      ),
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  },
}

export const actions = {
  async FETCH_CART_ITEMS({ commit }) {
    const { data } = await fetchCartItems()
    commit('setCartItems', data)
  },

  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch('FETCH_CART_ITEMS')
  // },
}
