import React from 'react'
import Style from './style'
import Deletelogo from '../../../../assets/Images/delete.svg'
import Editlogo from '../../../../assets/Images/edit.svg'
import { withRouter} from 'react-router-dom'

const Campaign= (props) => {
    let{history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="has-margin header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">User</h6>
                    <button onClick={()=>history.push("/user-information-activities")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    {/* Make Admin Data */}
                    <div className="has-margin-left-30">
                        <div className="heading-user fnt-poppins  has-margin-top-30">
                            <h3>User Information</h3>
                        </div>
                        <form>
                            {/* Name Email Role and Create Info data of Admin*/}
                            <div>
                                <div className="has-margin-top-20">
                                    <div className="flex-justify fnt-poppins">
                                        <label>Name*</label>
                                        <input className=" fnt-poppins inputs-of-admistrator" />
                                    </div>
                                </div>
                                <div className="has-margin-top-20 fnt-poppins">
                                    <div>
                                        <div>
                                            <label>Email*</label>
                                            <input className="fnt-poppins inputs-of-admistrator" />
                                        </div>
                                    </div>
                                    <div className="has-margin-top-20 fnt-poppins">
                                        <div>
                                            <label>Facebook Link*</label>
                                            <input className="fnt-poppins inputs-of-admistrator" />
                                        </div>
                                    </div>
                                    <div className="has-margin-top-20 has-margin-bottom-30 fnt-poppins">
                                        <div>
                                            <label>Create Info*</label>
                                            <input className="fnt-poppins inputs-of-admistrator" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="Table-Header">
                        <div className="is-flex">
                        <h6 onClick={()=>history.push("/user-information-activities")} className="cursor-pointer fnt-poppins">User Activity</h6>
                       <h6 onClick={()=>history.push("/user-information-campaings")} className="cursor-pointer fnt-poppins has-margin-left-20 border-bottom-inside-header-of-table">Compaign</h6>
                        </div>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                    <th>Created By</th>
                                    <th>Verified?</th>
                                    <th>Support</th>
                                    <th>Category</th>
                                    <th>Date Created</th>
                                    <th>Is Premium?</th>
                                    <th>Show On Category</th>
                                    <th>Status</th>
                                    <th className="bodr-of-none">IP Address</th>
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
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>
                                        <div className="appling-width-btns is-flex ">
                                            <div className=" is-flex image-btn-edit-delete-user-compaign">
                                                <img  onClick={()=>history.push("/edit-campaign")}className="cursor-pointer edit-image-table" alt="" src={Editlogo} />
                                                <img className="delete-image-table" alt="" src={Deletelogo} />
                                            </div>
                                            <div className=" is-flex btn-of-view-user-compaign ">
                                                <span onClick={()=>history.push("/Camapaign-details")} className="cursor-pointer view-btn-of-table">View Details</span>
                                                <span className="cursor-pointer view-btn-of-table">Affiliate User</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Style />
        </>
    );
}
export default withRouter(Campaign);