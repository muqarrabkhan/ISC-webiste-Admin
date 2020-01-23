import React from 'react'


export default()=>{
    return(
        <style>
        {`
             .dashboard-main-dev {
                background: #323b52;
                width: 330px;
                min-height: 100vh;
            }
            .dashboard-main-dev .logo-dashboard{
                padding-top: 3%;
                padding-left: 23%;
            }   
            .dashboard-name-logo {
                width: 189px;
                margin-top: 29%;
                margin-left: 20%;
            }
            .dashboard-name-logo .dashboard-link {
                margin-left: 18px;
                color: #c9ccd2;
            }
            .dashboard-link:hover{
                color: #e47529;
            }
            .dashboard_icon{
                width: 23px
            }
            .administrator_icon{
                width: 23px
            }
            .icon-width-admin{
                width: 19px
            }

            .sidenav-name-logo {
                margin-left: 20%!important;
                margin-top: 10%!important;
            }
            .sidenav-link{
                margin-left: 18px;
                color: #c9ccd2;
            }
            .sidenav-link:hover{
                color: #e47529;
            }



        `}
        </style>
    );
}