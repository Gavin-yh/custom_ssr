//定义mutations
export const INCREMENT =  state => ++state.count
export const DECREMENT = state => --state.count
export const LIST = (state, list) => {
        state.list = list
    }
