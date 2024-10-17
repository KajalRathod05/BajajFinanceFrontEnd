import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SideNav.css'

function SideNav() {

    let userJson = localStorage.getItem('User')
    const { accountType } = JSON.parse(userJson);

    let options = {
        ADMIN: [
            { lable: 'Add Employee', to: 'add-employee' },
            { lable: 'View Employees', to: 'view-employees' }

        ],
        CRM: [
            { lable: 'Add Enquiry', to: 'add-enquiry' },
            { lable: 'View Enquiries', to: 'view-enquiries' },
            { lable: 'Apply For Loan', to: 'apply-loan' },
            { lable: 'View Sanctions', to: 'view-sanction' },
        ],
        OE: [
            { lable: 'Add Enquiry', to: '/add-enquiry' },
            { lable: 'View Enquiries', to: 'view-enquiries' },
            { lable: 'Update Enquiry', to: 'edit-enquiry/:enquiryId' },
            { lable: 'Apply For Loan', to: 'apply-loan' },
        ]
       
    }
    return (
        <div className='nav-container'>

            {
              options[accountType].map((btn, index) =><Link key={index}  className='btn btn-light mt-3' to={btn.to}>{btn.lable}</Link>)
            }

        </div>
    )
}

export default SideNav