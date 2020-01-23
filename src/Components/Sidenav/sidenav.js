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
                        <img src={Logo} alt="Logo" />
                    </div>
                    {/* Sidenav Links*/}
                    <div className="sidenav-Links">
                        {/* dashboard  */}
                        <div className="dashboard-name-logo">
                            <img className="dashboard_icon" src={DashBoard} alt="dashboard" />
                            <span className="dashboard-link fnt-poppins">DashBoard</span>
                        </div>
                        {/* Administrator */}
                        <div className="sidenav-name-logo">
                            <img className="icon-width-admin" src={Administrator} alt="Administrator" />
                            <span className="sidenav-link fnt-poppins">Administrator</span>
                        </div>
                        {/* Users */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="User" src={User} />
                            <span className="sidenav-link fnt-poppins">Users</span>
                        </div>
                        {/* Subscription */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Subscription" src={Subscription} />
                            <span className="sidenav-link fnt-poppins">Subscription</span>
                        </div>
                        {/* Announcement */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Announcement" src={Announcement} />
                            <span className="sidenav-link fnt-poppins">Announcement</span>
                        </div>
                        {/* Categories */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Categories" src={Catogries} />
                            <span className="sidenav-link fnt-poppins">Categories</span>
                        </div>
                        {/* Newsletters */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Newsletter" src={Newsletter} />
                            <span className="sidenav-link fnt-poppins">Newsletters</span>
                        </div>
                        {/* Pages */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Pages" src={Pages} />
                            <span className="sidenav-link fnt-poppins">Pages</span>
                        </div>
                        {/* General Setting */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="General Setting" src={Setting} />
                            <span className="sidenav-link fnt-poppins">General Setting</span>
                        </div>
                        {/* Compaigns */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Compaign" src={Compaigns} />
                            <span className="sidenav-link fnt-poppins">Compaigns</span>
                        </div>
                        {/* Products */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Products" src={Products} />
                            <span className="sidenav-link fnt-poppins">Products</span>
                        </div>
                        {/* Adsons*/}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Adson" src={Adsons} />
                            <span className="sidenav-link fnt-poppins">Adsons</span>
                        </div>
                        {/* Coupan */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Coupan" src={Coupan} />
                            <span className="sidenav-link fnt-poppins">Coupan</span>
                        </div>
                        {/* Files */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Files" src={File} />
                            <span className="sidenav-link fnt-poppins">Files</span>
                        </div>
                        {/* Logout */}
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Logout" src={Logout} />
                            <span className="sidenav-link fnt-poppins">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            <Style />
        </>
    );
}