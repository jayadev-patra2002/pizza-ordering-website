import React, { useEffect } from 'react'
import Loading from '../components/loading'
import Error from '../components/error'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUsers } from '../actions/userAction'

export default function Userslist()
{ 
    const alluserstate=useSelector(state=>state.getAllUserReducer)
    const {users,loading,error}=alluserstate
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(allUsers())
    },[])
    return(
        <div>
             <u><h1 style={{fontWeight:'550'}}>Users List</h1></u>
             {loading && <Loading/>}
             {error && <Error error='Something went wrong'/>}
           
              <table className='table table-bordered'>
                <thead className='table-dark'>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                   {users && users.map(user=>{
                      return <tr>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td><i className="bi bi-trash3-fill" onClick={()=>{dispatch(deleteUsers(user._id))}}style={{marginRight:'10px'}}></i></td>
                      </tr>
                   })}
                 
                </tbody>
              </table>
        </div>
    )
}