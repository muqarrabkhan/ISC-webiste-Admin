import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Administrator</h6>
                    <Link to={"add-administrator"}><button className="header-btn-of-table fnt-poppins">Create</button></Link>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Admins Record</h6>
                        <select className="select-option-of-adminstrator fnt-poppins">
                            <option>Select Admin Status</option>
                            <option>Active</option>
                            <option>In-Active</option>
                        </select>
                        <input className="input-for-search fnt-poppins" placeholder="Search" />
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>User Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                <tr className="table-row-data-of-body fnt-poppins">
                                    <td>Excellence in Learning & Development Form</td>
                                    <td>03-18-2019</td>
                                    <td>09-03-2019</td>
                                    <td>sub view</td>
                                    <td>
                                        <div className="is-flex">
                                          <Link to={"/edit-administrator"}><img className="edit-image-table" alt="edit-button" src={Editlogo} /></Link>
                                            <img className="delete-image-table" alt="delete-button" src={Deletelogo} />
                                            <Link to={"/admin-information"}><span className="view-btn-of-table">View Details</span></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-footer">
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Number</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}