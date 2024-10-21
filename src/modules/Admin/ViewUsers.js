import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function ViewUsers() {

         const [user,setUser] =useState([]);
         const [loading,setLoading] =useState('');

       const getUser=()=>
       {
          setLoading(true)
          axios.get('http://localhost:8090/getAllUsers')
          .then(res=>
          {
             if(res.status===200)
             {
              setUser(res.data);
              setLoading(false);
             }
          }
                   
          ).catch(()=>alert('Something wents wrongs..!'))
       }

        const columns=[
             {
               name:"User ID",
               selector: row=>row.uid
             },
             {
              name:'Employee Name',
              selector:row=>row.empName
             },
             {
              name:'Email',
              selector:row=>row.email
             },
             {
              name:'Account Type',
              selector:row=>row.accountType
             },
             {
              name:'Username',
              selector:row=>row.username
             },
             {
              name:'Password',
              selector:row=>row.password
             }
        ];

        const tableData=user.map(u=>
        {
          return {
            uid:u.uid,
            empName:u.empName,
            email:u.email,
            accountType:u.accountType,
            username:u.username,
            password:u.password
          }
        }
        );

       useEffect(getUser,[]);

      
  return (
    <div>

          <DataTable columns={columns} data={tableData} fixedHeader={true} 
          fixedHeaderScrollHeight='500px' progressPending={loading}/>

    </div>
  );
}

export default ViewUsers;