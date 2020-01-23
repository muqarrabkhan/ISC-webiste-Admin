import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './assets/Style/Common.scss'
import 'bulma-helpers/css/bulma-helpers.min.css'
import Route from './Routes'





export default () => {
  return (
    <>
      <BrowserRouter>
        <Route/>
      </BrowserRouter>
    </>
  );
}

