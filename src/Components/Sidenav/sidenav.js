import React from 'react'
import { withRouter, Link } from 'react-router-dom'
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
import Template from '../../assets/Images/template.png'
import File from '../../assets/Images/file.png'
import Logout from '../../assets/Images/logout.png'

const Sidenav = (props) => { 

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
                        <Link to={"/dashboard"}>
                        <div className="dashboard-name-logo">
                            <img className="dashboard_icon" src={DashBoard}  alt="dashboard" />
                            <span className="dashboard-link fnt-poppins">DashBoard</span>
                        </div>
                        </Link>
                        
                        {/* Administrator */}
                        <Link to={"/administrator"}>
                        <div className="sidenav-name-logo" >
                            <img className="icon-width-admin" src={Administrator} alt="Administrator" />
                            <span className="sidenav-link fnt-poppins">Administrator</span>
                        </div>
                        </Link>
                        {/* Users */}
                        <Link to={"/users"}>
                        <div className="sidenav-name-logo ">
                            <img className="administrator_icon" alt="User" src={User} />
                            <span className="sidenav-link fnt-poppins">Users</span>
                        </div>
                        </Link>
                        {/* Subscription */}
                        <Link to={"/subscription"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Subscription" src={Subscription} />
                            <span className="sidenav-link fnt-poppins">Subscription</span>
                        </div>
                        </Link>
                        {/* Announcement */}
                        <Link to={"/announcement"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Announcement" src={Announcement} />
                            <span className="sidenav-link fnt-poppins">Announcement</span>
                        </div>
                        </Link>
                        {/* Categories */}
                        <Link to={"/category"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Categories" src={Catogries} />
                            <span className="sidenav-link fnt-poppins">Categories</span>
                        </div>
                        </Link>
                        {/* Newsletters */}
                        <Link to={"/newsletter"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Newsletter" src={Newsletter} />
                            <span className="sidenav-link fnt-poppins">Newsletters</span>
                        </div>
                        </Link>
                        {/* Pages */}
                        <Link to={"/pages"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Pages" src={Pages} />
                            <span className="sidenav-link fnt-poppins">Pages</span>
                        </div>
                        </Link>
                        {/* General Setting */}
                        <Link to={"/setting"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="General Setting" src={Setting} />
                            <span className="sidenav-link fnt-poppins">General Setting</span>
                        </div>
                        </Link>
                        {/* Compaigns */}
                        <Link to={"/campaign"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Compaign" src={Compaigns} />
                            <span className="sidenav-link fnt-poppins">Compaigns</span>
                        </div>
                        </Link>
                        {/* Products */}
                        <Link to={"/product"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Products" src={Products} />
                            <span className="sidenav-link fnt-poppins">Products</span>
                        </div>
                        </Link>
                        {/* Adsons*/}
                        <Link to={"/adson"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Adson" src={Adsons} />
                            <span className="sidenav-link fnt-poppins">Adsons</span>
                        </div>
                        </Link>
                        {/* Coupan */}
                        <Link to={"/coupans"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Coupan" src={Coupan} />
                            <span className="sidenav-link fnt-poppins">Coupan</span>
                        </div>
                        </Link>
                        {/* Template */}
                        <Link to={"tamplates"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Coupan" src={Template} />
                            <span className="sidenav-link fnt-poppins">Templates</span>
                        </div>
                        </Link>
                        {/* Files */}
                        <Link to={"file"}>
                        <div className="sidenav-name-logo">
                            <img className="administrator_icon" alt="Files" src={File} />
                            <span className="sidenav-link fnt-poppins">Files</span>
                        </div>
                        </Link>
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
export default withRouter(Sidenav);