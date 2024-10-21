import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function ViewEnquiry() {

    const [enquiry,setEnquiry] =useState([]);
    const [isLoading,setIsLoading]=useState('');

    const getEnquiries=()=>
    {
       setIsLoading(true);
       axios.get('http://localhost:8084/getAllEnquiries')
       .then(res=>
       {
        if(res.status===200)
           {
            setEnquiry(res.data);
            setIsLoading(false)
           }
       }
       ).catch(()=>alert('Something wents wrong...!'))
    }

     const columns=[
            { name:'Enquiry ID',selector:row=>row.enquiryId  },
            { name:'First Name', selector:row=>row.firstName},
            { name:'Last Name', selector:row=>row.lastName},
            { name:'Age', selector:row=>row.age},
            { name:'Email',selector:row=>row.email},
            { name:'Mobile No',selector:row=>row.mobileNo},
            { name:'Adharcard',selector:row=>row.adharcard },
            { name:'Pancard',selector:row=>row.pancard},
            { name:'Gender',selector:row=>row.gender},
            { name:'Requested Loan Amount',selector:row=>row.requestedLoanAmount},
            { name:'Enquiry Status',selector:row=>row.enquiryStatus},
            { name:'Loan Status',selector:row=>row.loanStatus},
            { name:'Cibil ID', selector:row=>row.cibilId},
            { name:'Cibil Date', selector:row=>row.cibilDate},
            { name:'Cibil Score',selector:row=>row.cibilScore},
            { name:'Cibil Status',  selector:row=>row.cibilStatus  }

          ];

     const tableData = enquiry.map(e=>
     {
      return {
        enquiryId:e.enquiryId,
        firstName:e.firstName,
        lastName:e.lastName,
        age:e.age,
        email:e.email,
        mobileNo:e.mobileNo,
        adharcard:e.adharcard,
        pancard:e.pancard,
        gender:e.gender,
        requestedLoanAmount:e.requestedLoanAmount,
        enquiryStatus:e.enquiryStatus,
        loanStatus:e.loanStatus,
        cibilId:e.cibil? e.cibil.cibilId : 'N/A',
        cibilDate:e.cibil? e.cibil.cibilDate :'N/A',
        cibilScore:e.cibil? e.cibil.cibilScore :'N/A',
        cibilStatus: e.cibil ? e.cibil.cibilStatus : 'N/A'
      }
     }
     );

     useEffect(getEnquiries,[]);

  return (
    <div>
      
      <DataTable columns={columns} data={tableData} fixedHeader={true}
      fixedHeaderScrollHeight='500px' progressPending={isLoading}/>


    </div>
  )
}

export default ViewEnquiry;