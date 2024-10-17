import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewUsers() {

         const [user,setUser] =useState([]);

       const getUser=()=>
       {
          axios.get('http://localhost:8090/getAllUsers')
          .then(res=>
          {
        
             if(res.status===200)
             {
              setUser(res.data);
             }
          }
                   
          ).catch(()=>alert('Something wents wrongs..!'))
       }

       useEffect(getUser,[]);

       //react-data-table-component, styled-component
  return (
    <div>

         {
           user.map(u=><h1 key={u.uid}>{u.empName}</h1>)
         }


    </div>
  )
}

export default ViewUsers;