import React from 'react'
import './assets/Style/Common.scss'
import 'bulma/css/bulma.css'
import Sidenav from './Components/Sidenav/sidenav'
// import Administrator from './Components/Administrator/ViewAdministrators/viewAdministrator'
import Administrator from './Components/Compaigns/CreateCompaigns/createCompaigns'

export default () => {
  return (
    <>
      <div style={{display:"flex"}}>
        <Sidenav/>
        <Administrator />
      </div>
    </>
  );
}