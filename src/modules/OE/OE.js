import React from 'react'
import SideBar from './SideBar.js'
import Table from './Table.js';

function OE() {
  return (
    <div>
      <div className="app">

        <SideBar/>

        <div className="content">
          
          <Table />
        </div>
      </div>
    </div>
  )
}

export default OE;