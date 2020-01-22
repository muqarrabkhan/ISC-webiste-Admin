import React from 'react'
import Logo from '../../assets/Images/scteisbe.png'
import Style from './style'

import DashBoard from '../../assets/Images/dashboard.png'
import Administrator from '../../assets/Images/admin.png'
import User from '../../assets/Images/user.png'
import Subscription from '../../assets/Images/subscription.png'
import Announcement from '../../assets/Images/announcement.png'
import Catogries from '../../assets/Images/category.png'
import Newsletter from '../../assets/Images/newsletter.png'
import Pages from '../../assets/Images/pages.png'
import Setting from '../../assets/Images/Setting.png'
import Compaigns from '../../assets/Images/compaign.png'
import Products from '../../assets/Images/product.png'
import Adsons from '../../assets/Images/adson.png'
import Coupan from '../../assets/Images/coupan.png'
import File from '../../assets/Images/file.png'
import Logout from '../../assets/Images/logout.png'


export default () => {
    return (
        <>
            <div className="container-fluid dashboard-main-dev">
                <div className="column">

                    {/* logo  */}
                    <div className="logo-dashboard">
                        <img src={Logo} alt="Logo"/>
                    </div>

                    {/* Sidenav Links*/}
                    <div className="sidenav-Links">

                        {/* dashboard  */}

                        <div className="dashboard-name-logo">
                            <img className="dashboard_icon" src={DashBoard} alt="dashboard"/>
                            <a className="dashboard-link fnt-poppins">DashBoard </a>
                        </div>

                        {/* Administrator */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Administrator} alt="Administrator"/>
                            <a className="sidenav-link fnt-poppins">Administrator</a>
                        </div>

                        {/* Users */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={User} />
                            <a className="sidenav-link fnt-poppins">Users</a>
                        </div>

                        {/* Subscription */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Subscription} />
                            <a className="sidenav-link fnt-poppins">Subscription</a>
                        </div>

                        {/* Announcement */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Announcement} />
                            <a className="sidenav-link fnt-poppins">Announcement</a>
                        </div>

                        {/* Categories */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Catogries} />
                            <a className="sidenav-link fnt-poppins">Categories</a>
                        </div>

                        {/* Newsletters */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Newsletter} />
                            <a className="sidenav-link fnt-poppins">Newsletters </a>
                        </div>


                        {/* Pages */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Pages} />
                            <a className="sidenav-link fnt-poppins">Pages</a>
                        </div>


                        {/* General Setting */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Setting} />
                            <a className="sidenav-link fnt-poppins">General Setting</a>
                        </div>


                        {/* Compaigns */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Compaigns} />
                            <a className="sidenav-link fnt-poppins">Compaigns</a>
                        </div>

                        {/* Products */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Products} />
                            <a className="sidenav-link fnt-poppins">Products</a>
                        </div>


                        {/* Adsons*/}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Adsons} />
                            <a className="sidenav-link fnt-poppins">Adsons</a>
                        </div>

                        {/* Coupan */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Coupan} />
                            <a className="sidenav-link fnt-poppins">Coupan</a>
                        </div>


                        {/* Files */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={File} />
                            <a className="sidenav-link fnt-poppins">Files </a>
                        </div>

                        {/* Logout */}

                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" src={Logout} />
                            <a className="sidenav-link fnt-poppins">Logout</a>
                        </div>

                    </div>

                </div>
            </div>
            <Style />
        </>
    );
}