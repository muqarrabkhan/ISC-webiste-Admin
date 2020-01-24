import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'

export default () => {
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Templates</h6>
                    <button className="header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Tempelates Record</h6>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Title</th>
                                    <th>Subject</th>
                                    <th>Email</th>
                                    <th>From Text</th>
                                    <th>Status</th>
                                    <th>Type</th>
                                    <th>Date Created</th>
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
                                    <td>sub view</td>
                                    <td>
                                        <div style={{display:"flex"}}>
                                            <img className="edit-image-table" alt="" src={Editlogo}/>
                                            <img className="delete-image-table" alt="" src={Deletelogo}/>
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