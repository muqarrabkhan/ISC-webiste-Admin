import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Style from './style'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Subscription</h6>
                    <Link to={"/add-subscription-record"}><button className="header-btn-of-table fnt-poppins">Create</button></Link>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Subscription Records</h6>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Discount Precentage</th>
                                    <th>Discount Name</th>
                                    <th>Discount Start Date</th>
                                    <th>Discount End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                <tr className="table-row-data-of-body fnt-poppins">
                                    <td>Excellence in Learning & Development Form</td>
                                    <td>03-18-2019</td>
                                    <td>09-03-2019</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>
                                        <div className="is-flex">
                                            <Link to={"/edit-subscription"}><img className="edit-image-table view-subscription-btn-edit" alt="edit-button" src={Editlogo} /></Link>
                                            <Link to={"/subscription-detail-record"}><span className="view-btn-of-table view-subscription-btn">View Details</span></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-footer">
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Number</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Style />
            </div>
        </>
    );
}