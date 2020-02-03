import React from 'react'


export default()=>{
    return(
        <style>
        {`
             .dashboard-main-dev {
                background: #4379E9;
                width: 330px;
                min-height: 160vh;
            }
            .dashboard-main-dev .logo-dashboard{
                padding-top: 3%;
                padding-left: 20%;
                width: 206px;
            }   
            .dashboard-name-logo {
                width: 189px;
                margin-top: 21%;
                margin-left: 20%;
                color: #a4c0fb;
            }
            span.dashboard-link.fnt-poppins {
                padding-left: 18px;
            }

            // active state Styling stars here 
            // .dashboard-name-logoactive {
            // }
            
            .dashboard-name-logoactive{
                width: 189px;
                margin-left: 20%;
                margin-top: 18%;
                color: #ffffff;
            }
            span.dashboard-link.fnt-poppins.active-text {
                margin-left: 18px;
            }
            span.dashboard-link.fnt-poppins.active-text {
                margin-left: 18px;
            }
            .sidenav-name-logoactive {
                margin-top: 10%!important;
                margin-left: 20%!important;
                color: #fff;
            }
            // ends here
            .dashboard-name-logo .dashboard-link {
                margin-left: 18px;
                color: #c9ccd2;
            }
         
            .dashboard_icon{
                width: 24px
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
            .sidenav-name-logo .sidenav-link{
                margin-left: 18px;
                color: #a4c0fb;
            }
            span.sidenav-link.fnt-poppins {
                margin-left: 20px;
            }
            .sidenav-link:hover{
                color: #fff;
            }



        `}
        </style>
    );
}