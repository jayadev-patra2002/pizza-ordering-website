export const getAllpizzasReducer=(state={pizzas:[]},action)=>{

      switch(action.type)
      {
        case 'GET_PIZZAS_REQUEST':
            return {
                loading:true,
                ...state}
        case 'GET_PIZZAS_SUCCESS':
            return {
                loading : false,
                pizzas:action.payload}
        case 'GET_PIZZAS_FAILED':
            return {
                error:action.payload,
                loading : false
            }
        default:
            return state
      }
}

export const addpizzasReducer=(state={},action)=>{

    switch(action.type)
    {
      case 'ADD_PIZZA_REQUEST':
          return {
              loading:true,
              ...state}
      case 'ADD_PIZZA_SUCCESS':
          return {
              loading : false,
              success:true}
      case 'ADD_PIZZA_FAILED':
          return {
              error:action.payload,
              loading : false
          }
      default:
          return state
    }
}

export const EditpizzasReducer=(state={pizza:[]},action)=>{

    switch(action.type)
    {
      case 'EDIT_PIZZA_REQUEST':
          return {
              loading:true,
              ...state}
      case 'EDIT_PIZZA_SUCCESS':
          return {
              loading : false,
              success:true,
              pizza:action.payload}
      case 'EDIT_PIZZA_FAILED':
          return {
              error:action.payload,
              loading : false
          }
      default:
          return state
    }
}

export const UpdatepizzasReducer=(state={},action)=>{

    switch(action.type)
    {
      case 'UPDATE_PIZZA_REQUEST':
          return {
              editloading:true,
              ...state}
      case 'UPDATE_PIZZA_SUCCESS':
          return {
              editloading : false,
              editsuccess:true,
            }
      case 'UPDATE_PIZZA_FAILED':
          return {
              editerror:action.payload,
              editloading : false
          }
      default:
          return state
    }
}
export const DeletepizzasReducer=(state={pizza:[]},action)=>{

    switch(action.type)
    {
      case 'DELETE_PIZZA_REQUEST':
          return {
              loading:true,
              ...state}
      case 'DELETE_PIZZA_SUCCESS':
          return {
              loading : false,
              success:true,
              pizza:action.payload
            }
      case 'DELETE_PIZZA_FAILED':
          return {
              error:action.payload,
              loading : false
          }
      default:
          return state
    }
}