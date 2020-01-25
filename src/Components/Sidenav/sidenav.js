import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Logo from '../../assets/Images/scteisbe.png'
import Style from './style'
import Logout from '../../assets/Images/logout.png'

const Sidenav = (props) => {
    let { location: routerLocation } = props;
    let location = routerLocation.pathname;
    const currentActive = (value) => {
        if (location === "/") {
            return "active"
        }
        else {
            return location.indexOf(value) === 1 ? "active" : ""
        }
    }
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
                        <Link to={"/"}>
                            <div className={"dashboard-name-logo" + currentActive("/")}>
                                <img className="dashboard_icon" src={currentActive("/") === "active" ? require('../../assets/Images/dashboardactive.png') : require('../../assets/Images/dashboard.png')} alt="dashboard" />
                                <span className="dashboard-link fnt-poppins">DashBoard</span>
                            </div>
                        </Link>
                        {/* Administrator */}
                        <Link to={"/administrator"}>
                            <div className={"sidenav-name-logo" + currentActive("administrator")}>
                                <img className="icon-width-admin" src={currentActive("administrator") === "active" ? require('../../assets/Images/adminactive.png') : require('../../assets/Images/admin.png')} alt="Administrator" />
                                <span className="sidenav-link fnt-poppins active">Administrator</span>
                            </div>
                        </Link>
                        {/* Users */}
                        <Link to={"/users"}>
                            <div className={"sidenav-name-logo" + currentActive("users")}>
                                <img className="icon-width-admin" src={currentActive("users") === "active" ? require('../../assets/Images/usersactive.png') : require('../../assets/Images/user.png')} alt="Administrator" />
                                <span className="sidenav-link fnt-poppins active">User</span>
                            </div>
                        </Link>

                        {/* Subscription */}
                        <Link to={"/subscription"}>
                            <div className={"sidenav-name-logo" + currentActive("subscription")}>
                                <img className="administrator_icon" src={currentActive("subscription") === "active" ? require('../../assets/Images/subscriptionactive.png') : require('../../assets/Images/subscription.png')} alt="Subscription" />
                                <span className="sidenav-link fnt-poppins">Subscription</span>
                            </div>
                        </Link>
                        {/* Announcement */}
                        <Link to={"/announcement"}>
                            <div className={"sidenav-name-logo" + currentActive("/announcement")}>
                                <img className="administrator_icon" src={currentActive("/announcement") === "active" ? require('../../assets/Images/announcementactive.png') : require('../../assets/Images/announcement.png')} alt="Announcement" />
                                <span className="sidenav-link fnt-poppins">Announcement</span>
                            </div>
                        </Link>
                        {/* Categories */}
                        <Link to={"/category"}>
                            <div className={"sidenav-name-logo" + currentActive("/category")}>
                                <img className="administrator_icon" src={currentActive("/category") === "active" ? require('../../assets/Images/categoryactive.png') : require('../../assets/Images/category.png')} alt="Categories" />
                                <span className="sidenav-link fnt-poppins">Categories</span>
                            </div>
                        </Link>
                        {/* Newsletters */}
                        <Link to={"/newsletter"}>
                            <div className={"sidenav-name-logo" + currentActive("/newsletter")}>
                                <img className="administrator_icon" src={currentActive("/newsletter") === "active" ? require('../../assets/Images/newsletteractive.png') : require('../../assets/Images/newsletter.png')} alt="Newsletter" />
                                <span className="sidenav-link fnt-poppins">Newsletters</span>
                            </div>
                        </Link>
                        {/* Pages */}
                        <Link to={"/pages"}>
                            <div className={"sidenav-name-logo" + currentActive("/pages")}>
                                <img className="administrator_icon" src={currentActive("/pages") === "active" ? require('../../assets/Images/pagesactive.png') : require('../../assets/Images/pages.png')} alt="Pages" />
                                <span className="sidenav-link fnt-poppins">Pages</span>
                            </div>
                        </Link>
                        {/* General Setting */}
                        <Link to={"/setting"} >
                            <div className={"sidenav-name-logo" + currentActive("/setting")}>
                                <img className="administrator_icon" src={currentActive("/setting") === "active" ? require('../../assets/Images/generalsettingactive.png') : require('../../assets/Images/Setting.png')} alt="General Setting" />
                                <span className="sidenav-link fnt-poppins">General Setting</span>
                            </div>
                        </Link>
                        {/* Compaigns */}
                        <Link to={"/campaign"}>
                            <div className={"sidenav-name-logo" + currentActive("/campaign")} >
                                <img className="administrator_icon" src={currentActive("/campaign") === "active" ? require('../../assets/Images/compaignactive.png') : require('../../assets/Images/compaign.png')} alt="Compaign" />
                                <span className="sidenav-link fnt-poppins">Compaigns</span>
                            </div>
                        </Link>
                        {/* Products */}
                        <Link to={"/product"}>
                            <div className={"sidenav-name-logo" + currentActive("/product")}>
                                <img className="administrator_icon" src={currentActive("/product") === "active" ? require('../../assets/Images/productactive.png') : require('../../assets/Images/product.png')} alt="Products" />
                                <span className="sidenav-link fnt-poppins">Products</span>
                            </div>
                        </Link>
                        {/* Adsons*/}
                        <Link to={"/adson"}>
                            <div className={"sidenav-name-logo" + currentActive("/adson")}>
                                <img className="administrator_icon" src={currentActive("/adson") === "active" ? require('../../assets/Images/adsonsactive.png') : require('../../assets/Images/adson.png')} alt="Adson" />
                                <span className="sidenav-link fnt-poppins">Adsons</span>
                            </div>
                        </Link>
                        {/* Coupan */}
                        <Link to={"/coupans"}>
                            <div className={"sidenav-name-logo" + currentActive("/coupans")}>
                                <img className="administrator_icon" src={currentActive("/coupans") === "active" ? require('../../assets/Images/coupanactive.png') : require('../../assets/Images/coupan.png')} alt="Coupan" />
                                <span className="sidenav-link fnt-poppins">Coupan</span>
                            </div>
                        </Link>
                        {/* Template */}
                        <Link to={"/tamplates"} >
                            <div className={"sidenav-name-logo" + currentActive("/tamplates")}>
                                <img className="administrator_icon" src={currentActive("/tamplates") === "active" ? require('../../assets/Images/templateactive.png') : require('../../assets/Images/template.png')} alt="Coupan" />
                                <span className="sidenav-link fnt-poppins">Templates</span>
                            </div>
                        </Link>
                        {/* Files */}
                        <Link to={"/file"}>
                            <div className={"sidenav-name-logo" + currentActive("/file")}>
                                <img className="administrator_icon" src={currentActive("/file") === "active" ? require('../../assets/Images/filesactive.png') : require('../../assets/Images/file.png')} alt="Files" />
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