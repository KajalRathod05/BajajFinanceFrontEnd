import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHeader from './DashboardHeader';
import SideNav from './SideNav';
import AddEnquiry from '../modules/OE/AddEnquiry';
import ViewEnquiry from '../modules/OE/ViewEnquiry'
import AddUsers from '../modules/Admin/AddUsers';
import ViewUsers from '../modules/Admin/ViewUsers';
import LoanForm from '../modules/loanservice/LoanForm'
import ViewCustomers from '../modules/Admin/ViewCustomers';


function Dashboard() {

  let userJson = localStorage.getItem('User');
  const { accountType } = JSON.parse(userJson);
 
  const appRoutes = {
    ADMIN: [
      { path: '/add-employee', component:<AddUsers/> },
      { path: '/view-employees', component: <ViewUsers/> },
      { path: '/view-enquiries', component: <ViewEnquiry/> },
      { path:'/view-customers', component: <ViewCustomers/>}     
    ],
    CRM: [
      { path: '/add-enquiry', component: <AddEnquiry /> },               
      { path: '/view-enquiries', component: <ViewEnquiry /> },             
      { path: '/edit-enquiry/:enquiryId', component: <AddEnquiry /> },     
      { path: '/apply-loan', component: <LoanForm /> }
    ],

    OE: [
      { path: '/add-enquiry', component: <AddEnquiry /> },
      { path: '/view-enquiries', component: <ViewEnquiry /> },
      { path: '/edit-enquiry/:enquiryId', component: <AddEnquiry /> },
      { path: '/apply-loan', component: <LoanForm /> }
    ],

    RE: [
      { path: '/add-enquiry', component: <AddEnquiry /> },
      { path: '/view-enquiries', component: <ViewEnquiry/> },
      { path: '/edit-enquiry/:enquiryId', component: <AddEnquiry /> },
      { path: '/apply-loan', component: <LoanForm /> }
    ]
  }

  return (

    <div>

        <DashboardHeader />

      <div className='row w-100 mt-2 m-0'>

        <div className='col col-3 bg-primary'>
            <SideNav />
        </div>

        <div className='col col-9 border border-dark'>
          <Routes>
            {
              appRoutes[accountType].map((mapping, index) => <Route key={index} path={mapping.path} element={mapping.component} />)
            }
          </Routes>
        </div>

      </div >


    </div>
  )
}

export default Dashboard;