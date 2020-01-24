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
                    <h6 className="heading6-of-header fnt-poppins">Setting</h6>
                    <Link to={"/add-setting"}><button className="header-btn-of-table fnt-poppins">Create</button></Link>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Setting Records</h6>
                        <select className="select-option-of-adminstrator fnt-poppins">
                            <option>Select Setting Type</option>
                            <option>General</option>
                            <option>Payment</option>
                            <option>Email</option>
                            <option>Apps</option>
                        </select>
                        <input className="input-for-search fnt-poppins" placeholder="Name" />
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <div>
                            <table className="setting-table-main">
                                <thead className="setting-header-title fnt-poppins">
                                    <tr>
                                        <th className="white-color">Name</th>
                                        <th className="white-color">Key</th>
                                        <th className="white-color">Type</th>
                                        <th className="white-color">Action</th>
                                    </tr>
                                </thead>
                                <tr className="fnt-poppins background-white">
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                    <td>
                                        <Link to={"/edit-setting"}><img className="edit-image-table setting-edit-btn" alt="edit-button" src={Editlogo} /></Link>
                                        <img className="delete-image-table setting-edit-btn" alt="edit-button" src={Deletelogo} />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <Style />
            </div>
        </>
    );
}