import {combineReducers} from 'redux'
import { getAllpizzasReducer,addpizzasReducer,EditpizzasReducer,UpdatepizzasReducer, DeletepizzasReducer} from './reducers/pizzasReducer'
import { createStore,applyMiddleware,compose } from 'redux'
import {thunk} from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import { deleteUserReducer, registerUserReducer } from './reducers/userReducer'
import { loginUserReducer,getAllUserReducer} from './reducers/userReducer'
import { placeOrderReducer,getUserOrdersReducer,getAllUserOrdersReducer, deliverReducer } from './reducers/orderReducer'
import { getSearchReducer,getSearchPizzaReducer } from './reducers/searchReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const finalReducer=combineReducers({
    getAllpizzasReducer : getAllpizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getSearchReducer:getSearchReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addpizzasReducer:addpizzasReducer,
    EditpizzasReducer:EditpizzasReducer,
    UpdatepizzasReducer:UpdatepizzasReducer,
    DeletepizzasReducer:DeletepizzasReducer,
    getAllUserOrdersReducer: getAllUserOrdersReducer,
    deliverReducer:deliverReducer,
    getAllUserReducer:getAllUserReducer,
    deleteUserReducer:deleteUserReducer,
    getSearchPizzaReducer:getSearchPizzaReducer

})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const searchPizza=localStorage.getItem('searchPizza') ? JSON.parse(localStorage.getItem('searchPizza')) : null
const initialstate={
      cartReducer : {
         cartItems:cartItems
      },
      loginUserReducer:{
         currentUser:currentUser
      },
      getSearchPizzaReducer:{
         pizza:searchPizza
      }
}

const store = createStore(finalReducer,initialstate,composeEnhancers(applyMiddleware(thunk)))

export default store