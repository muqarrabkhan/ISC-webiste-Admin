import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import {withRouter} from 'react-router-dom'

const SubscriptionDetailRecords= (props) => {
    let{history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Subscription Detail Records</h6>
                   <button onClick={()=>history.push("/add-subscription-record")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">Subscription Detail Records</h6>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                <tr className="table-row-data-of-body fnt-poppins">
                                    <td>Excellence in Learning & Development Form</td>
                                     <td>
                                        <div className="is-flex">
                                           <img onClick={()=>history.push("/edit-subscription-detail")}className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo}/>
                                            <img className="delete-image-table" alt="Delete-button" src={Deletelogo}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-footer">
                                    <td>Total</td>
                                     <td>Number</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            <Style/>
            </div>
        </>
    );
}
export default withRouter(SubscriptionDetailRecords);