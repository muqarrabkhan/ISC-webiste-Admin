import React from 'react'
import Style from './style'
import { withRouter} from 'react-router-dom'

const UserInformation= (props) => {
    let{history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="has-margin header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">User</h6>
                    <button onClick={()=>history.push("/users")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    {/* Make Admin Data */}
                    <div className="mrg-left-30">
                        <div className="heading-user fnt-poppins mrg-top-30">
                            <h3>User Information</h3>
                        </div>
                        <form>
                            {/* Name Email Role and Create Info data of Admin*/}
                            <div>
                                <div className="mrg-top-20">
                                    <div className="flex-justify fnt-poppins">
                                        <label>Name*</label>
                                        <input className=" fnt-poppins inputs-for-responsive" />
                                    </div>
                                </div>
                                <div className="mrg-top-20 fnt-poppins">
                                    <div>
                                        <div>
                                            <label>Email*</label>
                                            <input className="fnt-poppins inputs-for-responsive" />
                                        </div>
                                    </div>
                                    <div className="mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Facebook Link*</label>
                                            <input className="fnt-poppins inputs-for-responsive" />
                                        </div>
                                    </div>
                                    <div className="mrg-top-20 has-margin-bottom-30 fnt-poppins">
                                        <div>
                                            <label>Create Info*</label>
                                            <input className="fnt-poppins inputs-for-responsive" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="Table-Header">
                        <div className="is-flex">
                        <h6 onClick={()=>history.push("/user-information-activities")} className="cursor-pointer fnt-poppins  mrg-left-20 border-bottom-inside-header-of-table">User Activity</h6>
                        <h6 onClick={()=>history.push("/user-information-campaings")} className="cursor-pointer fnt-poppins has-padding-left-20">Compaign</h6>
                        </div>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Image</th>
                                    <th>Type</th>
                                    <th>Campaign/Country Name</th>
                                    <th>Time</th>
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
            <Style />
        </>
    );
}
export default withRouter(UserInformation);