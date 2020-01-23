import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './assets/Style/Common.scss'
import 'bulma-helpers/css/bulma-helpers.min.css'
import Route from './Routes'
import Dh from './Components/Dashboard/dashboard'




export default () => {
  return (
    <>
    <Dh/>
      {/* <BrowserRouter>
        <Route/>
      </BrowserRouter> */}
    </>
  );
}

