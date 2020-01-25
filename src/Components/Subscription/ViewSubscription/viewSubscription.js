import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'

const ViewSubscription= (props) => {
    let{history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Subscription</h6>
                    <button onClick={()=>history.push("add-subscription-record")}className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
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
                                           <img onClick={()=>history.push("/edit-subscription")} className="cursor-pointer edit-image-table view-subscription-btn-edit" alt="edit-button" src={Editlogo} />
                                            <span onClick={()=>history.push("/subscription-detail-record")} className="cursor-pointer view-btn-of-table view-subscription-btn">View Details</span>
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
export default withRouter(ViewSubscription);