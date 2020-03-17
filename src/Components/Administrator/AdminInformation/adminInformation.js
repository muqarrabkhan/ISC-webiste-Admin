import React from 'react'
import Style from './style'
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks'
import { SINGLE_ADMIN } from '../../apollo/Quries/singleAdmin'
import { standardDate } from '../../functions'
import Loader from '../../commonComponents/Loader/loader'

const AdminInformation = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : ""
    const { loading, data } = useQuery(SINGLE_ADMIN(id))

    let date = data && data.singleadminbyId && data.singleadminbyId.CreatedDate;
    date = standardDate(date).standardDate;
    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Administrator</h6>
                        <button onClick={() => history.push("/administrator")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="container Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        {/* Make Admin Data */}
                        <div className="mrg-left-30">
                            <div className="heading-user fnt-poppins mrg-top-30">
                                <h3>Admin Information</h3>
                            </div>
                            <form>
                                {/* Name Email Role and Create Info data of Admin*/}
                                <div>
                                    <div className="mrg-top-20">
                                        <div className="flex-justify fnt-poppins">
                                            <label>Name*</label>
                                            <input className=" fnt-poppins inputs-for-responsive" disabled
                                                value={data && data.singleadminbyId && data.singleadminbyId.Name} />
                                        </div>
                                    </div>
                                    <div className="mrg-top-20 fnt-poppins">
                                        <div>
                                            <div>
                                                <label>Email*</label>
                                                <input className="fnt-poppins inputs-for-responsive" disabled
                                                    value={data && data.singleadminbyId && data.singleadminbyId.Email} />
                                            </div>
                                        </div>
                                        <div className="mrg-top-20 fnt-poppins">
                                            {data && data.singleadminbyId && data.singleadminbyId.RoleId == "1" ?
                                                <div>
                                                    <label>Role*</label>
                                                    <input className="fnt-poppins inputs-for-responsive" disabled value={data && data.singleadminbyId && data.singleadminbyId.RoleId == "1" ? "Super Admin" : ""} />
                                                </div>
                                                : ""}
                                            {data && data.singleadminbyId && data.singleadminbyId.RoleId == "2" ?
                                                <div>
                                                    <label>Role*</label>
                                                    <input className="fnt-poppins inputs-for-responsive" disabled value={data && data.singleadminbyId && data.singleadminbyId.RoleId == "2" ? "Moderator" : ""} />
                                                </div>
                                                : ""}
                                            {data && data.singleadminbyId && data.singleadminbyId.RoleId == "3" ?
                                                <div>
                                                    <label>Role*</label>
                                                    <input className="fnt-poppins inputs-for-responsive" disabled value={data && data.singleadminbyId && data.singleadminbyId.RoleId == "3" ? "Creater" : ""} />
                                                </div>
                                                : ""}
                                        </div>
                                        <div className="mrg-top-20 has-margin-bottom-30 fnt-poppins">
                                            <div>
                                                <label>Create Info*</label>
                                                <input className="fnt-poppins inputs-for-responsive" disabled value={date} />
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
                    <Style />
                </div>
                : <Loader/>}
        </>
    );
}

export default withRouter(AdminInformation);