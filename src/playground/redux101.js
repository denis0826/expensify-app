import { createStore } from 'redux';

// Action Generators - function that return action objects

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

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action)=> {

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
};

const store = createStore(countReducer);

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



// console.log('101');

// const store = createStore((state = { count : 0 }, action) => {

//   // console.log('...');

//   switch(action.type){
//     case 'INCREMENT':
//       const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//       return {
//         count: state.count + incrementBy
//       };
//     case 'DECREMENT':
//       const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy
//       };
//     case 'RESET':
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }

// })

// const unsubscribe = store.subscribe(() => {  
//   console.log(store.getState());
// })

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy : 5
// });

// // unsubscribe();

// store.dispatch({
//   type: 'INCREMENT'
// });


// store.dispatch({
//   type: 'RESET'
// });


// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });


// store.dispatch({
//   type: 'DECREMENT'
// });

// const add = ({a, b}, c) => a + b * c;

// console.log(add({a:1, b:2}, 100));



// const incrementCount = (payload = {}) => ({
//     type : 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//   }
// )

