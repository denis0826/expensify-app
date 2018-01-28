import { createStore } from 'redux';

// const add = ({a, b}, c) => a + b * c;

// console.log(add({a:1, b:2}, 100));



// const incrementCount = (payload = {}) => ({
//     type : 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//   }
// )

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type : 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = ({ resetBy = 0 } = {}) => ({
  type: 'RESET',
  resetBy
})

const setCount = ({ count = 100 } = {}) => ({
  type: 'SET',
  count
})

const store = createStore((state = { count: 0 }, action)=> {

  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: action.resetBy
      }
    default:
      return state;
  }
})

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 10}))

store.dispatch(incrementCount())

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 200 }))

store.dispatch(setCount({ count: 1000 }))

store.dispatch(incrementCount())

store.dispatch(incrementCount())