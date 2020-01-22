import React, { useState } from 'react'
import 'bulma/css/bulma.css'
import './assets/Style/Common.scss'
import 'bulma-helpers/css/bulma-helpers.min.css'
import Sidenav from './Components/Sidenav/sidenav'
import Administrator from './Components/Adsons/ViewDetails/viewDetails'

export default () => {
  return (
    <>
      <div className="is-flex ">
        <Sidenav/>
        <Administrator/>
      </div>
    </>
  );
}