import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import {withRouter} from 'react-router-dom'

const ViewUser= (props) => {
    let {history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Users</h6>
                   <button onClick={()=>history.push("/add-user")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All User Records</h6>
                        <div className="table-data-row">
                            <select className="select-option-of-adminstrator fnt-poppins select-input-responsive">
                                <option>Select User Status</option>
                                <option>Active</option>
                                <option>In-Active</option>
                            </select>
                            <select className="select-option-of-adminstrator fnt-poppins select-option-of-affilated-user">
                                <option>Select Affiliated Status</option>
                                <option>Normal</option>
                                <option>Affiliated User</option>
                            </select>
                        </div>
                        <div className="table-data-row" >
                            <input className="input-for-search fnt-poppins input-for-search-user-1" placeholder="Name" />
                            <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Email" />
                        </div>
                    </div>

                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Status Affiliated</th>
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
                                            <img onClick={()=>history.push("/edit-user")}className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                            <img className="delete-image-table" alt="delete-button" src={Deletelogo} />
                                            <span onClick={()=>history.push("/user-information-activities")} className="cursor-pointer view-btn-of-table">View Details</span>
                                            <span className="view-btn-of-table">Affiliate User</span>
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

                <Style />
            </div>
        </>
    );
}
export default withRouter(ViewUser);