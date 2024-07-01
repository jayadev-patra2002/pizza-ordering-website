export const getSearchReducer=(state={pizzas:[]},action)=>{

    switch(action.type)
    {
      case 'SEARCH_PIZZAS_REQUEST':
          return {
              loading:true,
              ...state}
      case 'SEARCH_PIZZAS_SUCCESS':
          return {
              loading : false,
              pizzas:action.payload}
      case 'SEARCH_PIZZAS_FAILED':
          return {
              error:action.payload,
              loading : false
          }
      default:
          return state
    }
}

export const getSearchPizzaReducer=(state={pizza:[]},action)=>{

    switch(action.type)
    {
      case 'SEARCHING_PIZZAS_REQUEST':
          return {
              loading:true,
              ...state}
      case 'SEARCHING_PIZZAS_SUCCESS':
          return {
              loading : false,
              pizza:action.payload}
      case 'SEARCHING_PIZZAS_FAILED':
          return {
              error:action.payload,
              loading : false
          }
      default:
          return state
    }
}