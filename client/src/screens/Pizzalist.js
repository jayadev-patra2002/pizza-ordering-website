import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../components/loading'
import Error from '../components/loading'
import {deletePizzas, getAllpizzas} from '../actions/pizzaAction'
import { Link} from 'react-router-dom'
export default function Pizzaslist()
{    
    
    const pizzastate=useSelector(state=>state.getAllpizzasReducer)
    
    const {loading , error , pizzas}=pizzastate
     const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllpizzas);
    },[])
    
    return(
        <div>
             <h1 style={{fontWeight:'550'}}>Pizzas List</h1>
             <hr/>
             {loading && <Loading/>}
             {error && <Error error='Something went wrong'/>}
              <table className='table table-bordered'>
                <thead className='table-dark'>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>

                </tr>
                </thead>
                <tbody>
                  { pizzas && pizzas.map(pizza=>{
                      return <tr>
                           <td>{pizza.name}</td>
                           <td>
                              small: {pizza.prices[0]['small']}<br/>
                              medium: {pizza.prices[0]['medium']}<br/>
                              large: {pizza.prices[0]['large']}
                           </td>
                           <td>{pizza.category}</td>
                           <td>
                           <i className="bi bi-trash3-fill" onClick={()=>{dispatch(deletePizzas(pizza._id))}}style={{marginRight:'35px'}}></i>
                           <Link to={`/admin/editpizza/${pizza._id}`}><i className="bi bi-pencil-square"></i></Link>
                           </td>
                      </tr>
                   })}
                </tbody>
              </table>


        </div>
    )
}