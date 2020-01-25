import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import {withRouter} from 'react-router-dom'

const viewAdson=(props) => {
    let{history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Adson</h6>
                    <button onClick={()=> history.push("/add-adson")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Adson Records</h6>
                        <div>
                            <select className="select-option-of-adminstrator fnt-poppins">
                                <option>Select Adson Status</option>
                                <option>Active</option>
                                <option>In-Active</option>
                            </select>
                        </div>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Type</th>
                                    <th>Place On</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                <tr className="table-row-data-of-body fnt-poppins">
                                    <td>Excellence in Learning & Development Form</td>
                                    <td>03-18-2019</td>
                                    <td>09-03-2019</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>
                                        <div className="appling-flex-btns">
                                            <img onClick={()=>history.push("/edit-adson")} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                            <img className="delete-image-table" alt="delete-button" src={Deletelogo} />
                                            <span onClick={()=>history.push("/view-details")} className="cursor-pointer view-btn-of-table">View Details</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-footer">
                                    <td>Total</td>
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
export default withRouter(viewAdson)