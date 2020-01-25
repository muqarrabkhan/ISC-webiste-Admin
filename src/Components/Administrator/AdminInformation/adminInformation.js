import React from 'react'
import Style from './style'
import { withRouter } from 'react-router-dom';

const AdminInformation= () => {

    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="has-margin">
                    <h6 className="heading6-of-header fnt-poppins">Administrator</h6>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    {/* Make Admin Data */}
                    <div className="has-margin-left-30">
                        <div className="heading-user fnt-poppins  has-margin-top-30">
                            <h3>Admin Information</h3>
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
                                            <label>Role*</label>
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
                        <h6 className="fnt-poppins">All Admins Record</h6>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Modified By</th>
                                    <th>Date</th>
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
                                </tr>
                                <tr className="table-footer">
                                    <td>Total</td>
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

export default withRouter(AdminInformation);