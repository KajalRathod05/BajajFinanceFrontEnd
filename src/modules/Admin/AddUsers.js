import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function AddUsers() {

  const {register,handleSubmit,reset,setValue} =useForm();

          //const [users,setUsers]    =useState([]);

         const onLogin=(user)=>
         {
             axios.post('http://localhost:8090/addUsers',user).
             then(res=>
             {
              if(res.status===201)
              {
                alert('Employee Added..!')
                // let userJson=JSON.stringify(res.data);

                // localStorage.setItem('User',userJson);
                // navigate('/Bajaj-Finance');
              }
               
             }
             ).catch(()=>alert('something wents wrong...'))
         }
  return (

        
    <div className=' d-flex justify-content-center'>

         
         <div className='text-start w-30 h-30 mt-5 p-5'>

            <form onSubmit={handleSubmit(onLogin)}>

               <h2 className='text-center'>Add Employee Here..!</h2> 

              <div className='m-2' >
                 <label className='form-label'>Employee Name</label>
                 <input className='form-control' placeholder='Enter Employee Name' {...register('empName')}/>
              </div>
              <div className='m-2' >
                 <label className='form-label'>Employee Email</label>
                 <input className='form-control' placeholder='Enter Employee email' {...register('email')}/>
              </div>
              <div className='m-2' >
                 <label className='form-label'>Employee AccountType</label>
                 <input className='form-control' placeholder='Enter Employee Account Type' {...register('accountType')}/>
              </div>
              <div className='m-2' >
                 <button type='submit' className='btn btn-outline-primary'>Add Employee</button>
              </div>
            </form>
         </div>
    </div>
  )
}

export default AddUsers