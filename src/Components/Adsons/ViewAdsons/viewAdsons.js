import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { ADSONS } from '../../apollo/Quries/adsonsQurie'
import Loader from '../../commonComponents/Loader/loader'

const ViewAdson = (props) => {
    let { history } = props;
    const { loading, data } = useQuery(ADSONS);

    return (
        <>
        {!loading ? 
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Adson</h6>
                    <button onClick={() => history.push("/add-adson")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
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
                                {data && data.length !== 0 && data.getAdsons.map((single, index) =>
                                    <tr className="table-row-data-of-body fnt-poppins">
                                        <td>{single.type ? single.type : "-"}</td>
                                        <td>{single.place_on ? single.place_on : "-"}</td>
                                        <td>09-03-2019</td>
                                        <td>sub view</td>
                                        <td>{single.status ? single.status : "-"}</td>
                                        <td>
                                            <div className="appling-flex-btns">
                                                <img onClick={() => history.push("/edit-adson")} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                <img className="delete-image-table" alt="delete-button" src={Deletelogo} />
                                                <span onClick={() => history.push("/view-details")} className="cursor-pointer view-btn-of-table">View Details</span>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Style />
            </div>
            :<Loader/>}
        </>
    );
}
export default withRouter(ViewAdson)