import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Announcement</h6>
                    <Link to={"/add-announcement"}><button className="header-btn-of-table fnt-poppins">Create</button></Link>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Announcement Records</h6>
                        <input className="input-for-search fnt-poppins" placeholder="Search" />
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <div>
                            <table className="viewAnnouncement-Table">
                                <thead className="viewAnnouncement-Table-header fnt-poppins">
                                    <tr >
                                        <th className="white-color">Title</th>
                                        <th className="white-color">Flag</th>
                                        <th className="white-color">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="fnt-poppins background-white">
                                    <td>Alfreds Futterkiste</td>
                                    <td>
                                        <div className="switch-btn-of-tables">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                    </td>
                                     {/* buttons    */}
                                    <td>
                                        <div className="appling-flex-btns">
                                            <Link to={"/edit-announcement"}><img className="edit-image-table" alt="edit-button" src={Editlogo} /></Link>
                                            <img className="delete-image-table" alt="delete-button" src={Deletelogo} />
                                            <Link to={"/announcement-details"}><span className="view-btn-of-table ">View Details</span></Link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Style />
            </div>
        </>
    );
}