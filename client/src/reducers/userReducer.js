export const registerUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST':
                  return{
                      loading:true,
                  }
        case 'USER_REGISTER_SUCCESS':
                 return{
                     loading:false,
                      success:true
                 }
        case 'USER_REGISTER_FAILED':
            return{
                  loading:false,
                  error:action.payload
            }
        default:
            return state;
    }
}
export const loginUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST':
                  return{
                      loading:true,
                  }
        case 'USER_LOGIN_SUCCESS':
                 return{
                     loading:false,
                      success:true,
                      currentuser:action.payload
                 }
        case 'USER_LOGIN_FAILED':
            return{
                  loading:false,
                  error:action.payload
            }
        default:
            return state;
    }
}
export const getAllUserReducer=(state={users:[]},action)=>{
    switch(action.type)
    {
        case 'ALL_USER_REQUEST':
                  return{
                      loading:true,
                  }
        case 'ALL_USER_SUCCESS':
                 return{
                      loading:false,
                      success:true,
                      users:action.payload
                 }
        case 'ALL_USER_FAILED':
            return{
                  loading:false,
                  error:action.payload
            }
        default:
            return state;
    }
}

export const deleteUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'DELETE_USER_REQUEST':
                  return{
                      loading:true,
                  }
        case 'DELETE_USER_SUCCESS':
                 return{
                      loading:false,
                      success:true,
                 }
        case 'DELETE_USER_FAILED':
            return{
                  loading:false,
                  error:action.payload
            }
        default:
            return state;
    }
}